<template>
  <div class="home">
    <h1>Plats</h1>
    <input type="text" v-model="searchTerm" placeholder="Rechercher un plat">
    <div v-for="plat in filteredPlats" :key="plat.id">
      <h2>{{ plat.titre }}</h2>
      <ul>
        <li v-for="ingredient in plat.ingredients.split('.')" :key="ingredient">{{ ingredient }}</li>
      </ul>
    </div>
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
      searchTerm: '',
      plats: [] 
    };
  },
  computed: {
    filteredPlats() {
      if (this.searchTerm === '') {
        return this.plats;
      } else {
        return this.plats.filter(plat => plat.titre.includes(this.searchTerm));
      }
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
}
</style>