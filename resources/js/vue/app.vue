<template>
    <div class="col-sm-7 mx-auto">

        <div class="p-3 bg-info">
            <h2 class="text-center">Todo List</h2>
            <add-item-form
                v-on:reload-list="setItems()"
            />
        </div>
        <list-view />
    </div>
</template>


<script>
import addItemForm from './addItemForm'
import listView from './listView'

export default {
    components: {
        addItemForm,
        listView
    },
    methods: {
        setItems() {
            this.$store.dispatch('setItems');
        }
    },
    mounted() {
        this.$store.dispatch('setItems');
    }
}
</script>
