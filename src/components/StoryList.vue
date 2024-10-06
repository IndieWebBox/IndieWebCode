<template>
  <div class="story-list-container">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search stories by tags"
      class="search-bar"
    />

    <div v-if="filteredStories.length" class="story-list">
      <div
        v-for="story in filteredStories"
        :key="story.id"
        class="story-card"
      >
        <h3>{{ story.title }}</h3>
        <div v-html="story.summary"></div>
        <div class="tags">
          <span v-for="tag in story.tags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>
        <!-- Update the router-link to use the new path format -->
        <router-link :to="'/content/' + story.component">Read More</router-link>
      </div>
    </div>

    <div v-else class="no-results">
      No stories found for the given tags.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      stories: [],
    };
  },
  created() {
    this.fetchStories();
  },
  computed: {
    filteredStories() {
      const query = this.searchQuery.toLowerCase();
      return this.stories.filter(story =>
        story.tags.some(tag => tag.toLowerCase().includes(query))
      );
    },
  },
  methods: {
    async fetchStories() {
      try {
        const response = await fetch('/src/assets/data.json');
        this.stories = await response.json();
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    },
  },
};
</script>

<style scoped>
.story-list-container {
  padding: 1rem;
}

.search-bar {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.story-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.story-card {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
}

.tags {
  margin-top: 0.5rem;
}

.tag {
  background-color: #ddd;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  margin-right: 0.5rem;
  font-size: 0.875rem;
}

.no-results {
  text-align: center;
  color: #999;
}
</style>
