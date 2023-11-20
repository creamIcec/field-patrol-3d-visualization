<script>
import { ref } from "vue";
export default {
    props: {
        action: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: false
        },
        pos: {
            type: String,
            required: false
        },
        standAlone:{
            type: Boolean,
            required: false,
            default: false
        }
    },
    mounted(){
        const wrapper = this.$refs.wrapper;
        if(this.standAlone){
            wrapper.classList.add("glass-pad");
        }
    }
}
</script>
<template>
    <div ref="wrapper" :class="'buttonWrapper allButtons ' + pos + '-buttons'">
        <button class="control-buttons button-background">
            <img :src="icon" :alt="action" />
        </button>
    </div>
</template>
<style>
@media(max-width:580px) {
    .all-buttons{
        width: 50px;
        height: 100px;
    }

    .control-buttons {
        border: none;
        background-color: transparent;
    }

    .button-background {
        background-position: center;
        background-repeat: no-repeat;
    }
}

.left-buttons{
    left: 20px;
}

.top-buttons{
    top: 20px;
}

.right-buttons{
    right: 20px;
}

.bottom-buttons{
    bottom: 20px;
}

.button-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: fit-content;
    height: fit-content;
}

.all-buttons {
    width: 70px;
    height: 70px;
    pointer-events: all;
}

.control-buttons {
    border-style: none;
    border-radius: 10px;
    /*border-color: #031b51;*/
    /*background-color: #4477CE;*/
    background: none;
    box-shadow: 0px 8px 24px 0px #000000bb;
    outline: none;
    cursor: pointer;
    z-index: 99;
    width: 70px;
    height: 70px;
}
</style>