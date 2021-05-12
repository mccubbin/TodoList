<template>
    <div>
        <div v-for="(item, index) in items" :key="index" >
            <list-item
                :item="item"
            />
        </div>

    </div>
</template>


<script>
import listItem from './listItem';
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({items: "getAllItems"})
    },
    components: {
        listItem
    }
}
</script>
