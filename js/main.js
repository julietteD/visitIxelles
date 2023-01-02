window.Event = new Vue();
Vue.component('placelist', {
    template: `<div>
  
    <li v-for="place in places" class="blueBg"   @click="viewDetail(place)" :detailTitle="test"><input  @blur="onApplied">  <a :href="href"> {{ place.title }} </a><slot></slot></li>
   
     <div class="detail">
            <h2>Detail</h2>
            <h3> {{ detailTitle }} </h3>
        </div>
    </div>`,
    data() {

        return {
            detailTitle: '',
            isActive: true,
            places: [{
                    title: 'paris',
                    visited: true,
                    kid: true,
                    free: true

                },
                {
                    title: 'tokyo',
                    visited: true,
                    kid: true,
                    free: true
                },
                {
                    title: 'las vegas',
                    visited: false,
                    kid: true,
                    free: true

                },
            ]
        }
    },
    methods: {
        viewDetail(place) {
            this.$emit('viewDetailEmit')
            this.detailTitle = place.title
            this.isActive = false
            console.log(place)
        },
        onApplied() {
            Event.$emit('applied')
        }
    },
    computed: {
        href() {
            return '#' + this.detailTitle.toLowerCase().replace(/ /g, '-');
        }

    }



});
Vue.component('placedetail', {
    props: ['title', 'body'],
    template: '<div><h1>{{ title }}</h1><p>{{ body }}</p></div>',
    methods: {

    }
})


new Vue({
    el: "#root",
    data: {
        title: 'titledetail',
        visible: true,
        detailTitle: 'maintitle',
        places: [{
                title: 'paris',
                visited: true,
                kid: true,
                free: true,

            },
            {
                title: 'tokyo',
                visited: true,
                kid: false,
                free: true,
            },
            {
                title: 'las vegas',
                visited: false,
                kid: false,
                free: true,
            },
        ]
    },
    computed: {
        visitedCities() {
            return this.places.filter(place => place.visited)
        },
        forkidCities() {
            return this.places.filter(place => place.kid)
        }
    },
    methods: {
        closeDetail() {
            console.log('ici')
            this.visible = false
        },
        openDetail() {
            console.log('ici')
            this.visible = true
        },
        viewDetailEmit() {
            alert('ok')
            console.log(place)
        }

    },
    created() {
        Event.$on('applied', () => alert('ooook'))
    }
})