<template>
    <div class="login">
      <h2>Connexion</h2>
      <form @submit.prevent="Logine">
        <label for="username">Nom d'utilisateur:</label>
        <input type="text" id="username" v-model="username">
  
        <label for="password">Mot de passe:</label>
        <input type="password" id="password" v-model="password">
  
        <button type="submit">Se connecter</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        // Implémentez votre logique de connexion ici
        console.log(`Connexion de l'utilisateur ${this.username}`);
      }
    }
  }
  </script>
  
  <style scoped>
  .login {
    width: 300px;
    margin: 0 auto;
  }
  </style>
  