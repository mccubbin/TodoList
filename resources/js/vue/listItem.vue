<template>
    <div class="d-flex align-items-center bg-info p-1 mt-1">
        <input
            type="checkbox"
            v-model="item.completed"
            @change="updateCheck(item)"
        />
        <span :class="[item.completed ? 'text-decoration-line-through text-muted' : '', 'w-100', 'ml-1']">
            {{ item.name }}
        </span>
        <button @click="removeItem(item)" class="trashcan text-danger bg-transparent border-0">
            <font-awesome-icon icon="trash" />
        </button>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    props: ['item'],
    methods: {
        ...mapActions({
            updateCheck: "updateItem",
            removeItem: "deleteItem"
        })
    }
}
</script>
