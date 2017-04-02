import axios from 'axios'

module.exports = function sendAction (station, orientation, mission, param1, param2, param3) {
  return axios.get('http://localhost:3001/send', {
    params: {
      station,
      orientation,
      mission,
      param1,
      param2,
      param3
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}