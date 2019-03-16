import axios from 'axios';

const baseURL = 'https://devmeeting-63f40.firebaseio.com';

export default axios.create({
  baseURL,
});
