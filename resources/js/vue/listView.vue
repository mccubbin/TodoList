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
import listItem from './listItem'
export default {
    computed: {
        items() {
            return this.$store.getters.getAllItems;
        }
    },
    components: {
        listItem
    }
}
</script>
