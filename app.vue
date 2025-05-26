<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    title: "Nexus E-Commerce Platform",
    description: "A performant e-commerce solution with real-time inventory and seamless checkout flow.",
    tags: ["Vue 3", "Nuxt", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { value: "1.2M+", label: "Revenue" },
      { value: "40%", label: "Conversion ↑" }
    ]
  },
  {
    id: 2,
    title: "Portfolio CMS Platform",
    description: "Customizable portfolio builder with CMS integration and analytics.",
    tags: ["Nuxt 3", "Tailwind", "Sanity CMS"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { value: "500+", label: "Users" },
      { value: "4.9★", label: "Rating" }
    ]
  }
]);

const skills = ref([
  { name: "Vue/Nuxt", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "UI Design", level: 92 }
]);

const activeTab = ref('featured');
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900">
    <!-- Header -->
    <header class="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <span class="text-xl font-bold">Portfolio</span>
        <nav class="hidden md:flex space-x-8">
          <a href="#work" class="hover:text-indigo-600 transition">Work</a>
          <a href="#skills" class="hover:text-indigo-600 transition">Skills</a>
          <a href="#contact" class="hover:text-indigo-600 transition">Contact</a>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-6">
      <div class="container mx-auto max-w-4xl text-center animate-fade-in">
        <div class="inline-flex items-center bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium mb-6">
          Available for work
        </div>
        <h1 class="text-5xl font-bold mb-6">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">Alex Morgan</span>
        </h1>
        <p class="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          I build <span class="font-semibold">high-performance web applications</span> with modern technologies.
        </p>
        <div class="flex justify-center gap-4">
          <button class="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-md">
            View Projects
          </button>
          <button class="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors shadow-md">
            Contact Me
          </button>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="work" class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16 animate-slide-up">
          <h2 class="text-4xl font-bold mb-4">Featured Work</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Selected projects showcasing my expertise in web development
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2">
          <div 
            v-for="project in projects" 
            :key="project.id"
            class="project-card animate-slide-up"
          >
            <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                :src="project.image" 
                :alt="project.title" 
                class="w-full h-60 object-cover"
                loading="lazy"
              >
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
                <p class="text-gray-600 mb-4">{{ project.description }}</p>
                
                <div class="flex flex-wrap gap-2 mb-4">
                  <span 
                    v-for="tag in project.tags" 
                    :key="tag"
                    class="px-3 py-1 bg-gray-100 text-sm rounded-full"
                  >
                    {{ tag }}
                  </span>
                </div>
                
                <div class="flex justify-between">
                  <div v-for="stat in project.stats" :key="stat.label" class="text-center">
                    <div class="text-2xl font-bold text-indigo-600">{{ stat.value }}</div>
                    <div class="text-sm text-gray-500">{{ stat.label }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16 animate-slide-up">
          <h2 class="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Technologies I work with and my proficiency levels
          </p>
        </div>

        <div class="max-w-2xl mx-auto">
          <div 
            v-for="skill in skills" 
            :key="skill.name"
            class="mb-6 animate-slide-up"
          >
            <div class="flex justify-between mb-2">
              <span class="font-medium">{{ skill.name }}</span>
              <span class="text-indigo-600">{{ skill.level }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                class="bg-gradient-to-r from-indigo-500 to-blue-500 h-2.5 rounded-full" 
                :style="{ width: `${skill.level}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 bg-gray-900 text-white">
      <div class="container mx-auto px-6 text-center">
        <p>© 2023 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style>
/* Animation classes */
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out forwards;
  opacity: 0;
  animation-delay: calc(var(--order) * 100ms);
}

.project-card {
  --order: 1;
}

.project-card:nth-child(2) {
  --order: 2;
}

/* Keyframe animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(30px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
