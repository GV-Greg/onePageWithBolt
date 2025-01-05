<script setup>
    import { ref } from 'vue'

    const sections = [
      { id: 'home', label: 'Accueil' },
      { id: 'gallery', label: 'Gallerie' },
      { id: 'services', label: 'Services' },
      { id: 'contact', label: 'Contact' }
    ]

    const isMenuOpen = ref(false)

    function scrollToSection(id) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        isMenuOpen.value = false
      }
    }
    </script>

    <template>
      <div class="min-h-screen">
        <nav class="bg-white shadow-md fixed w-full z-10">
          <div class="container mx-auto px-4">
            <div class="flex justify-between items-center h-16">
              <div class="text-lg font-bold">My Website</div>
              <button @click="isMenuOpen = !isMenuOpen" class="md:hidden">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
              <div class="hidden md:flex space-x-4">
                <button 
                  v-for="section in sections" 
                  :key="section.id"
                  @click="scrollToSection(section.id)"
                  class="hover:text-gray-600"
                >
                  {{ section.label }}
                </button>
              </div>
            </div>
            <div v-if="isMenuOpen" class="md:hidden">
              <button 
                v-for="section in sections" 
                :key="section.id"
                @click="scrollToSection(section.id)"
                class="block py-2 hover:bg-gray-100 w-full text-left"
              >
                {{ section.label }}
              </button>
            </div>
          </div>
        </nav>

        <main>
          <section id="home" class="min-h-screen pt-16">
            <div class="p-4">
              <h1 class="text-2xl font-bold mb-4">Accueil</h1>
              <p>Bienvenue sur notre site web!</p>
            </div>
          </section>

          <section id="gallery" class="min-h-screen pt-16">
            <div class="p-4">
              <h1 class="text-2xl font-bold mb-4">Gallerie</h1>
              <p>Découvrez notre gallerie d'images.</p>
            </div>
          </section>

          <section id="services" class="min-h-screen pt-16">
            <div class="p-4">
              <h1 class="text-2xl font-bold mb-4">Services</h1>
              <p>Explorez nos services.</p>
            </div>
          </section>

          <section id="contact" class="min-h-screen pt-16">
            <div class="p-4">
              <h1 class="text-2xl font-bold mb-4">Contact</h1>
              <p>Contactez-nous pour plus d'informations.</p>
            </div>
          </section>
        </main>
      </div>
    </template>

    <style>
    section {
      scroll-margin-top: 4rem;
    }
    </style>
