import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://backend.getlinked.ai', // Replace with your API base URL

});

export default instance;