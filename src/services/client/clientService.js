import { httpService } from '../httpService'

class ClientService {
  constructor() {
    this.problemas = [
      {
        title: 'Titulo 1',
        descricao: 'ESTE AQUI É UM PROBLEMA TOPE'
      }, 
      {
        title: 'Titulo 2',
        descricao: 'ESSE AQUI É OUTRO PROBLEMA'
      }
    ]
  }

  async findClients() {
    const clients = await httpService.get('/v1/cliente/')
    return clients.map(client => ({ ...client, problemas: this.problemas }))
  }
}

export const clientService = new ClientService()
