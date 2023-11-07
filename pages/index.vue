<template>
  <div class="mt-5">
  <v-sheet width="300" class="mx-auto">
      <pre> {{ token ? `Se guardó en la BD y su token generado es: ${token}`  : token }} </pre>
      <pre> ejemplo {
        "card_number": "1234567890123700",
        "cvv": "9995",
        "expiration_month": "10",
        "expiration_year": "2028",
        "email": "manuel@yahoo.es"
      } </pre>
      <v-text-field
        v-model="card.card_number"
        density="compact"
        label="Número de tarjeta"
      />

      <v-text-field
        v-model="card.cvv"
        density="compact"
        label="Ingrese el cvv"
      />

      <v-text-field
        v-model="card.expiration_month"
        density="compact"
        label="Mes de expiración"
      />

      <v-text-field
        v-model="card.expiration_year"
        density="compact"
        label="Año de expiración"
      />

      <v-text-field
        v-model="card.email"
        density="compact"
        label="Ingrese correo"
      />

      <v-btn @click="validateCardData" block class="mt-2">Validar</v-btn>
      <v-btn @click="cleanCardData" block class="mt-2">Limpiar</v-btn>
  </v-sheet>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    layout: 'default',
    card: {
      card_number: '',
      cvv: '',
      expiration_month: '',
      expiration_year: '',
      email: '',
    },
    token: ''
  }),
  methods: {
    ...mapActions({
      saveCardData: 'card/saveCardData',
    }),

    async validateCardData() {
        const response = await $fetch('http://localhost:3000/tokens', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.parse(JSON.stringify(this.card))
        })
        console.log('response', response)
        this.token = response.token
    },

    cleanCardData() {
      this.card = {
        card_number: '',
        cvv: '',
        expiration_month: '',
        expiration_year: '',
        email: '',
      }
      this.token = ''
    }
  }
}
</script>

<style>
/* Estilos para la página */
</style>

