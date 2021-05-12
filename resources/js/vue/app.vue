<template>
    <div class="col-sm-7 mx-auto">

        <div class="p-3 bg-info">
            <h2 class="text-center"
                @click="setItems()"
            >Todo List</h2>
            <add-item-form
                v-on:reload-list="refreshItems()"
            />
        </div>
        <list-view />
    </div>
</template>


<script>
import addItemForm from './addItemForm';
import listView from './listView';
import { mapActions } from "vuex";
export default {
    components: {
        addItemForm,
        listView
    },
    methods: {
        ...mapActions(['setItems'])
    },
    mounted() {
        this.setItems();
    }
}
</script>
