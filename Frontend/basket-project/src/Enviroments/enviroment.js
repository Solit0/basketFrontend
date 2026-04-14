// src/Enviroments/enviroment.js
import axios from 'axios'
export const api = axios.create({
    baseURL: 'https://basketpro-backend.onrender.com/api'
})
