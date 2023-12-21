<!-- Table.vue -->
<template>
  <div>
    <table>
      <tr>
        <td>CIN</td>
        <td>nom</td>
        <td>prenom</td>
        <td>elimine</td>
      </tr>
      <tr v-for="item in originalTab" :class="{ 'red': item.elimine, 'blue': !item.elimine }">
        <td>{{ item.CIN }}</td>
        <td>{{ item.nom }}</td>
        <td>{{ item.prenom }}</td>
        <td>{{ item.elimine }}</td>
      </tr>
    </table>

    <h2>Éléments éliminés :</h2>
    <ul>
      <li v-for="item in eliminatedItems" :key="item.CIN">
        {{ item.nom }} {{ item.prenom }}
      </li>
    </ul>

    <button @click="afficherElimine">Lister Elimine: true</button>
  </div>

  <div>
    <form @submit.prevent="ajouterNouvelEtudiant">
      <label for="cin">CIN:</label>
      <input v-model="nouvelEtudiant.CIN" id="cin" required><br>

      <label for="nom">Nom:</label>
      <input v-model="nouvelEtudiant.nom" id="nom" required><br>

      <label for="prenom">Prénom:</label>
      <input v-model="nouvelEtudiant.prenom" id="prenom" required><br>

      <label>Éliminé:</label>
      <input type="checkbox" v-model="nouvelEtudiant.elimine"><br>

      <button type="submit">Ajouter un nouvel étudiant</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      originalTab: [
        { CIN: "1", nom: "ali", prenom: "ben ali", elimine: true },
        { CIN: "2", nom: "mohamed", prenom: "ben mohamed", elimine: true },
        { CIN: "3", nom: "salem", prenom: "ben salem", elimine: false },
      ],
      eliminatedItems: [],
      nouvelEtudiant: { CIN: "", nom: "", prenom: "", elimine: false }
    };
  },
  methods: {
    afficherElimine() {
      this.eliminatedItems = this.originalTab.filter(item => item.elimine);
    },
    ajouterNouvelEtudiant() {
      this.originalTab.push({ ...this.nouvelEtudiant });
      if (this.nouvelEtudiant.elimine) {
        this.eliminatedItems.push({ ...this.nouvelEtudiant });
      }
      this.nouvelEtudiant = { CIN: "", nom: "", prenom: "", elimine: false };
    }
  }
};
</script>

<style scoped>
.red {
  background-color: red;
}

.blue {
  background-color: blue;
}
</style>
