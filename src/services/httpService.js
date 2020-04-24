import axios from 'axios'
import config from '../util/config'

class HttpService {
  constructor() {
    this.axios = axios.create({
      baseURL: config.API_SSP_URL,
    })
  }

  async get(url) {
    try {
      const response = await this.axios.get(url)
      return response && response.data
    } catch (ex) {
      console.error(`Error trying to get in path ${url}`, ex)
      throw ex
    }
  }

  async post(url, data = {}) {
    try {
      const response = await this.axios.post(url, data)
      return response && response.data
    } catch (ex) {
      console.error(`Error trying to post in path ${url}. Data: ${data}`, ex)
      throw ex
    }
  }

  async put(url, data = {}) {
    try {
      const response = await this.axios.put(url, data)
      return response && response.data
    } catch (ex) {
      console.error(`Error trying to put in path ${url}. Data: ${data}`, ex)
      throw ex
    }
  }

  async delete(url) {
    try {
      const response = await this.axios.delete(url)
      return response && response.data
    } catch (ex) {
      console.error(`Error trying to delete in path ${url}`, ex)
      throw ex
    }
  }

  async accessExternal(method, url) {
    return this.axios[method](url)
  }
}

export const httpService = new HttpService()
