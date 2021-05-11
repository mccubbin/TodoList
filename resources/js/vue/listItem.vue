<template>
    <div class="d-flex align-items-center bg-info p-1 mt-1">
        <input
            type="checkbox"
            v-model="item.completed"
            @change="updateCheck()"
        />
        <span :class="[item.completed ? 'text-decoration-line-through text-muted' : '', 'w-100', 'ml-1']">
            {{ item.name }}
        </span>
        <button @click="removeItem()" class="trashcan text-danger bg-transparent border-0">
            <font-awesome-icon icon="trash" />
        </button>
    </div>
</template>

<script>
export default {
    props: ['item'],
    methods: {
        updateCheck: function() {
            this.$store.dispatch('updateItem', this.item);
        },
        removeItem: function() {
            this.$store.dispatch('deleteItem', this.item);
        }
    }
}
</script>
