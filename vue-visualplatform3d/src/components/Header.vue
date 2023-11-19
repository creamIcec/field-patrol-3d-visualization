<script setup>
defineProps({
    title: {
        type: String,
        required: false
    }
})
</script>
<template>
    <div id="header">
        <div id="title-wrapper" class="glass-pad">
            <h1 id="title">{{ title }}</h1>
        </div>
        <div id="user-icon-wrapper" class="glass-pad">
            <img id="user-icon" src="../resources/user.svg" alt="User">
        </div>
    </div>
</template>
<style scoped>
.glass-pad{
    background: linear-gradient(135deg, var(--header-color-start), var(--header-color-end)),
                linear-gradient(270deg, var(--header-color-end) 20%, var(--header-color-start) 80%);
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.3);
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    box-shadow: 0px 8px 32px 0px rgba(0,0,0,0.37);
    margin-top: 0.5%;
    margin-left: 1%;
}
#title-wrapper{
    width: fit-content;
    height: 100px;
    /*background-color: #35155D;*/
    position: fixed;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 100;
}

#title {
    margin: 0;
    padding: 10px;
    font-weight: 600;
    color: #ffffff;
    width: 100%;
    height: fit-content;
    margin-block-start: 0;
    margin-block-end: 0;
}

#user-icon-wrapper{
    position: absolute;
    top: 18px;
    right: 32px;
    width: 64px;
    height: 64px;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
}

#user-icon{
    width: 80%;
    height: 80%;
}

@media (max-width: 600px) {
    #title {
        padding-left: unset;
        text-align: center;
        font-size: 20px;
    }
}

@media (min-width: 600px) {
    #title {
        text-align: left;
        font-size: 36px;
    }
}
</style>