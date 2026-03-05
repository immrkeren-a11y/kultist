<template>

  <div class="issue-page">

    <MagazineSwiper
      v-if="issue"
      :pages="issue.pages"
    />

  </div>

</template>

<script setup lang="ts">

import { useRoute } from 'vue-router'
import issues from '@/data/issues.json'

import MagazineSwiper from '@/components/magazine/MagazineSwiper.vue'

const route = useRoute()

const slug = route.params.slug

const issue = issues.find(i => i.slug === slug)

</script>
