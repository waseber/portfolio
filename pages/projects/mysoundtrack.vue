<template>
    <div class="content__page">
        <h2 class="subtitle">My Soundtrack</h2>
        <p class="m-15">I had been experimenting with Flutter development for a few years. This was my first attempt at releasing an app to the market. Although, this app would also work on iOS, I only published it on Android because it's cheaper ;-)</p>
        <img class="screenshot" src="~/assets/img/MySoundtrack.png">

        <a href="https://play.google.com/store/apps/details?id=yvesgerber.mysoundtrack&hl=en_US" target="_blank">Visit</a>

        <h3>Technology used:</h3>
            <ul class="tech-list">
                <li>Flutter</li>
            </ul>

    </div>
</template>

<style scoped>
.content__page{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.screenshot{
    max-width: 80%;
    border: 1px solid #ddd;
    border-radius: 4px;
}

</style>