<template>
    <div class="mt-10">
        <v-sheet width="300" class="mx-auto">
          <v-form ref="form">
            <!-- <pre>{{ card }}</pre> -->
            <pre> {{ token ? `Se guardó en la BD y su token generado es: ${token}`  : token }} </pre>
            <v-text-field
              v-model="card.card_number"
              density="compact"
              label="Número de tarjeta"
              :rules="[rules.req, rules.cardLenght]"
            />
      
            <v-text-field
              v-model="card.cvv"
              density="compact"
              label="cvv"
              :rules="[rules.req, rules.cvvLenght,]"
            />
      
            <v-text-field
              v-model="card.expiration_month"
              density="compact"
              label="Mes de expiración"
              :rules="[rules.req, rules.expMonthLenght]"
            />
      
            <v-text-field
              v-model="card.expiration_year"
              density="compact"
              label="Año de expiración"
              :rules="[rules.req, rules.expYearLenght]"
            />
      
            <v-text-field
              v-model="card.email"
              density="compact"
              label="Correo"
              :rules="[rules.req, rules.email]"
            />
      
            <v-btn @click="validateCardData" block class="mt-2" color="green">Validar</v-btn>
            <v-btn @click="cleanCardData" block class="mt-2" color="red">Limpiar formulario</v-btn>
            <v-btn @click="resetValidation" block class="mt-2" color="orange">Limpiar validaciones</v-btn>
        </v-form>
        </v-sheet>
    </div>
</template>
  
  <script allowJs: true>
  import { rules } from '@/static/constants'
  import { mapActions } from 'vuex'
  export default {
    data: () => ({
      card: {
        card_number: '',
        cvv: '',
        expiration_month: '',
        expiration_year: '',
        email: '',
      },
      rules,
      token: ''
    }),
    methods: {
      ...mapActions({
        saveCardData: 'card/saveCardData',
      }),
  
       async validateCardData() {
        if (this.$refs.form.validate()) {
          const response = await $fetch('http://localhost:3000/tokens', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.parse(JSON.stringify(this.card))
          })
          this.token = response.token
        }
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
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    }
  }
  </script>