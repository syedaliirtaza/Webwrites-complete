const axios = require('axios');

const instance = axios.create({
    baseURL: "https://git.heroku.com/banana-pie-42496.git"
})

export default instance;