import axios from 'axios';
import env from 'react-native-config';

const client = axios.create({
  baseURL: `${env.BASE_URL}`,
  headers: {
    apiKey: env.API_KEY,
  },
});

export default client;
