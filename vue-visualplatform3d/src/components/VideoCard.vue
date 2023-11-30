<script setup>
</script>
<template>
    <div id="video-display">
        <img id="img-holder" src="" width="300" height="300" alt="detected image">
    </div>
</template>
<style>
#video-display {
    width: 300px;
    height: 300px;
    position: absolute;
    right: 20px;
    top: 20px;
    border-radius: 14px;
    overflow: hidden;

    background: linear-gradient(135deg, var(--day-card-color-start), var(--day-card-color-end)),
                linear-gradient(270deg, var(--day-card-color-end) 20%, var(--day-card-color-start) 80%);
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.3);
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    box-shadow: 0px 8px 32px 0px rgba(0,0,0,0.37);
}
</style>