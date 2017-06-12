import axios from 'axios';

export default function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log('there is a token');
  } else {
    delete axios.defaults.headers.common['Authorization'];
    console.log('there is NO token');
  }
}