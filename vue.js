new Vue({
    el: "#app",
    data: {
        now: ''
    },
    methods: {
        onclick: function(){
            // alert('onclick')
            this.now = new Date().toLocaleDateString()
        }
    }
})