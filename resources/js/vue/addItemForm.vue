<template>
    <div class="d-flex align-items-center">
        <input type="text"
            class="form-control mr-2"
            v-model="item.name"
            v-on:keyup.enter="insertItem()"
        />
        <button
            @click="insertItem()"
            class = "bg-transparent h2 p-0 m-0 border-0"
            :class="[ item.name ? 'text-white' : 'text-muted']"
        >
            <font-awesome-icon icon="plus-square" />
        </button>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data: () => ({
        item: {
            name: ""
        }
    }),
    methods: {
        ...mapActions(['createItem']),
        insertItem() {
            if (this.item.name == "") {
                return;
            }
            this.createItem(this.item).then(response => {
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
