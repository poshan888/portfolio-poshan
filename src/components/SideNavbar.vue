<template>
  <div>
    <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
    <aside id="colorlib-aside" role="complementary" class="js-fullheight text-center">
      <h1 id="colorlib-logo" @click="goToHome">
        <span class="change-color">{{ props.authorName }}</span>
      </h1>
      <nav id="colorlib-main-menu" role="navigation">
        <ul>
          <li
            v-bind:class="item.id == 1 ? 'colorlib-active' : ''"
            v-for="item in menu"
            :key="item.id"
          >
            <RouterLink :to="item.link">
              <a>{{ item.menuName }}</a>
            </RouterLink>
          </li>
        </ul>
      </nav>

      <div class="colorlib-footer">
        <ul>
          <li v-for="icon in icons" :key="icon.id">
            <a href="#"><i :class="'icon ' + 'icon-' + '${icon}'"></i></a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { onMounted, onUpdated, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

onMounted(() => {
  console.log('Component mounted')
})

onUpdated(() => {
  console.log('Component updated')
})

onUnmounted(() => {
  console.log('Component unmounted')
})

const props = defineProps({
  authorName: {
    type: String,
    required: true,
  },
})

const menu = ref([
  { link: '/', menuName: 'Home' },
  { link: '/about', menuName: 'About' },
  { link: '/contact', menuName: 'Contact' },
  { link: '/photography', menuName: 'Photography' },
  { link: '/fashion', menuName: 'Fashion' },
  // { link: 'travel.html', menuName: 'Travel' },
])

const icons = ref(['facebook', 'twitter', 'instagram', 'linkedin'])

const goToHome = () => {
  this.$router.push('/')
}
</script>

<style scoped></style>
