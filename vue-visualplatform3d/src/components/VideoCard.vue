<script>
export default{
    props:{
        svgInject: {type: Boolean, required: false, default: false}
    }
}
</script>
<template>
    <div id="video-display" class="neumorphism day-theme">
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

    background: linear-gradient(135deg, var(--card-color-start), var(--card-color-end)),
                linear-gradient(270deg, var(--card-color-end) 20%, var(--card-color-start) 80%);
    border-radius: 20px;
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
}
</style>