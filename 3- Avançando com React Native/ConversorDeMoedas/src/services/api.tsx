//https://economia.awesomeapi.com.br/json

// Rota para EUR > BRL /all/EUR-BRL

import axios from "axios";

const api = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/json/'
})

export default api