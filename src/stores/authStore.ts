import {ref, computed} from 'vue';
import {defineStore} from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const email = ref('');

  const authenticated = ref(false);

  function toggleAuth() {
    authenticated.value = email.value !== '' && !authenticated.value;
  }

  return {email, authenticated, toggleAuth}
});
