<script setup lang="ts">
</script>

<template>
  <header class="header bg">
    <img class="header-image" src="@/assets/images/header.png" alt="" />
    <nav class="container header-inner">
      <div class="header-left">
        <router-link to="/#issuesSection" class="header-link">
          <span>Наши выпуски</span>
          <img
            src="@/assets/images/mag.svg"
            alt="issues"
            class="header-icon"
          />
        </router-link>
      </div>
      <div class="header-center">
        <router-link to="/">
          <img class="logo" src="@/assets/images/logo.png" alt="КУЛЬТИСТ"/>
        </router-link>
      </div>
        <div class="header-right">
          <a
            href="https://t.me/kultistmagazine"
            target="_blank"
            class="header-link"
          >
          <img
            src="@/assets/images/tg_light.svg"
            alt="telegram"
            class="header-icon"
          />
          <span>@kultistmagazine</span>
        </a>
      </div>
    </nav>
  </header>
</template>

<style>
.header-inner {
  width: 1160px;
  margin: 0 auto;

  height: 72px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  opacity: 100%;
}

.header-link {
  display: flex;
  align-items: center;
  gap: 16px;

  font-family: "TT Rationalist";
  font-size: 24px;
  color: #F3EFE9;
  text-decoration: none;
}

.header-icon {
  width: 32px;
  padding-top: 2px;
  height: 32px;
}

.logo {
  width: 200px;
}

.bg{
  height: 70px;
  width: 100%;
  background-color: #43487400;
}

.header-image{
  position: absolute;
  top: -310px;
  left: -440px;
  margin-left: auto;
  margin-right: auto;
  right:0px;
}


</style>
