import axios from 'axios'

export function sendAction (station, orientation, mission, param1, param2, param3) {
  return axios.get('/send', {
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