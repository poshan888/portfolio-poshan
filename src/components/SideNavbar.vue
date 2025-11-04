<template>
  <div>
    <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
    <aside id="colorlib-aside" role="complementary" class="js-fullheight text-center">
      <h1 id="colorlib-logo">
        <a href="index.html">{{ props.authorName }}</a>
      </h1>
      <nav id="colorlib-main-menu" role="navigation">
        <ul>
          <li :class="item.id == 1 ? 'colorlib-active' : ''" v-for="item in menu" :key="item.id">
            <a :href="item.link">{{ item.menuName }}</a>
          </li>
        </ul>
      </nav>

      <div class="colorlib-footer">
        <p>
          <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
          Copyright &copy;
          <!-- <script>
            document.write(new Date().getFullYear())
          </script> -->
          All rights reserved | This template is made with
          <i class="icon-heart" aria-hidden="true"></i> by
          <a href="https://colorlib.com" target="_blank">Colorlib</a>
        </p>

        <ul>
          <li v-for="icon in icons" :key="icon.id">
            <a href="#"><i :class="'icon-${icon.icon}'"></i></a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  authorName: {
    type: String,
    required: true,
  },
})

const menu = ref([
  { link: 'index.html', menuName: 'Home' },
  { link: 'photography.html', menuName: 'Photography' },
  { link: 'travel.html', menuName: 'Travel' },
  { link: 'fashion.html', menuName: 'Fashion' },
  { link: 'about.html', menuName: 'About' },
  { link: 'contact.html', menuName: 'Contact' },
])

const icons = ref(['facebook', 'twitter', 'instagram', 'linkedin'])
</script>
