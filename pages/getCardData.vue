<template>
    <div class="mt-5">
    <v-sheet v-if="!showInfo" width="300" class="mx-auto">
        <pre class="ma-5"> Obtener datos de la tarjeta </pre>
        <v-text-field
          v-model="token"
          outlined
          density="compact"
          label="Ingrese el token"
        />
  
        <v-btn @click="validateCardData" block class="mt-2" color="green">Validar</v-btn>
        <v-btn @click="cleanCardData" block class="mt-2" color="red">Limpiar</v-btn>
    </v-sheet>
    <v-sheet v-else width="300" class="mx-auto">
        <!-- <pre>{{ card }}</pre> -->
        <pre> Los datos de la tarjeta son: </pre>
        <v-text-field
          v-model="card.card_number"
          density="compact"
          label="Número de tarjeta"
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
          label="Correo"
        />
  
        <v-btn @click="cleanCardData" block class="mt-2" color="red">Limpiar</v-btn>
    </v-sheet>
    </div>
  </template>
  
  <script allowJs: true>
  import { mapActions } from 'vuex'
  export default {
    layout: 'default',
    data: () => ({
      token: '', 
      showInfo: false,
      card: {
        card_number: '',
        cvv: '',
        expiration_month: '',
        expiration_year: '',
        email: '',
      }
    }),
    methods: {
      ...mapActions({
        saveCardData: 'card/saveCardData',
      }),
  
      async validateCardData() {
        const response = await $fetch('http://localhost:3000/tokens', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.token}` },
        })
        this.showInfo = true
        this.card = response
      },
  
      cleanCardData() {
        this.token = ''
        this.showInfo = false
        this.card = {
          card_number: '',
          cvv: '',
          expiration_month: '',
          expiration_year: '',
          email: '',
        }
      }
    }
}
  </script>