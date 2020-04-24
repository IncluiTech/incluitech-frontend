import { httpService } from '../httpService'

class ClientService {
  async findClients() {
    return httpService.get('/v1/cliente/')
  }
}

export const clientService = new ClientService()
