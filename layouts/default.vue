<template>
    <v-layout class="rounded rounded-md">
      <v-app-bar title="Tokenización de tarjetas Culqi"></v-app-bar>
  
      <v-navigation-drawer
        floating
        permanent
      >
        <v-list
          density="compact"
          nav
        >
          <v-list-item prepend-icon="mdi-credit-card-plus-outline" title="Guardar tarjeta" value="home" @click="$router.push('/saveCardData')"></v-list-item>
          <v-list-item prepend-icon="mdi-credit-card-sync-outline" title="Obtener tarjeta" value="about" @click="$router.push('/getCardData')"></v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <slot />
      </v-main>
    </v-layout>
  </template>