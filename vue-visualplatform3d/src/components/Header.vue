<script>
import { MapHandler } from '../app/map_handler';
import Button from './Button.vue';
import Switcher from './Switcher.vue';
export default{
    props:{
        mainContent:{type: String, required: false},
        subContent:{type: String, required: false},
        mapHandler: {type: MapHandler, required: true},
    },
    mounted(){
        const s = this.$refs.s;
        s.toggle();
    },
    components:{
        Button,
        Switcher
    }
}
</script>
<template>
    <div>
        <div ref="titleWrapper" id="title-wrapper" class="title-wrapper">
            <h1 ref="mainContent" id="main-content" class="title">{{ mainContent }}</h1>
            <h2 ref="subContent" id="sub-content" class="title">{{ subContent }}</h2>
        </div>
        <Switcher ref="s" id="mode-switcher" :mapHandler="this.mapHandler"></Switcher>
        <Button id="user" pos="top" action="user" icon="src/resources/user.svg" :standAlone=true></Button>  
    </div>
</template>
<style scoped>
#mode-switcher{
    top: 30px;
    right: 120px;
    z-index: 2;
    width: 150px;
    height: 60px;
    background-color: var(--controller-color-start);
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

    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    box-shadow: 0px 8px 32px 0px rgba(0, 0, 0, 0.37);
    margin-top: 0.5%;
    margin-left: 1%;

    background: linear-gradient(135deg, var(--header-color-start), var(--header-color-end)),
                linear-gradient(270deg, var(--header-color-end) 20%, var(--header-color-start) 80%);
}

.title{
    color: var(--font-color);
}

#main-content {
    margin: 0;
    padding: 10px;
    font-weight: 600;
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