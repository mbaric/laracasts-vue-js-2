Vue.component('message', {
    props: ['title', 'body'],
    data() {
        return {
            show: true
        }
    },
    template: `
            <article v-show="show">
                <div>
                    <p>{{ title }}</p>
                </div>
                <div>
                    <p>{{ body }}</p>
                </div>
                <div>
                    <button type="button" @click="show = false">Hide me</button>
                </div>
            </article>
            `,
});

var app = new Vue({
    el: '#root'
});