<template>
  <div class="options-container">
    <ul>
      <li>Pokemon 1</li>
      <li>Pokemon 2</li>
      <li>Pokemon 3</li>
      <li>Pokemon 4</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  list-style-type: none;
}

li {
  background: #ddd;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,0.2);
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
  background: rgba(0,0,0,0.25);
}
</style>