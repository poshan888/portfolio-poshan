<script setup>
import SideNavbar from '@/components/SideNavbar.vue'
import FooterPage from '@/components/FooterPage.vue'
import { RouterView } from 'vue-router'
import { AUTHOR_FIRST_NAME } from '@/constants/appConstants'
</script>

<template>
  <div id="colorlib-page">
    <SideNavbar :authorName="AUTHOR_FIRST_NAME" />
    <!-- END COLORLIB-ASIDE -->
    <div id="colorlib-main">
      <RouterView />

      <FooterPage />
    </div>
    <!-- END COLORLIB-MAIN -->
  </div>
  <!-- END COLORLIB-PAGE -->

  <!-- loader -->
  <!-- <div id="ftco-loader" class="show fullscreen">
    <svg class="circular" width="48px" height="48px">
      <circle
        class="path-bg"
        cx="24"
        cy="24"
        r="22"
        fill="none"
        stroke-width="4"
        stroke="#eeeeee"
      />
      <circle
        class="path"
        cx="24"
        cy="24"
        r="22"
        fill="none"
        stroke-width="4"
        stroke-miterlimit="10"
        stroke="#F96D00"
      />
    </svg>
  </div> -->
</template>
