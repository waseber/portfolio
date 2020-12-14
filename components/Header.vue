<template>
    <nav>
        <h4>Yves Gerber</h4>
        <nuxt-link to="/"><h1 class="title">Portfolio</h1></nuxt-link>
    </nav>
</template>

<style scoped>
nav{
    display: flex;
    justify-content: center;
    align-items: center;
}
h4{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 24px;
  font-weight: 300;
  margin-top: -25px;
  color: teal;
}
.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 72px;
  color: #35495e;
  letter-spacing: 1px;

  
}

@media screen and (max-width: 992px){
    .title {
      font-size: 48px;
    }
  }



</style>