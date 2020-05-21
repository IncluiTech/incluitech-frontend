import { httpService } from '../httpService'

const BASE_URL = '/v1/solucionador/'

class SolucionadorService {
  async findSolucionadores() {
    return httpService.get(BASE_URL)
  }

  async aprovarCadastro(facebookId) {
    return httpService.put(BASE_URL + facebookId)
  }
}

export const solucionadorService = new SolucionadorService()
