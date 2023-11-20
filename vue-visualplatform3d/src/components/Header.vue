<script setup>
import Button from './Button.vue';
defineProps({
    title: {
        type: String,
        required: false
    }
})
</script>
<template>
    <div>
        <div id="title-wrapper" class="glass-pad">
            <h1 id="title">{{ title }}</h1>
        </div>
        <Button id="user" pos="top" action="user" icon="src/resources/user.svg" :standAlone=true></Button>  
    </div>
</template>
<style scoped>
#title-wrapper{
    width: fit-content;
    height: 100px;
    /*background-color: #35155D;*/
    background: linear-gradient(135deg, var(--header-color-start), var(--header-color-end)),
                linear-gradient(270deg, var(--header-color-end) 20%, var(--header-color-start) 80%);;
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

#user{
    position: absolute;
    right: 32px;
    width: 64px;
    height: 64px;
    display: flex;
    z-index: 100;
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