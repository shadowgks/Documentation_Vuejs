// console.log('hello World');
const app = Vue.createApp({
    // template:'<h1>Hello Vuejs</h1>',
    data(){
        return {
            name: 'saad',
            age: '23'
        }
    },
    methods:{
        changeTitle(rename){
            // this.name = 'issam'
            this.name = rename;
        }
    }
});
app.mount('#app'); 


