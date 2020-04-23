import { httpService } from '../httpService'

class ClientService {
  async findClients() {
    return httpService.get("/v1/client")
  }
}

export const clientService = new ClientService()
