<script>
import { WebMap } from '../app/map';
import Button from './Button.vue';
import Switcher from './Switcher.vue';
export default{
    props:{
        mainContent:{
            type: String,
            required: false
        },
        subContent:{
            type: String,
            required: false
        },
        webMap: {
            type: WebMap,
            required: true
        }
    },
    mounted(){
        const s = this.$refs.s;
        s.toggle( undefined );//(this.webMap);
    },
    components:{
        Button,
        Switcher
    },
    methods:{
        toggleDayNight(mode){
            const titleWrapper = this.$refs.titleWrapper;
            const mainContent = this.$refs.mainContent;
            if(mode == 0){
                titleWrapper.classList.remove("title-wrapper-night");
                titleWrapper.classList.add("title-wrapper-day");

                mainContent.classList.remove("title-night");
                mainContent.classList.add("title-day");
            }else if(mode == 1){
                titleWrapper.classList.remove("title-wrapper-day");
                titleWrapper.classList.add("title-wrapper-night");
            
                mainContent.classList.remove("title-day");
                mainContent.classList.add("title-night");
            }
        },
    }
}
</script>
<template>
    <div>
        <div ref="titleWrapper" id="title-wrapper" class="glass-pad title-wrapper-day">
            <h1 ref="mainContent" id="main-content" class="title-day">{{ mainContent }}</h1>
            <h2 ref="subContent" id="sub-content" class="title-day">{{ subContent }}</h2>
        </div>
        <Switcher ref="s" id="mode-switcher"></Switcher>
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
    background-color: var(--day-controller-color-start);
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

.title-wrapper-day{
    background: linear-gradient(135deg, var(--day-header-color-start), var(--day-header-color-end)),
                linear-gradient(270deg, var(--day-header-color-end) 20%, var(--day-header-color-start) 80%);
}

.title-day{
    color: var(--day-font-color);
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