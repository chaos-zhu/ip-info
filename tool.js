var geoip = require('geoip-lite')

function getIpDetail(ip) {
  let {country, timezone} = geoip.lookup(ip) || {}
  return { country, timezone }
}

module.exports = {
  getIpDetail
}