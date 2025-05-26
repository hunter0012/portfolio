<script setup>
import { ref } from 'vue';

const personalInfo = ref({
  name: "Bouzeed Ahmed Egnaidi",
  title: "Full Stack Developer & Technical Support Specialist",
  location: "Airport Road, Tripoli, Libya",
  phone: "+218 92 865 06 03",
  email: "bouzeed.egnaidi@gmail.com"
});

const skills = ref({
  programming: ["C/C++", "PHP", "Python", "JavaScript", "Assembly", "C#"],
  databases: ["MySQL", "MongoDB", "SQL", "SQLite"],
  platforms: ["QT", "Node.js", "Vue.js", "React", "React Native"],
  backend: ["GraphQL", "REST API"],
  frontend: ["Bootstrap", "Material UI", "Tailwind"],
  erp: ["Odoo ERP Development", "Clear ERP"]
});

const languages = ref([
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional Working Proficiency" }
]);

const experience = ref([
  {
    company: "Aboghris Soft",
    position: "Technical Support",
    period: "05/2019 - 05/2022",
    responsibilities: [
      "Provided technical support for software solutions",
      "Troubleshot and resolved system issues",
      "Assisted with software implementations"
    ]
  },
  {
    company: "Self-Employed",
    position: "Data Entry Specialist",
    period: "2023 - Present",
    responsibilities: [
      "Managed data processing and entry tasks",
      "Ensured data accuracy and integrity",
      "Developed efficient data management systems"
    ]
  },
  {
    company: "Metiga Military Hospital",
    position: "IT Support",
    period: "2023 - Present",
    responsibilities: [
      "Managed networks",
      "System adminstation",
      "Operation"
    ]
  },
  {
    company: "Self-Employed",
    position: "Software Engineer",
    period: "2021 - Present",
    responsibilities: [
      "Design and Develop Busniss software solotions",
      "full stack web development",
      "mobile app development"
    ]
  }
]);

const education = ref([
  {
    institution: "IT College, Tripoli University",
    degree: "Bachelor in Mobile Computing",
    year: "2018"
  },
  {
    institution: "Next Academy",
    course: "Accounting for Non-Accountants",
    year: "2019"
  },
  {
    institution: "Tripoli University",
    course: "Entrepreneurship",
    year: "2019"
  },
  {
    institution: "International Collage",
    course: "Upper Intermediate A+B English",
    year: "2024"
  },
  {
    institution: "DT Center",
    course: "IELTS Preporation",
    year: "2025"
  }
]);

