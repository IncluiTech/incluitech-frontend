import axios from 'axios'
import config from '../../util/config'

const createData = (id, name, email, tags) => {
    return { id, name, email, tags }
}

const mockedData = [
    createData("1", "Pessoa1", "pessoa@mailing", ['tag', 'tag', 'tag', 'tag', 'tag']),
    createData("2", "Pessoa2", "pessu@mailing", ['tag', 'tag', 'tag', 'tag', 'tag']),
    createData("3", "Pessoa3", "people@mailing", ['tag', 'tag', 'tag', 'tag', 'tag', 'tag']),
    createData("4", "Pessoa4", "person@mailing", ['tag', 'tag', 'tag', 'tag']),
    createData("5", "Pessoa5", "vivente@mailing", ['tag', 'tag', 'tag'])
]

export default function () {
    const httpRequest = axios.create({
        baseURL: config.API_SSP_URL
    })

    const buildClientData = (clients) => {
        return clients.map(client => {
            return {
                id: client.id,
                name: client.name,
                email: client.email,
                tags: client.tags
            }
        })
    }

    const findClients = async () => {
        try {
            const response = await httpRequest().get("/v1/clients")
            return buildClientData(response.data)
        } catch (ex) {
            console.error('Error Trying to get users in path /v1/clients', ex)
            throw ex
        }
    }

    return {
        findClients: function () {
            return mockedData
        }
    }
}