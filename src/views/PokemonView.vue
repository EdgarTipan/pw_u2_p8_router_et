<template>
  <h1>Selecciona el Pokemon Correcto</h1>
  <h1>{{ mensaje }}</h1>
  <PokemonImage
    v-if="pokemon"
    :pokemonId="pokemon.id"
    :mostrarImagen="mostrar"
    ref="miHijo1"
  />
  <PokemonOptions
    @seleccionado="recibioPadre($event)"
    :pokemons="vectorPokemon"
    ref="miHijo2"
  />
  <button @click="comunicarHijo()">Comunicar Hijo</button>
</template>

<script>
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import {
  obtenerOpcionesFachada,
  obtenerAleatorioFachada,
} from "@/clients/PokemonClient";
export default {
  data() {
    return {
      vectorPokemon: [],
      pokemon: null,
      mostrar: false,
      mensaje: null,
    };
  },
  components: {
    PokemonImage,
    PokemonOptions,
  },
  methods: {
    async iniciarJuego() {
      const opciones = await obtenerOpcionesFachada(4);
      this.vectorPokemon = opciones;
      console.log(this.vectorPokemon);

      //Elegir un pokemon del arreglo
      let pokemonCorrecto = obtenerAleatorioFachada(
        0,
        this.vectorPokemon.length
      );
      this.pokemon = this.vectorPokemon[pokemonCorrecto];
      console.log(this.pokemon.nombre);
    },
    recibioPadre(id) {
      console.log("Mensaje recibido desde hijo");
      console.log(id);
      this.mostrar = true;
      this.validarRespuesta(id.atributo1);
    },
    validarRespuesta(opcionSeleccionada) {
      if (opcionSeleccionada === this.pokemon.id) {
        this.mensaje = "Correcto";
      } else {
        this.mensaje = "Perdiste, el correcto era:" + this.pokemon.nombre;
      }
    },
    comunicarHijo() {
      console.log(this.$refs.miHijo1.mensaje1);
      this.$refs.miHijo1.mensaje1 = "Nuevo mensaje 1";

      console.log(this.$refs.miHijo2.mensaje2);
      this.$refs.miHijo2.mensaje2 = "Nuevo mensaje 2";
    },
  },
  mounted() {
    this.iniciarJuego();
  },
};
</script>

<style>
</style>