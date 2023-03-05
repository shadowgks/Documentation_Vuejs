<template>
    <div class="backdrop">
        <div class="modal" :class="{ sale: theme == 'sale' }">
            <h1>{{header}}</h1>
            <p>{{text}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['header','text','theme'],
}
</script>

<style scoped>
    .modal{
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: #fff;
        border-radius: 10px;
        color: #000;
    }
    .backdrop{
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }
    p{
        font-style: normal;
    }
    .modal.sale{
        background-color: #ff0000;
        color: #fff;
    }
</style>