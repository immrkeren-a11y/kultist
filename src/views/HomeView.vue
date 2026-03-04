<template>
  <div class="container">
    <h2>Latest Magazines</h2>

    <div class="grid">
      <MagazineCard
        v-for="mag in magazines"
        :key="mag.id"
        :magazine="mag"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getMagazines, type Magazine } from '@/services/api'
import MagazineCard from '@/components/magazine/MagazineCard.vue'

const magazines = ref<Magazine[]>([])

onMounted(async () => {
  magazines.value = await getMagazines()
})
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>