const projects = ref([
  {
    title: "Odoo ERP Customization",
    description: "Developed custom modules for Odoo ERP system to streamline business processes",
    technologies: ["Python", "Odoo", "PostgreSQL"],
    features: [
      "Custom inventory management",
      "Automated reporting",
      "Integration with payment systems"
    ]
  },
  {
    title: "Mobile Commerce App",
    description: "Built a cross-platform mobile application for local businesses",
    technologies: ["React Native", "Node.js", "MongoDB"],
    features: [
      "Product catalog",
      "Secure payment processing",
      "Real-time order tracking"
    ]
  },
  {
    title: "Clear ERP System",
    description: "Built an all-in-one ERP for local businesses",
    technologies: ["Qt", "Vue", "React Native", "GraphQL", "MySQL"],
    features: [
      "Product catalog",
      "Real-time order tracking",
      "Accounting"
    ]
  }
]);
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 font-sans">
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 class="text-xl font-bold text-indigo-700">Bouzeed Egnaidi</h1>
        <nav class="hidden md:flex space-x-8">
          <a href="#about" class="hover:text-indigo-600 transition">About</a>
          <a href="#skills" class="hover:text-indigo-600 transition">Skills</a>
          <a href="#experience" class="hover:text-indigo-600 transition">Experience</a>
          <a href="#contact" class="hover:text-indigo-600 transition">Contact</a>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section id="about" class="py-20 bg-gradient-to-r from-indigo-700 to-blue-600 text-white">
      <div class="container mx-auto px-6 flex flex-col md:flex-row items-center">
        
        <div class="md:w-1/2 flex justify-center mb-10">
          <div class="bg-white p-1 rounded-full shadow-xl">
            <div class="bg-gray-200 w-64 h-64 rounded-full overflow-hidden">
              <!-- Placeholder for profile image -->
              <div class="w-full h-full flex items-center justify-center bg-indigo-100 text-indigo-700 text-4xl font-bold">
                BE
              </div>
            </div>
          </div>
        </div>


        <div class="md:w-1/2 mb-10 md:mb-0">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ personalInfo.name }}</h1>
          <h2 class="text-2xl md:text-3xl font-semibold mb-6">{{ personalInfo.title }}</h2>
          
          <div class="space-y-3">
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>{{ personalInfo.location }}</span>
            </div>
            
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>{{ personalInfo.phone }}</span>
            </div>
            
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>{{ personalInfo.email }}</span>
            </div>
          </div>
        </div>
        
        
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Programming Languages -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-4 flex items-center">
              <svg class="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
              Programming Languages
            </h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="lang in skills.programming" :key="lang" class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                {{ lang }}
              </span>
            </div>
          </div>
          
          <!-- Databases -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-4 flex items-center">
              <svg class="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
              </svg>
              Databases
            </h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="db in skills.databases" :key="db" class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                {{ db }}
              </span>
            </div>
          </div>
          
          <!-- Development Platforms -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-4 flex items-center">
              <svg class="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Development Platforms
            </h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="platform in skills.platforms" :key="platform" class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                {{ platform }}
              </span>
            </div>
          </div>
          
          <!-- Backend Technologies -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-4 flex items-center">
              <svg class="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
              </svg>
              Backend Technologies
            </h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in skills.backend" :key="tech" class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                {{ tech }}
              </span>
            </div>
          </div>
          
          <!-- Frontend Frameworks -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-4 flex items-center">
              <svg class="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
              </svg>
              Frontend Frameworks
            </h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="framework in skills.frontend" :key="framework" class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                {{ framework }}
              </span>
            </div>
          </div>
          
          <!-- ERP Development -->
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold mb-4 flex items-center">
              <svg class="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
              ERP Development
            </h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="erp in skills.erp" :key="erp" class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                {{ erp }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        
        <div class="max-w-3xl mx-auto space-y-8">
          <div v-for="(exp, index) in experience" :key="index" class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-bold">{{ exp.position }}</h3>
                <p class="text-indigo-600 font-medium">{{ exp.company }}</p>
              </div>
              <span class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                {{ exp.period }}
              </span>
            </div>
            
            <ul class="space-y-2">
              <li v-for="(resp, i) in exp.responsibilities" :key="i" class="flex items-start">
                <svg class="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>{{ resp }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Education & Training</h2>
        
        <div class="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          <div v-for="(edu, index) in education" :key="index" class="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-bold mb-2">{{ edu.institution }}</h3>
            <p class="text-indigo-600 font-medium mb-4">{{ edu.degree || edu.course }}</p>
            <div class="flex items-center text-gray-500">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span>{{ edu.year }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Languages Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Languages</h2>
        
        <div class="max-w-md mx-auto grid gap-6">
          <div v-for="(lang, index) in languages" :key="index" class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-xl font-bold mb-2">{{ lang.name }}</h3>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                class="bg-indigo-600 h-2.5 rounded-full" 
                :style="{ width: lang.level === 'Native' ? '100%' : '80%' }"
              ></div>
            </div>
            <p class="text-gray-600 mt-2">{{ lang.level }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Projects</h2>
        
        <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div v-for="(project, index) in projects" :key="index" class="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-3">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            
            <div class="mb-4">
              <h4 class="font-semibold mb-2">Technologies Used:</h4>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in project.technologies" :key="tech" class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div>
              <h4 class="font-semibold mb-2">Key Features:</h4>
              <ul class="space-y-2">
                <li v-for="(feature, i) in project.features" :key="i" class="flex items-start">
                  <svg class="w-5 h-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-indigo-700 text-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">Get In Touch</h2>
          <p class="text-xl mb-10 max-w-2xl mx-auto">
            Interested in working together or have questions? I'd love to hear from you!
          </p>
          
          <div class="grid md:grid-cols-2 gap-6 max-w-lg mx-auto">
            <a 
              :href="'mailto:' + personalInfo.email" 
              class="bg-white text-indigo-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition flex items-center justify-center"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Send Email
            </a>
            
            <a 
              :href="'tel:' + personalInfo.phone" 
              class="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-800 transition flex items-center justify-center"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Call Me
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 bg-gray-900 text-white">
      <div class="container mx-auto px-6 text-center">
        <p>&copy; 2023 Bouzeed Ahmed Egnaidi. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style>
/* Custom animations */
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>