const express = require('express')
const dns = require('dns')
const axios = require('axios')
const app = express()
const PORT = process.env.PORT || 3001
const blynkToken = '70bfe532b9a84f89a889e0c7dfad386f'

let blynkIp = '188.166.206.43';

// dns.setServers(['8.8.8.8', '8.8.4.4'])
// dns.resolve('blynk-cloud.com', (err, res) => {
//   console.log("with google", res)
//   blynkIp=res[0]
// })


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use(express.static('build'))

app.get('/send', (req, res) => {
  const params = req.query
  
  axios.get(`http://${blynkIp}/${blynkToken}/update/V31`, {
    params: {
      value: `${params.station},${params.orientation},${params.mission},${params.param1},${params.param2},${params.param3}`
    },
    headers: {
      'Host': 'blynk-cloud.com'
    }
  })
  .then(function (response) {
    console.log(response);
    // res.json(response)
    res.json({horray: 1})
  })
  .catch(function (error) {
    console.log(error);
    res.status(500).send({msg: error.message})
  })

})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})