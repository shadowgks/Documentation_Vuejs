<template>
    <div class="block" v-if="showBlock" @click="stopTimer"> 
        <p>Click Here</p>
    </div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            showBlock : false,
        }
    },
    mounted() {
        setTimeout(() => {
            this.showBlock = !this.showBlock;
        }, this.delay);
    },
    updated() {
        
    },
    unmounted(){
        
    }
};
</script>

<style>
.block{
    width: 100%;
    background-color: #fff;
    color: #000;
    text-align: center;
    padding: 60px;
    margin: 20px auto;
    cursor: pointer;
}
</style>