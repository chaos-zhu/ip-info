const express = require('express')
const app = express()
const requestIp = require('request-ip')
const { getIpDetail } = require('./tool')

app.get('/', function(req, res) {
  let ip = requestIp.getClientIp(req)
  console.log(ip)
  const { country, timezone } = getIpDetail('58.61.51.35')
  res.send(`${ip}, ${country}, ${timezone}`)
})


const port = 59999
app.listen(port, () => {
  console.log(`Server(http) is running: http://127.0.0.1:${ port }`)
})
