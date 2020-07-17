<template>
  <div class="home">
    <div class="absolute circle blue" style="bottom:0; left: 10px;"></div>
    <div class="absolute triangle" style="bottom:0; right:200px;"></div>
    <div class="absolute square red" style="bottom:0; right: 5px; height: 25%"></div>
    <div class="absolute circle blue" style="bottom:0; right: 10px;"></div>
    <div class="absolute triangle" style="bottom:0; right:300px;"></div>
    <div class="absolute square red" style="bottom:0; right: 25px; height: 80%"></div>
    <div class="absolute square red" style="bottom:0; right: 20%"></div>
    <div class="absolute triangle" style="bottom:0; right:40%;"></div>
    <div class="absolute circle blue" style="bottom:0; left: 40%; height: 200px; width: 200px"></div>
  </div>
</template>

<script>
export default {}
</script>

<style>

.home{
  position: relative;
  height: calc(100vh - 100px);
  width: calc(100vw - 300px);
}

.absolute{
  position: absolute
}

.circle{
  border: 2px solid;
  border-radius: 50%;
  height: 300px;
  width: 300px;
}

.triangle{
  border-right: 100px solid transparent;
  border-left: 100px solid transparent;
  border-bottom: 100px solid green;
  height: 0;
  width: 0;
}

.square{
  border: 2px solid;
  height: 250px;
  width: 250px;
}

.red{
  border-color: red;
  background-color: rgba(255,0,0,0.5)
}

.green{
  border-color: green;
  background-color: rgba(0,255,0,0.5)
}

.blue{
  border-color: blue;
  background-color: rgba(0,0,255,0.5)
}
</style>
