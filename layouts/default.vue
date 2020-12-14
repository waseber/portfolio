<template>
  <div class="container">
    <Header class="layout__header" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossorigin="anonymous">

      <div :class="{layout__sidebar: true, show: isIn}">
        <div class="mobile-nav-toggle">
          <a href="#" @click.prevent="closeMenu">
            <i v-if="!isIn" class="fas fa-ellipsis-v"></i>
            <i v-else class="fas fa-times"></i>
          </a>
        </div>
        <Sidebar />
      </div>
        
      <Nuxt class="layout__content" />

  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  
  fetch({ store }) {
    store.commit("toggle");
  },
  computed: {...mapState(["isIn"])},
  methods: {
        closeMenu: function() {
            this.$store.commit('toggle')
        }
    
    }
}
</script>

<style>
html {
  font-family:
    BlinkMacSystemFont,
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}


a{
  text-decoration: none;
}

li{
    list-style: none;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: grid;
  grid-template-areas: "header header" "sidebar body";
  grid-template-columns: 300px 1fr;
  grid-template-rows: 100px 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
}

@media (max-width: 992px) {
  .container{
    grid-template-areas: "sidebar header" "sidebar body";
    grid-template-columns: 0 1fr;
    grid-template-rows: 100px 1fr;
  }
}

.layout__header{
  grid-area: header;
}
/*sidebar stuff*/
.mobile-nav-toggle{
  display: none;
  top: 1px;
  left: 100%;
  width: 50px;
  height: 50px;
  border: 1px solid #ddd;
  border-radius: 50%;
  background-color: white;
}
@media (max-width: 992px) {
  .mobile-nav-toggle{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
  }

  .show .mobile-nav-toggle{
    left: auto;
    right: 1px;
  }
}


.layout__sidebar{
  grid-area: sidebar;
  align-self: flex-start;
  position: relative;
  background: white;
}
@media (max-width: 992px) {
  .layout__sidebar{
    padding-top: 50px;
    position: fixed;
    height: 100vh;
    right: 100%;
    left: auto;
    z-index: 1;
  }
}

@media (max-width: 992px) {
  .layout__sidebar.show{
    right: auto;
    left: 0;
    transition: all 1s ease;
  }
}

.layout__content{
  grid-area: body;
  align-self: flex-start;
  
}

.subtitle {
  font-weight: 300;
  font-size: 28px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.tech-list{
  display: flex;
  padding: 0;
}

.tech-list li{
  margin: 5px;
}

.w-100{
  width: 100%
}

.m-15{
  margin: 15px;
}

.m-b0{
  margin-bottom: 0;
}
</style>
