import { useQuery, useMutation, useQueryClient } from 'react-query';
import api from '../lib/axios';

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData extends LoginData {
  name: string;
}

export function useAuth() {
  const queryClient = useQueryClient();

  const login = useMutation(
    async (data: LoginData) => {
      const response = await api.post('/users/login', data);
      localStorage.setItem('token', response.data.token);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('user');
      },
    }
  );

  const register = useMutation(
    async (data: RegisterData) => {
      const response = await api.post('/users/register', data);
      localStorage.setItem('token', response.data.token);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('user');
      },
    }
  );

  const { data: user, isLoading } = useQuery(
    'user',
    async () => {
      const response = await api.get('/users/profile');
      return response.data;
    },
    {
      enabled: !!localStorage.getItem('token'),
      retry: false,
    }
  );

  const logout = () => {
    localStorage.removeItem('token');
    queryClient.setQueryData('user', null);
  };

  return {
    user,
    isLoading,
    login,
    register,
    logout,
  };
}