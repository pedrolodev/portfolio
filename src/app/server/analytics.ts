import { v4 as uuidv4 } from 'uuid'

const apiAddress = process.env.API_ADDRESS

export async function logger(
      ip: string,
      userAgent: string,
      time: string,
      project: string
) {
      const url = apiAddress + '/logs'
      const id = uuidv4()
      const opciones = {
            method: 'PUT',
            headers: {
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, ip, userAgent, time, project })
      }
      try {
            if (project === 'main_link') await fetch(url, opciones)
      } catch (e) {
            console.log(e)
      }
}
