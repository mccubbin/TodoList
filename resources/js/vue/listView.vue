<template>
    <div>
        <div v-for="item in items">
            <list-item
                v-on:itemchanged="$emit('reload-list')"
                :item="item"
            />
        </div>

    </div>
</template>


<script>
import listItem from './listItem'
export default {
    props: ['items'],
    components: { listItem }
}
</script>
