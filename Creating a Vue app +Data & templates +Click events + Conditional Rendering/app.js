// console.log('hello World');
const app = Vue.createApp({
    // template:'<h1>Hello Vuejs</h1>',
    data(){
        return {
            myInfo: true,
            name: 'saad',
            age: '23'
        }
    },
    methods:{
        //clickevent
        // changeTitle(rename){
        //     // this.name = 'issam'
        //     this.name = rename;
        // }

        toggle(){
            this.myInfo = !this.myInfo;
        }
    }
});
app.mount('#app'); 


