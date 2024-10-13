import { defineStore } from 'pinia';

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: null,
    user: null,
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setUser(user: User) {
      this.user = user;
    },
    logout() {
      this.token = null;
      this.user = null;
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
});
