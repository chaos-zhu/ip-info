var axios = require('axios')

const type = 4 // or 6
const key = 'f6d614e4d1f3a322dddcc7875c195f47'

async function getIpDetail(ip) {
  ip = ip.replace(/[^\d|^\.]/g, '')
  let res = await axios.get(`https://restapi.amap.com/v5/ip?type=${type}&key=${key}&ip=${ip}`).then(({data}) => data)
  console.log('查询信息：', res)
  const { country, province, city, isp } = res
  return { country, province, city, isp, ip }
}

module.exports = {
  getIpDetail
}
