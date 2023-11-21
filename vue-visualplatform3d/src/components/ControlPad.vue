<script>
export default{
    props:{
        type:{
            type: String,
            required: true,
            validator: (value) => {
                return ['vertical', 'horizontal'].includes(value);
            }
        },
        icon1:{
            type: String,
            required: false,
        },
        icon2:{
            type: String,
            required: true
        },
        alt1:{
            type: String,
            required: false,
        },
        alt2:{
            type: String,
            required: true
        }
    },
    mounted(){
        const wrapper = this.$refs.wrapper;
        const part0 = this.$refs.part0;
        const part1 = this.$refs.part1;
        if(this.type == 'vertical'){
            wrapper.classList.add("switcher-v");
            part0.classList.add("switcher-up-part");
            part1.classList.add("switcher-down-part");
        }else if(this.type == 'horizontal'){
            wrapper.classList.add("switcher-h");
            part0.classList.add("switcher-left-part");
            part1.classList.add("switcher-right-part");
        }
    },
    methods:{
        toggle(part){
            const referee = this.$refs['part' + part];
            referee.classList.toggle("switcher-activated");
        }
    }
}
</script>
<template>
    <div ref="wrapper" class="switcher-wrapper">
        <button @click="this.toggle(0)" ref="part0" class="">
            <img :src="icon1" :alt="alt1" />
        </button>
        <button @click="this.toggle(1)" ref="part1" class="">
            <img :src="icon2" :alt="alt2" />
        </button>
    </div>
</template>
<style scoped>
    .switcher-wrapper{
        box-sizing: border-box;
        display: grid;
        align-items: center;
        justify-items: center;
        border-radius: 20px;
        background-color: #109161bb;
    }
    .switcher-h{
        grid-template-columns: 50% 50%;
        grid-template-rows: 100%;
    }
    .switcher-v{
        grid-template-rows: 50% 50%;
        grid-template-columns: 100%;
    }
    button{
        border: none;
        border-radius: 20px;
        background-color: var(--button-color);
        width: 80%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
        cursor: pointer;
        box-shadow: -5px -5px 5px -1px var(--button-shadow-start),
                    5px 5px 5px -1px var(--button-shadow-end);
    }
    img{
        width: 80%;
        height: 80%;
    }
    button.switcher-activated{
        box-shadow: inset -5px -5px 5px -1px var(--button-shadow-end),
                    inset 5px 5px 5px -1px var(--button-shadow-start);
    }
    .switcher-up-part{
        grid-row: 1;
        grid-column: 1;
    }
    .switcher-down-part{
        grid-row: 2;
        grid-column: 1;
    }
    .switcher-left-part{
        grid-row: 0;
        grid-column: 0;
    }
    .switcher-right-part{
        grid-row: 0;
        grid-column: 1;
    }
</style>