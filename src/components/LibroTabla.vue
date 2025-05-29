<template>
  <div class="container">
    <div v-show="mostrar">
      <h1>Libro Guardado</h1>
    </div>
    <label for="id_titulo">T&iacute;tulo: </label>
    <input v-model="nuevoTitulo" id="id_titulo" type="text" />
    <label for="id_autor">Autor: </label>
    <input v-model="nuevoAutor" id="id_autor" type="text" />
    <label for="id_genero">G&eacute;nero: </label>
    <input v-model="nuevoGenero" id="id_genero" type="text" />
    <label for="id_anio_publicacion">A&ntilde;o de publicaci&oacute;n: </label>
    <input
      v-model="nuevoAnioPublicacion"
      id="id_anio_publicacion"
      type="number"
    />
    <label for="id_num_paginas">N&uacute;mero de p&aacute;ginas: </label>
    <input v-model="nuevoNumPaginas" id="id_num_paginas" type="number" />
    <button v-on:click="agregarLibro()">Agregar</button>
    <table border="1">
      <thead>
        <tr>
          <th>T&iacute;tulo</th>
          <th>Autor</th>
          <th>G&eacute;nero</th>
          <th>A&ntilde;o de publicaci&oacute;n</th>
          <th>N&uacute;mero de p&aacute;ginas</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{
            titulo,
            autor,
            genero,
            anioPublicacion,
            numPaginas,
          } in lista"
          :key="titulo"
        >
          <td>{{ titulo }}</td>
          <td>{{ autor }}</td>
          <td>{{ genero }}</td>
          <td>{{ anioPublicacion }}</td>
          <td>{{ numPaginas }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoTitulo: "Libro",
      nuevoAutor: "Autor",
      nuevoGenero: "Genero",
      nuevoAnioPublicacion: 0,
      nuevoNumPaginas: 0,
      lista: [
        {
          titulo: "Cien Años de Soledad",
          autor: "Gabriel García Márquez",
          genero: "Realismo mágico",
          anioPublicacion: 1967,
          numPaginas: 471,
        },
        {
          titulo: "1984",
          autor: "George Orwell",
          genero: "Distopía",
          anioPublicacion: 1949,
          numPaginas: 328,
        },
        {
          titulo: "Don Quijote de la Mancha",
          autor: "Miguel de Cervantes",
          genero: "Novela",
          anioPublicacion: 1605,
          numPaginas: 863,
        },
        {
          titulo: "Crónica de una muerte anunciada",
          autor: "Gabriel García Márquez",
          genero: "Novela corta",
          anioPublicacion: 1981,
          numPaginas: 122,
        },
        {
          titulo: "Rayuela",
          autor: "Julio Cortázar",
          genero: "Ficción experimental",
          anioPublicacion: 1963,
          numPaginas: 736,
        },
        {
          titulo: "La sombra del viento",
          autor: "Carlos Ruiz Zafón",
          genero: "Misterio",
          anioPublicacion: 2001,
          numPaginas: 565,
        },
      ],
      mostrar: false,
    };
  },
  methods: {
    agregarLibro() {
      const nuevo = {
        titulo: this.nuevoTitulo,
        autor: this.nuevoAutor,
        genero: this.nuevoGenero,
        anioPublicacion: this.nuevoAnioPublicacion,
        numPaginas: this.nuevoNumPaginas,
      };

      if (
        !nuevo.titulo.trim() ||
        !nuevo.autor.trim() ||
        !nuevo.genero.trim() ||
        nuevo.anioPublicacion <= 0 ||
        nuevo.numPaginas <= 0
      ) {
        console.log("Error: Existen campos vacios o invalidos");
      } else {
        this.lista.push(nuevo);
        this.mostrar = true;
      }

      setTimeout(() => {
        this.mostrar = false;
      }, 2000);
    },
  },
};
</script>

<style scoped>
.container {
  background: #313943;
  border: 1px solid;
  border-radius: 12px;
  max-width: 1000px;
  margin: 50px auto;
  padding: 30px;
}

label {
  display: block;
  color: #fff;
  text-align: left;
  font-weight: bold;
}

input {
  background: #2a3440;
  color: #fff;
  width: 80%;
  margin-bottom: 20px;
  margin-top: 10px;
  border: none;
  border-bottom: 1px solid #ddd;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding: 10px 15px;
}

h1 {
  color: #fff;
}

input:focus {
  outline: none;
}

button {
  background: #47596a;
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
  width: 100%;
  border-collapse: collapse;
  background-color: #2c3845;
  display: table;
  margin-top: 25px;
}

thead {
  display: table-header-group;
}

tr {
  display: table-row;
}

td,
th {
  display: table-cell;
  padding: 10px;
  text-align: left;
  border: 1px solid #374454;
}

th {
  font-weight: 700;
  background-color: #283340;
  border: 1px solid #283340;
  text-align: center;
  color: #fff;
}

td {
  font-style: italic;
  color: #ddd;
}

tr:nth-child(even) td {
  background-color: #2a3440;
}
</style>