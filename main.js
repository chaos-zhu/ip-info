const express = require('express')
const app = express()
const requestIp = require('request-ip')
const { getIpDetail } = require('./tool')

app.get('/', async (req, res) => {
  let clientIp = requestIp.getClientIp(req)
  console.log('客户端原始ip：', clientIp)
  const { country, province, city, isp, ip } = await getIpDetail(clientIp)
  res.send(`
    <ul>
      <li>IP：${ip}</li>
      <li>国家：${country}</li>
      <li>省份：${province}</li>
      <li>城市：${city}</li>
      <li>供应商：${isp}</li>
    </ul>`
  )
})


const port = 80
app.listen(port, () => {
  console.log(`Server(http) is running: http://127.0.0.1:${ port }`)
})
