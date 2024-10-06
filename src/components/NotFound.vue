<template>
    <div class="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page or story you're looking for does not exist.</p>
      <router-link to="/">Go back to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
  };
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    padding: 2rem;
  }
  
  .not-found h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .not-found p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
  </style>
  