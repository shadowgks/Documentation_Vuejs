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
            timer : null,
            reactionTimer : 0,
        }
    },
    mounted() {
        setTimeout(() => {
            this.showBlock = !this.showBlock;
            this.startTimer();
        }, this.delay);
    },
    methods: {
        startTimer(){
            this.timer = setInterval(() => {
            this.reactionTimer += 10;
            }, 10);
        },
        stopTimer(){
            clearInterval(this.timer);
            this.$emit('end',this.reactionTimer);
        }
    },
};
</script>

<style>
.block {
  width: 100%;
  background-color: #fff;
  color: #000;
  text-align: center;
  padding: 60px;
  margin: 20px auto;
  cursor: pointer;
}
</style>