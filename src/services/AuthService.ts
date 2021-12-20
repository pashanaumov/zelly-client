import { UserEmail, UserPassword } from '../types/Utility/User';
import { RegisterRequestBody, UserResponse } from '../types/Auth/LoginResponse';
import { useApi } from './useApiService';

const loginUrl = `http://localhost:3000/auth/login`;
const registerUrl = `http://localhost:3000/auth/register`;

export function useAuthService() {
  const { POST } = useApi();

  function login(email: UserEmail, password: UserPassword) {
    return POST<UserResponse>(loginUrl, { email, password }).then((response) => {
      if (response.token) {
        localStorage.setItem('user', response.token);
      }
    });
  }

  function logout() {
    localStorage.removeItem('user');
  }

  function register(body: RegisterRequestBody) {
    const { email, password, language, country } = body;
    return POST<UserResponse>(registerUrl, { email, password, language, country }).then((response) => {
      if (response.token) {
        localStorage.setItem('user', response.token);
      }
    });
  }

  return {
    login,
    logout,
    register,
  };
}
