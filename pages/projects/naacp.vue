<template>
  <div class="content__page">
    <h2 class="subtitle">NAACP Image Awards</h2>

    <p class="m-15">
      This is the Virtual Experience for the 52nd NAACP Image Awards originally
      televised March 27, 2021.
    </p>

    <img class="screenshot" src="~/assets/img/naacp.jpg" />

    <a href="https://virtualexperience.naacpimageawards.net/" target="_blank"
      >Visit</a
    >

    <h3>Technology used:</h3>
    <ul class="tech-list">
      <li>Nuxt</li>
      <li>WordPress</li>
      <li>PHP</li>
      <li>CSS</li>
    </ul>
  </div>
</template>

<style scoped>
.content__page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.screenshot {
  max-width: 80%;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
