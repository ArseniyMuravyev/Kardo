import Cookies from 'js-cookie'

export const ACCESS_TOKEN = 'accessToken';

export const getAccessToken = () => {
	const accessToken = Cookies.get(ACCESS_TOKEN)
	return accessToken || null
}

export const saveTokenStorage = (accessToken: string) => {
	Cookies.set(ACCESS_TOKEN, accessToken, {
		domain: '51.250.35.168',
		sameSite: 'strict',
		expires: 10000
	})
}

export const removeFromStorage = () => {
	Cookies.remove(ACCESS_TOKEN)
}
