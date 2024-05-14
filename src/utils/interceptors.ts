import axios from 'axios'

const http = axios.create({
  baseURL: process.env['NEXT_PUBLIC_API_ENDPOINT'],
})

// Request interceptor
http.interceptors.request.use(
  (config) => {
    // Modify the request config here (add headers, authentication tokens)
    // const accessToken = process.env['NEXT_PUBLIC_TOKEN']
    // if (accessToken && config.headers) {
    //   config.headers['Authorization'] = `Bearer ${accessToken}`
    // }
    return config
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error)
  }
)
// End of Request interceptor

// Response interceptor
http.interceptors.response.use(
  (response) => {
    // Modify the response data here

    return response
  },
  (error) => {
    // Handle response errors here

    return Promise.reject(error)
  }
)
// End of Response interceptor

export default http
