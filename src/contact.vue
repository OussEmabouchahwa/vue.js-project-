<template>
    <div class="page">
      <h1>Contactez-nous</h1>
      <input v-model="nom" placeholder="Nom" @blur="verifierChamp">
      <input v-model="email" placeholder="Email" @blur="verifierChamp">
      <textarea v-model="message" placeholder="Message" @blur="verifierChamp"></textarea>
      <button v-if="nom && email && message">Envoyer</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nom: '',
        email: '',
        message: ''
      };
    },
    methods: {
      verifierChamp(event) {
        if (!event.target.value) {
          alert('Ce champ doit être rempli');
        }
      }
    }
  };
  </script>
  
<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;
}

input, textarea {
  margin: 1em 0;
  width: 100%;
  max-width: 600px;
}

button {
  margin-top: 1em;
}
</style>
  