<template>
  <div>
    <nav>
      <router-link to="/contador">Contador</router-link> |
      <router-link to="/estudiante">Estudiante</router-link> |
      <router-link to="/estudianteTabla">Estudiante Tabla</router-link> |
      <router-link to="/libroTabla">Libro Tabla</router-link> |
      <router-link to="/pregunta">Pregunta API</router-link> |
      <router-link to="/randomUser">Random User API</router-link> |
      <router-link to="/pokemonAPI">Pokemon API</router-link>
    </nav>
    <router-view />
  </div>
</template>
