// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import StoryList from '../components/StoryList.vue';
import NotFound from '../components/NotFound.vue'; // Fallback component

const loadComponent = (componentName) => {
  try {
    return () => import(`../components/${componentName}.vue`);
  } catch (error) {
    console.warn(`Component ${componentName} not found, falling back to NotFound.vue.`);
    return NotFound;
  }
};

const routes = [
  { path: '/', component: StoryList },
  {
    path: '/content/:component',
    component: (route) => loadComponent(route.params.component), // Dynamically load components
  },
  { path: '/:pathMatch(.*)*', component: NotFound }, // Fallback route for unmatched paths
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
