<script setup>
import { reactive } from 'vue'
import { useAuth } from '@/modules/auth/composables/useAuth';
import { useRouter } from 'vue-router'
import { mdiAccount, mdiAsterisk } from '@mdi/js'
import SectionFullScreen from '@/components/SectionFullScreen.vue'
import CardBox from '@/components/CardBox.vue'
import FormCheckRadio from '@/components/FormCheckRadio.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import LayoutGuest from '@/layouts/LayoutGuest.vue'

const form = reactive({
  login: null,
  pass: null,
})

const router = useRouter()

const { login, error } = useAuth();

// const submit = async () => {
//   await login({
//     login: form.login,
//     pass: form.pass,
//   });
// };
const submit = () => {
  login({
    login: form.login,
    pass: form.pass,
  })
    .then(() => {
      // Si el login es exitoso, redirigir a la ruta principal
      router.push('/');
    })
    .catch((err) => {
      // Manejar errores, si es necesario
      console.error('Error al iniciar sesión:', err);
    });
};
</script>

<template>
  <LayoutGuest>
    <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
      <CardBox :class="cardClass" is-form @submit.prevent="submit">
        <FormField label="Login" help="Please enter your login">
          <FormControl
            v-model="form.login"
            :icon="mdiAccount"
            name="login"
            autocomplete="username"
          />
        </FormField>

        <FormField label="Password" help="Please enter your password">
          <FormControl
            v-model="form.pass"
            :icon="mdiAsterisk"
            type="password"
            name="password"
            autocomplete="current-password"
          />
        </FormField>

        <FormCheckRadio
          v-model="form.remember"
          name="remember"
          label="Remember"
          :input-value="true"
        />

        <template #footer>
          <BaseButtons>
            <BaseButton type="submit" color="info" label="Login" />
            <BaseButton to="/" color="info" outline label="Back" />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionFullScreen>

    <div v-if="error" class="text-red-500">
      {{ error }}
    </div>
  </LayoutGuest>
</template>
