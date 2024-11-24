import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/modules/auth/stores/useAuthStore';
import axiosInstance from '@/axiosInstance'; 
import axios from 'axios';

interface LoginForm {
  login: string;
  pass: string;
}

export function useAuth() {
  const authStore = useAuthStore();
  const router = useRouter();
  const error = ref<string | null>(null);

  const login = async (form: LoginForm) => {
    try {
      console.log('datos del login',form); 
      const response = await axiosInstance.post('api/auth/login', {
        email: form.login,
        password: form.pass,
      });
      
      // Guardamos el token y el usuario en Pinia
      authStore.setToken(response.data.data.token);
      authStore.setUser(response.data.data.user);
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Error en la autenticación';
    }
  };

  const logout = () => {
    authStore.logout();
    router.push('/login');
  };

  return {
    login,
    logout,
    error,
  };
}
