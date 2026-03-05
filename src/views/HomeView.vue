<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getIssues, type Issues } from '@/services/api'
import MagazineCard from '@/components/magazine/MagazineCard.vue'

const issuesSection = ref<HTMLElement | null>(null)

const scrollToIssues = () => {
  issuesSection.value?.scrollIntoView({ behavior: 'smooth' })
}

const issues = ref<Issues[]>([])

onMounted(async () => {
  issues.value = await getIssues()
})
</script>

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
        <img src="@/assets/images/character.png" alt="Енот" />
      </div>
    </div>
  </section>
  <section class="telegram">
    <div class="container telegram-inner">

      <div class="telegram-phone">
        <img src="@/assets/images/mockup.png" alt="Kultist канал">
      </div>

      <div class="telegram-content">

        <div class="text-block">

          <div class="title-row">
            <h2 class="main-title">
              Наш телеграм канал
            </h2>

            <div class="icon">
              <svg width="48" height="48" viewBox="0 0 48 48">
                <path d="M24 0C10.752 0 0 10.752 0 24C0 37.248 10.752 48 24 48C37.248 48 48 37.248 48 24C48 10.752 37.248 0 24 0ZM35.136 16.32C34.776 20.112 33.216 29.328 32.424 33.576C32.088 35.376 31.416 35.976 30.792 36.048C29.4 36.168 28.344 35.136 27 34.248C24.888 32.856 23.688 31.992 21.648 30.648C19.272 29.088 20.808 28.224 22.176 26.832C22.536 26.472 28.68 20.88 28.8 20.376C28.8167 20.2997 28.8145 20.2204 28.7935 20.1451C28.7726 20.0698 28.7337 20.0008 28.68 19.944C28.536 19.824 28.344 19.872 28.176 19.896C27.96 19.944 24.6 22.176 18.048 26.592C17.088 27.24 16.224 27.576 15.456 27.552C14.592 27.528 12.96 27.072 11.736 26.664C10.224 26.184 9.048 25.92 9.144 25.08C9.192 24.648 9.792 24.216 10.92 23.76C17.928 20.712 22.584 18.696 24.912 17.736C31.584 14.952 32.952 14.472 33.864 14.472C34.056 14.472 34.512 14.52 34.8 14.76C35.04 14.952 35.112 15.216 35.136 15.408C35.112 15.552 35.16 15.984 35.136 16.32Z"
                fill="#434874"/>
              </svg>
            </div>
          </div>

          <p class="text-regular">
            Мы выкладываем как обзорные статьи, так и интерактивные
            форматы. Для вас мы готовим тематические подборки:
            от современных романов до культового кинематографа.
          </p>

        </div>
        <a
        href="https://t.me/kultistmagazine"
        target="_blank">
        <button class="button green-btn" >
          Перейти в канал
        </button>
        </a>

      </div>

    </div>
  </section>

  <section
    id="issuesSection" ref="issuesSection"  class="issues-label">
    Выпуски журнала
  </section>

  <section class="issues container">
  <div class="container">
      <div class="issues-grid">
      <MagazineCard
              v-for="mag in issues"
              :key="mag.id"
              :issue="mag"
            />
      </div>
    </div>
  </section>
</template>


<style>
.hero {
  padding-top: 160px;
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

.telegram {
  margin-top: -80px;
  padding-bottom: 120px;
}

.telegram-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.telegram-phone img {
  width: 380px;
}

.telegram-content {
  width: 656px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.text-block {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* строка заголовка */

.title-row {
  display: flex;
  align-items: flex-start;
}

.icon {
  margin-left: 16px;
  padding-top: 8px;
}

.green-btn {
  background: var(--green);
  color: var(--blue);
  width: fit-content;
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
.issues {
  padding: 64px 0;
}

.issues-grid {
  display: grid;
  grid-template-columns: repeat(1, 368px);
  gap: 64px;
  justify-content: center;
}
</style>
