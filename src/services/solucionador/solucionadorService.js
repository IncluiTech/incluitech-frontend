import { httpService } from '../httpService'

class SolucionadorService {
  async findSolucionadores() {
    return httpService.get('/v1/solucionador/')
  }
}

export const solucionadorService = new SolucionadorService()
