const express = require('express')
const axios = require('axios')
const app = express()
const PORT = process.env.PORT || 3001
const blynkToken = '70bfe532b9a84f89a889e0c7dfad386f'

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use(express.static('build'))

app.get('/send', (req, res) => {
  const params = req.query
  
  axios.get(`http://blynk-cloud.com/${blynkToken}/update/V31`, {
    params: {
      value: `${params.station},${params.orientation},${params.mission},${params.param1},${params.param2},${params.param3}`
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

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})