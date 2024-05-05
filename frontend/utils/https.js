import axios from 'axios'

export const http = async (method, url, data = null) => {
  let port = `http://localhost:5555${url}`

  try {
    let response
    switch (method.toLowerCase()) {
      case 'get':
        response = await axios.get(port)
        break
      case 'post':
        response = await axios.post(port, data)
        break
      //   case 'put':
      //     response = await axios.put(url, data)
      //     break
      //   case 'delete':
      //     response = await axios.delete(url)
      //     break
      default:
        throw new Error('Invalid HTTP method provided')
    }
    return response.data
  } catch (error) {
    throw new Error(`Error making ${method} request to ${url}: ${error.message}`)
  }
}
