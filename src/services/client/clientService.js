import { httpService } from '../httpService'

class ClientService {
  constructor() {
    this.problemas = ['ESTE AQUI É UM PROBLEMA TOPE', 'ESSE AQUI É OUTRO PROBLEMA']
  }

  async findClients() {
    const clients = await httpService.get('/v1/cliente/')
    return clients.map(client => ({ ...client, problemas: this.problemas }))
  }
}

export const clientService = new ClientService()
