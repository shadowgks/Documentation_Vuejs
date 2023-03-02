// console.log('hello World');
const app = Vue.createApp({
    // template:'<h1>Hello Vuejs</h1>',
    data(){
        return {
            x : 0,
            y : 0,
        }
    },
    methods:{
        mouseEvent(){
            console.log('work');
        }
    }
});
app.mount('#app'); 


