<template>
    <div class="d-flex align-items-center">
        <input type="text"
            class="form-control mr-2"
            v-model="item.name"
            v-on:keyup.enter="addItem()"
        />
        <button
            @click="addItem()"
            class = "bg-transparent h2 p-0 m-0 border-0"
            :class="[ item.name ? 'text-white' : 'text-muted']"
        >
            <font-awesome-icon icon="plus-square" />
        </button>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            item: {
                name: ""
            }
        }
    },
    methods: {
        addItem() {
            if (this.item.name == "") {
                return;
            }
            axios.post('api/items', {
                item: this.item
            })
            .then( response => {
                if ( response.status == 201 ) {
                    this.item.name = "";
                    this.$emit('reload-list');
                }
            })
            .catch ( error => {
                console.log(error);
            })
        }
    },
    components: {}
}
</script>