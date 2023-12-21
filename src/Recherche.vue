<template>
  <div>
    <label for="searchField">Search Article by Title:</label>
    <input type="text" id="searchField" v-model="searchTerm" @input="searchArticle" />
    <input type="number" id="id" v-model="searchTerm" @input="searchArticle" />
    <div v-if="selectedArticle">
      <h2>{{ selectedArticle.titre }}</h2>
      <p>{{ selectedArticle.resum }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      searchTerm: "",
      selectedArticle: null,
    };
  },
  methods: {
    searchArticle() {
    
      fetch(`http://localhost:3000/articles?search=${this.searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            const foundArticle = data[0];
          
            fetch(`http://localhost:3001/info/${foundArticle.id}`)
              .then((resumResponse) => resumResponse.json())
              .then((resumData) => {
                if (resumData) {
                  this.selectedArticle = {
                    id: foundArticle.id,
                    titre: foundArticle.titre,
                    resum: resumData.resum,
                  };
                } else {
                  this.selectedArticle = null;
                }
              })
              .catch((error) => console.error("Error fetching resum data:", error));
          } else {
            this.selectedArticle = null;
          }
        })
        .catch((error) => console.error("Error fetching article data:", error));
    },
  },
};
</script>
