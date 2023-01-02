new Vue({
    el: "#root",
    data: {
        visible: true,
        detailTitle: '',
        isActive: true,
        places: []
    },
    mounted() {
        axios.get('file:///Users/juliette/Sites/visitIxelles/cities.json').then(response => this.places = response.data)
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
        viewDetail(place) {
            this.$emit('viewDetailEmit')
            this.detailTitle = place.city
            this.detailContent = place.body
            this.isActive = false
        },

    },

    computed: {
        href() {
            return '#' + this.detailTitle.toLowerCase().replace(/ /g, '-');
        }

    },


})