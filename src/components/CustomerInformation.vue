<template>
    <div class="Information">
        <div>Nom: {{ lastname }}</div>
        <div>Prénom: {{ firstName }}</div>
        <div>Âge: {{ age }}</div>
        <button v-on:click="callParents">Emit Event</button>
    </div>
</template>

<script>
export default {
    props: {
        id: Number,
        lastname: String,
        firstName: String,
        age: Number,
    },
    data() {
        return {
            emitCount: 0,
        };
    },
    methods: {
        callParents() {
            this.emitCount++;
            this.$emit('clickonbutton', this.emitCount, this.id);
        }
    }
}
</script>