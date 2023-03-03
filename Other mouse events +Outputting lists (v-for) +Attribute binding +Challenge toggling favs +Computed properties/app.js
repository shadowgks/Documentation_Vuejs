// console.log('hello World');
const app = Vue.createApp({
    // template:'<h1>Hello Vuejs</h1>',
    data() {
        return {
            x: 0,
            y: 0,
        }
    },
    methods: {
        mouseEvent(e, data){
            console.log(e, e.type);
            if(data){
                console.log(data);
            }
        },
        mouseMove(e){
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
});

//Parent
app.mount('#app'); 