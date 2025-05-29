<template>
  <div class="container">
    <img
      v-if="character?.picture?.large"
      :src="character.picture.large"
      alt="Character Image"
    />

    <div class="container-2"></div>
    <div class="character-container">
      <button @click="consultarUsuarioAleatorio()">Get New Character</button>
      <div v-if="character">
        <h1>{{ character.name.first }} {{ character.name.last }}</h1>
        <p>Gender: {{ character.gender }}</p>
        <p>
          Location: {{ character.location.city }},
          {{ character.location.country }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { consultarUsuarioAleatorioFachada } from "@/clients/RandomUserClient.js";

export default {
  data() {
    return {
      character: null,
    };
  },
  methods: {
    async consultarUsuarioAleatorio() {
      this.character = null;

      const respuesta = await consultarUsuarioAleatorioFachada();
      this.character = respuesta.results[0];

      const logObject = {
        firstName: this.character.name.first,
        lastName: this.character.name.last,
        gender: this.character.gender,
        city: this.character.location.city,
        country: this.character.location.country,
        image: this.character.picture.large,
      };
      console.log(logObject);
    },
  },
};
</script>

<style scoped>
.container-2,
img {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  object-fit: cover;
}

.container-2 {
  background-color: rgba(0, 0, 0, 0.5);
}

.character-container {
  position: relative;
  text-align: center;
}

button {
  margin: 70px 10px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

p,
h1 {
  color: #fff;
}
</style>