const app = new Vue({
    el: '#app',
    data: {
        value: "1st"
    },
    methods: {
        click(){
            alert("from 1st instance")
        },
        valueChange(){
            app2.value = "changed from 1st instance"
        }
    },
    computed: {},
    mounted() {},
});

const app2 = new Vue({
    el: '#app2',
    data: {
        value: "2nd"
    },
    methods: {
        click(){
            alert("from 2nd instance")
        },
        valueChange(){
            app.value = "changed from 2nd instance"
        }
    },
    computed: {},
    mounted() {},
});