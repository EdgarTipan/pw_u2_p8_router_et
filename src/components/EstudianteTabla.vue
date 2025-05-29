<template>
  <div class="container">
    <div v-show="mostrar">
      <h1>Estudiante Guardado</h1>
    </div>
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
    <table border="1">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
          <th>G&eacute;nero</th>
          <th>Semestre</th>
          <th>Bot&oacute;n Ver</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{ nombre, apellido, edad, genero, semestre } in lista"
          :key="nombre"
        >
          <td>{{ nombre }}</td>
          <td>{{ apellido }}</td>
          <td>{{ edad }}</td>
          <td>{{ genero }}</td>
          <td>{{ semestre }}</td>
          <td><button>Ver</button></td>
        </tr>
      </tbody>
    </table>
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
      mostrar: false,
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
      this.mostrar=true;

      setTimeout(() => {this.mostrar=false}, 3000);
    },
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

table {
  border-radius: 5px;
  font-size: 15px;
  font-weight: normal;
  border: none;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  white-space: nowrap;
  background-color: white;
  margin-top: 25px;
}

td, th {
  text-align: center;
  padding: 8px;
}

td {
  border-right: 1px solid #f8f8f8;
  font-size: 20px;
}

th {
  font-size: 25px;
  font-weight: bold;
}

thead, th {
  color: #ffffff;
  background: #4fc3a1;
}

thead th:nth-child(odd) {
  color: #ffffff;
  background: #324960;
}

tr:nth-child(even) {
  background: #f8f8f8;
}
</style>