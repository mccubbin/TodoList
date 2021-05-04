<template>
    <div class="col-sm-7 mx-auto">

        <div class="p-3 bg-info">
            <h2 class="text-center">Todo List</h2>
            <add-item-form
                v-on:reload-list="getList()"
            />
        </div>
        <list-view
            :items="items"
            v-on:reload-list="getList()"
        />
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
    data: function() {
        return {
            items: []
        }
    },
    methods: {
        getList: function() {
            axios.get('api/items')
            .then( response => {
                this.items = response.data;
            })
            .catch( error => {
                console.log(error);
            })
        }
    },
    created: function() {
        this.getList();
    }
}
</script>