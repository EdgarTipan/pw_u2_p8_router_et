<template>
  <div class="layout">
    <main class="contenido">
      <h1>{{ titulo }}</h1>
      <p>{{ articulo }}</p>
    </main>

    <aside class="sidebar">
      <h2>Categorías</h2>
      <ul>
        <li v-for="categoria in categorias" :key="categoria">
          {{ categoria }}
        </li>
      </ul>
    </aside>
  </div>
</template>
 
<script>
export default {
  name: "App",
  data() {
    return {
      titulo: "Bienvenido al Blog de Diseño Web",
      articulo:
        "Este es un artículo de ejemplo para aprender cómo construir diseños adaptativos usando Vue y CSS.",
      categorias: ["HTML", "CSS", "JavaScript", "Vue.js", "Accesibilidad"],
    };
  },
};
</script>
 
<style>
body {
  margin: 0;
  font-family: sans-serif;
  background-color: #fffcfc;
}

.layout {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
}

.contenido {
  flex: 3;
  background: #ededed;
  padding: 20px;
  border-radius: 8px;
}

.sidebar {
  flex: 1;
  background: #dbd9d9;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

/* Responsividad */
@media screen and (max-width: 768px) {
  .layout {
    flex-direction: column;
  }
  li {
    width: 90%;
  }
}
</style>