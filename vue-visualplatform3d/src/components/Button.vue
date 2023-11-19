<script setup>
defineProps({
    action: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: false
    }
});
</script>
<template>
    <div class="left-buttons button-wrapper">
        <button class="control-buttons half-height button-background">
            <img :src="icon" :alt="action"/>
        </button>
    </div>
</template>
<style>
    @media(max-width:580px){
        .left-buttons{
            width: 50px;
            height: 100px;
        }
        .control-buttons{
            border: none;
            background-color: transparent;
        }
        .button-background{
            background-position: center;
            background-repeat: no-repeat;
        }
    }
    .half-height{
        height: 50%;
    }
    .left-buttons{
        width: 70px;
        height: 140px;
        pointer-events: all;
        left: 20px;
    }
    .button-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .control-buttons{
        border-style: none;
        border-radius: 10px;
        /*border-color: #031b51;*/
        /*background-color: #4477CE;*/
        background: none;
        box-shadow: 0px 8px 24px 0px #000000bb;

        outline: none;
        cursor: pointer;
        z-index: 99;
    }
</style>