<template>
  <div class="container">
    <Header class="layout__header" />
      <Sidebar class="layout__sidebar" />
        
      <Nuxt class="layout__content" />

  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
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

.layout__header{
  grid-area: header;
}

.layout__sidebar{
  grid-area: sidebar;
}

.layout__content{
  grid-area: body;
  align-self: flex-start;
  
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

.m-15{
  margin: 15px;
}

.m-b0{
  margin-bottom: 0;
}
</style>
