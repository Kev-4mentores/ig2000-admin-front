import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/useAuthStore';
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
      const response = await axios.post('/api/login', {
        username: form.login,
        password: form.pass,
      });

      // Guardamos el token y el usuario en Pinia
      authStore.setToken(response.data.token);
      authStore.setUser(response.data.user);

      // Redirigimos a la página principal después de autenticarse
      router.push('/');
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
