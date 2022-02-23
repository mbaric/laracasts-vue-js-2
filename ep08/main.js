Vue.component('task-list', {
    template: `
        <div>
            <task v-for="task in tasks">{{task.description}}</task>
        </div>`,
    data() {
        return {
            tasks: [
                {description: "A", completed: true},
                {description: "B", completed: false},
                {description: "C", completed: false},
                {description: "D", completed: false},
                {description: "E", completed: true},
                {description: "F", completed: true},
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

var app = new Vue({
    el: '#root'
});