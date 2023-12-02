<script>
export default {
    props: {
        action: {type: String, required: true},
        icon: {type: String, required: false},
        pos: {type: String, required: false},
        standAlone:{type: Boolean, required: false, default: false},
        svgInject:{type: Boolean, required: false, default: true},
    },
    mounted(){
        if(this.standAlone){
            const wrapper = this.$refs.wrapper;
            wrapper.classList.add("glass-pad");
        }
        if(this.svgInject){
            const icon = this.$refs.icon;
            SVGInject(icon);
            icon.classList.add("svg-injected");
        }
    }
}
</script>
<template>
    <div ref="wrapper" :class="'buttonWrapper allButtons ' + pos + '-buttons'">
        <button ref="button" class="control-buttons">
            <img ref="icon" :src="icon" :alt="action" class="icon"/>
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

.icon{
    width: 100%;
    height: 100%;
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
    background-color: var(--button-color);
    box-shadow: -3px -3px 3px -1px var(--shadow-start),
                3px 3px 3px -1px var(--shadow-end);
    outline: none;
    cursor: pointer;
    z-index: 100;
    width: 100%;
    height: 100%;
}
</style>