import axios from 'axios'
const DEV = process.env.REACT_APP_DEV
export function sendAction (orientation, mission, station, param1, param2, param3) {
  return axios.get(DEV ? 'http://localhost:3001/send' : '/send', {
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