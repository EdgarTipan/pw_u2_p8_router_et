<template>
  <div class="container">
    <label for="id_nombre">Nombre: </label>
    <input v-model="nuevoNombre" id="id_nombre" type="text" />
    <label for="id_apellido">Apellido: </label>
    <input v-model="nuevoApellido" id="id_apellido" type="text" />
    <label for="id_edad">Edad: </label>
    <input v-model="nuevaEdad" id="id_edad" type="number" />
    <label for="id_genero">G&eacute;nero: </label>
    <input v-model="nuevoGenero" id="id_genero" type="text" />
    <label for="id_semestre">Semestre: </label>
    <input v-model="nuevoSemestre" id="id_semestre" type="number" />
    <button v-on:click="agregarEstudiante()">Agregar</button>
    <button v-on:click="obtenerPathVariable()">Path Variable</button>
    <ul>
      <li
        v-for="{ nombre, apellido, edad, genero, semestre } in lista"
        :key="nombre"
      >
        Nombre: {{ nombre }} - Apellido: {{ apellido }} - Edad: {{ edad }} -
        G&eacute;nero: {{ genero }} - Semestre: {{ semestre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoNombre: "Nuevo",
      nuevoApellido: "Estudiante",
      nuevaEdad: 0,
      nuevoGenero: "-",
      nuevoSemestre: 0,
      lista: [
        {
          nombre: "Edgar",
          apellido: "Tipan",
          edad: 18,
          genero: "Masculino",
          semestre: 8,
        },
        {
          nombre: "Daniel",
          apellido: "Tipan",
          edad: 21,
          genero: "Masculino",
          semestre: 7,
        },
        {
          nombre: "Pedro",
          apellido: "Teran",
          edad: 23,
          genero: "Masculino",
          semestre: 9,
        },
        {
          nombre: "Andrea",
          apellido: "Tipan",
          edad: 19,
          genero: "Femenino",
          semestre: 6,
        },
        {
          nombre: "Carlos",
          apellido: "Castillo",
          edad: 20,
          genero: "Masculino",
          semestre: 8,
        },
        {
          nombre: "Ana",
          apellido: "Tobar",
          edad: 22,
          genero: "Femenino",
          semestre: 7,
        },
        {
          nombre: "Viviana",
          apellido: "Lopez",
          edad: 21,
          genero: "Femenino",
          semestre: 8,
        },
      ],
    };
  },
  methods: {
    agregarEstudiante() {
      const nuevo = {
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
        edad: this.nuevaEdad,
        genero: this.nuevoGenero,
        semestre: this.nuevoSemestre,
      };
      //this.lista.unshift(nuevo);
      this.lista.push(nuevo);
    },
    obtenerPathVariable() {
      const cedula = this.$route.params.cedula;
      console.log(cedula);
      const anio = this.$route.query.anio;
      const mes = this.$route.query.mes;
      console.log(anio);
      console.log(mes);
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    const cedula = this.$route.params.cedula;
    console.log(cedula);
    const anio = this.$route.query.anio;
    const mes = this.$route.query.mes;
    console.log(anio);
    console.log(mes);
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style scoped>
.container {
  background: #fff;
  border: 1px solid;
  border-radius: 12px;
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
}

label {
  display: block;
  color: #333;
  text-align: left;
}

input {
  background: #77a7ef;
  color: #fff;
  width: 80%;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px 15px;
}

button {
  background: #2c5490;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  width: 200px;
  font-weight: bold;
}

ul {
  list-style: none;
  margin-top: 50px;
}

li {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  color: #333;
  font-size: 20px;
}
</style>