import { httpService } from '../httpService'

const BASE_URL = '/v1/solucionador/'

class SolucionadorService {
  async findSolucionadoresCadastroPendente() {
    return httpService.get(BASE_URL + '/pendente')
  }

  async aprovarCadastro(facebookId) {
    return httpService.put(BASE_URL + facebookId)
  }
}

export const solucionadorService = new SolucionadorService()
