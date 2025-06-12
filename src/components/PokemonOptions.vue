<template>
  {{ mensaje2 }}
  <div class="options-container">
    <ul>
      <li
        @click="comunicarClick(pokemon.id)"
        v-for="pokemon in pokemons"
        :key="pokemon.id"
      >
        {{ pokemon.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      mensaje2: "mensaje2",
    };
  },
  methods: {
    comunicarClick(id) {
      console.log("Click...");
      console.log(id);

      const objetoEnviado = {
        atributo1: id,
        atributo2: "Edgar",
        atributo3: true,
      };

      this.$emit("seleccionado", objetoEnviado);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

li {
  background: #ddd;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
  padding: 15px;
  font-weight: bold;
}

.options-container {
  display: flex;
  justify-content: center;
}

li:hover {
  background: rgba(0, 0, 0, 0.25);
}
</style>