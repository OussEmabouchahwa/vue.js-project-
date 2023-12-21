<template>
  <div :class="PlaItem">
    <h1 :class="TT">{{ titre }}</h1>
    <p :class="ing">Ingrédients :</p>
    <ul >
      <li>{{ ingrediant1 }}</li>
      <li>{{ ingrediant2 }}</li> 
      <li>{{ ingrediant3 }}</li>
      <li>{{ ingrediant4 }}</li>
    </ul>
    <button @click="Ajouter()" class="bouton">Commander</button>
    <div class="msg">{{  msg }}</div>

  </div>
</template>

<script>
export default {
  props: {
    titre: String,
    ingrediant1: String,
    ingrediant2: String,
    ingrediant3: String,
    ingrediant4: String,
  },
  data() {
    return {
      platItem: 'PlaItem',
      TT: 'TT',
     nb:0, 
     msg:"commande!"
     
      


    };
  },
  methods:{
    Ajouter(){
     alert("vous avez commande un plat" +this.titre);
    }
   
  }
};
</script>

<style scoped>

.PlaItem {
  background-color: rgb(192, 59, 161);
  border: dashed #0a0a0a;
  padding: 8px;
  
}

.TT {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color:blue;
  
}
.bouton{
  
  background-color:dodgerblue;
  
}
.ing{
background-color:crimson;
}
.msg{
  background-color: aqua   ;
}
</style>