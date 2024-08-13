import { BASE_URL } from '../config/config';
import { Auth, Register, User } from '../types';
import { saveTokenStorage } from './auth-token.service';
import { request } from './helpers';

const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json",
};

export const authService = {
  async checkEmail(email: string): Promise<Response> {
    const response = await request(`${BASE_URL}:8080/public/users/checkEmail?email=${email}`, {
      method: "GET",
      headers
    })

    return response;
  },

  async register(data: Register): Promise<User> {
    const response = await request(`${BASE_URL}:8080/public/auth/register`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    })

    return response;
  },

  async authorize(data: Auth): Promise<string> {
    const response = await request(`${BASE_URL}:8080/public/auth/login`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    })

    if (response.token) saveTokenStorage(response.token);

    return response.token;
  },

  async getCurrentUser(email: string, token: string): Promise<User> {
    const response = await request(`${BASE_URL}:8080/user/users/email/${email}`, {
      method: "GET",
      headers: {
        ...headers,
        'Authorization': `Bearer ${token}`,
      },
    })

    return response;
  },
}