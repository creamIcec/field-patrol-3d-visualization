<script>
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
        <button class="control-buttons">
            <img :src="icon" :alt="action" />
        </button>
    </div>
</template>
<style scoped>
@media(max-width:580px) {
    .all-buttons{
        width: 50px;
        height: 100px;
    }

    .control-buttons {
        border: none;
        background-color: transparent;
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

.buttonWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: fit-content;
    height: fit-content;
}

.allButtons {
    width: 100%;
    height: 100%;
    pointer-events: all;
}

.control-buttons {
    border-style: none;
    border-radius: 10px;
    /*border-color: #031b51;*/
    /*background-color: #4477CE;*/
    background-color: var(--day-button-color);
    box-shadow: 0px 8px 24px 0px #000000bb;
    outline: none;
    cursor: pointer;
    z-index: 100;
    width: 100%;
    height: 100%;
}
</style>