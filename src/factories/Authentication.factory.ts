import { AxiosResponse } from 'axios'

class AuthenticationFactory {
	protected token: string = ''

	public constructor(response: AxiosResponse) {
		if ('data' in response && 'jwt' in response.data) {
			this.token = response.data.jwt
		}
	}

	public getToken = () => {
		return this.token
	}
}

export default AuthenticationFactory
