<template>
    <div class="d-flex align-items-center bg-info p-1 mt-1">
        <input
            type="checkbox"
            @change="updateCheck()"
            v-model="item.completed"
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
            axios.put('api/items/' + this.item.id, {
                item: this.item
            })
            .then( response => {
                if (response.status == 200) {
                    this.$emit('itemchanged');
                }
            })
            .catch( error => {
                console.log(error);
            })
        },
        removeItem: function() {
            axios.delete('api/items/' + this.item.id)
            .then( response => {
                if (response.status = 200) {
                    this.$emit('itemchanged');
                }
            })
            .catch( error => {
                console.log(error);
            })
        }
    }
}
</script>