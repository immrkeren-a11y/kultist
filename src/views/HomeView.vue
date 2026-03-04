<template>
  <section class="hero">
    <div class="container hero-inner">
      <div class="hero-left">
        <div class="text-block">
          <h1 class="main-title">
            Онлайн-журнал о культуре<br> и искусстве для молодёжи
          </h1>

          <p class="text-regular">
            Каждый выпуск журнала Культист полностью посвящается одной стране, погружаясь в её уникальный культурный контекст
          </p>
        </div>

        <button
          class="button orange-btn"
          @click="scrollToIssues"
        >
          Читать журнал
        </button>
      </div>

      <div class="hero-right">
        <img src="@/assets/images/character.png" alt="character" />
      </div>
    </div>
  </section>

  <section class="issues-label">
    Выпуски журнала
  </section>

  <section
    ref="issuesSection"
    class="issues container"
  >
    <!-- тут будут карточки -->
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const issuesSection = ref<HTMLElement | null>(null)

const scrollToIssues = () => {
  issuesSection.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style>
.hero {
  padding-top: 200px;
  padding-bottom: 160px;
}

.hero-inner {
  display: flex;
  justify-content: space-between;
}

.hero-left {
  padding-top: 2rem;
  width: 656px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
}

.text-block {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.orange-btn {
  background: var(--orange);
  color: white;
  width: fit-content;
}

.hero-right img {
  width: 420px;
}

/* ===== Issues label ===== */

.issues-label {
  width: 100%;
  background: var(--blue);
  color: white;
  text-align: center;
  padding-top: 12px;
  padding-bottom: 16px;
  font-family: "TT Rationalist", sans-serif;
  font-weight: 700;
  font-size: 32px;
}

</style>
