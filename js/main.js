Vue.component('listelt', {
    template: '<li @click="viewDetail"><slot></slot></li>',
    methods: {
        viewDetail() {
            console.log('view')
        }
    }
})

Vue.component('placelist', {
    template: `<div>
   <button @click="closeDetail">close Detail</button>
    <listelt v-for="place in places" >
        {{ place.title }}
    </listelt>
    </div>`,
    data() {
        return {
            places: [
                {
                    title: 'paris', visited: true
                },
                {
                    title: 'tokyo', visited: true
                },
                {
                    title: 'las vegas', visited: false
                },
            ]
        }
        },



});
Vue.component('place-detail', {

    props :['title'],
    template:'<div v-if="visible"><h1>{{ title }}</h1><button @click="closeDetail">close</button></div>',
    methods: {

    }
})


new Vue({
    el:"#root",
    data :{
        visible: true,
            places: [
                {
                    title: 'paris', visited: true
                },
                {
                    title: 'tokyo', visited: true
                },
                {
                    title: 'las vegas', visited: false
                },
            ]
        },
    computed: {
        visitedCities(){
            return this.places.filter(place => place.visited)
        }
    },
    methods: {
        closeDetail(){
            this.visible=false
        }

    }
})
