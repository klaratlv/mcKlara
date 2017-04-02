const express = require('express')
const axios = require('axios')
const app = express()
const PORT = 3001
const blynkToken = '70bfe532b9a84f89a889e0c7dfad386f'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/send', (req, res) => {
  const station = req.query.station
  const mission = req.query.mission
  const orientation = req.query.orientation
  const param1 = req.query.param1
  const param2 = req.query.param2
  const param3 = req.query.param3
  
  axios.get(`http://blynk-cloud.com/${blynkToken}/update/V31`, {
    params: {
      value: `${station},${orientation},${mission},${param1},${param2},${param3}`
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })

  res.send('Hello World!')
})

app.listen(PORT || 3001, () => {
  console.log('Example app listening on port 3001!')
})