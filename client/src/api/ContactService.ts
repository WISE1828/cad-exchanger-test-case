import axios from 'axios'

export interface IContact {
	name: string
	email: string
	message: string
}

export default class ContactService {
	static async postContact(name: string, email: string, message: string) {
		const response = await axios.post('http://localhost:3000/api/contact', {name, email, message})
		return response
	}
}
