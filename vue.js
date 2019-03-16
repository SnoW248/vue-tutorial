Vue.component('hello-component', {
    template: '<p>Hello Vue.js</p>'
})

var app = new Vue({
    el: '#app',
    data: {
        item: '',
        todos: []
    },
    methods: {
        addItem: function() {
            if (this.item == '') {
                return
            }
            var todo = {
                item: this.item,
                isDone: false
            }
            this.todos.push(todo)
            this.item = ''
        },
        deleteItem: function(index) {
            this.todos.splice(index, 1)
        }
    }
})