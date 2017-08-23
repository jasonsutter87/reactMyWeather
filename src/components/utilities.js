import axios from 'axios';

export const GeocoderApiCall = (city) =>{
  const API_KEY = 'AIzaSyAuxVeyKCBCO__GljJU8z93-GYlwxo3xqU';
  const CITY = city;

  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${CITY}&key=${API_KEY}`,{})
  .then((response) => {
      console.log(response.data.results[0]['geometry']['location']);
      return response.data.results[0]['geometry']['location'];
    })
    .catch(function (error) {
      console.log(error);
      return error;
    })
  }










export const breezometerApiCall = () =>{
  axios.get('https://api.breezometer.com/baqi', {
    params: {
      lat: 30.2688806,
      lon: -97.7427527,
      key: 'a3b8b658b30540b19f033f9b5dfe6511',
    }
  })

  .then((response) => {

    this.setState({
      weather: response.data.breezometer_description,
      color: response.data.breezometer_color,
    });
  })
  .catch(function (error) {
    return error;
  })
}
