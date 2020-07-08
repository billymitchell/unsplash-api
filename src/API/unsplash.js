//Axios is a 3rd party fetch alternative for GET requests

import axios from 'axios';

//Create default properties with axios
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  //authentication
  headers: {
    Authorization: 'Client-ID GeMshcpseiTtNj-WninhNaptxfS9X95uIK7f-YAUm5M',
  },
});
