<template>
  <div class="home">
    <form @submit.prevent="addPlat">
      <input type="text" v-model="newPlat.titre" placeholder="Nom du plat">
      
      <input type="text" v-model="newPlat.ingredients1" placeholder="Ingrédients ">
     
      <input type="number" v-model="newPlat.prix" placeholder="Prix">
      <input type="number" v-model="newPlat.réduction" placeholder="Réduction">
      <button type="submit">Ajouter un plat</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  mounted() {
    axios.get('http://localhost:3000/Plats')
      .then(response => {
        this.plats = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
  data() {
    return {
      plats: [],
      newPlat: {
        titre: '',
        ingredients1: '',
       
        prix: 0,
        réduction: 0
      }
    };
  },
  methods: {
    addPlat() {
      axios.post('http://localhost:3000/Plats', this.newPlat)
        .then(response => {
          this.plats.push(response.data);
          this.newPlat = {
            titre: '',
            ingredients: '',
            prix: 0,
            réduction: 0
          };
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>

<style scoped>

</style>