// console.log('hello World');
const app = Vue.createApp({
    // template:'<h1>Hello Vuejs</h1>',
    data() {
        return {
            //B mouse event
            x: 0,
            y: 0,
            //E mouse event
            //B Outputting lists (v-for)
            Books: [
                {
                    title: 'title1',
                    author: 'auther1',
                    pages: 30
                },
                {
                    title: 'title2',
                    author: 'auther2',
                    pages: 100
                },
            ]
            //E Outputting lists (v-for)
        }
    },
    methods: {
        //B mouse event
        mouseEvent(e, data) {
            console.log(e, e.type);
            if (data) {
                console.log(data);
            }
        },
        mouseMove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
        //E mouse event
    }
});

//Parent
app.mount('#app'); 