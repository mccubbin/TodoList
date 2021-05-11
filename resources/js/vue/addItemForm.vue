<template>
    <div class="d-flex align-items-center">
        <input type="text"
            class="form-control mr-2"
            v-model="item.name"
            v-on:keyup.enter="createItem()"
        />
        <button
            @click="createItem()"
            class = "bg-transparent h2 p-0 m-0 border-0"
            :class="[ item.name ? 'text-white' : 'text-muted']"
        >
            <font-awesome-icon icon="plus-square" />
        </button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            item: {
                name: ""
            }
        }
    },
    methods: {
        createItem() {
            if (this.item.name == "") {
                return;
            }
            this.$store.dispatch('createItem', this.item).then(response => {
                if (response.id) {
                    this.item.name = "";
                }
            })
            .catch( error => {
                this.$emit('reload-list');
            });
        }
    }
}
</script>
