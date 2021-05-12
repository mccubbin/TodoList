const state = {
    items: []
};

const mutations = {
    SAVE_ITEMS(state, payload) {
        state.items = payload;
    },
    CREATE_ITEM(state, item) {
        state.items.unshift(item);
    },
    UPDATE_ITEM(state, item) {
        let index = state.items.map(obj => obj.id).indexOf(item.id);
        state.items.splice(index, 1, item);
    },
    DELETE_ITEM(state, id) {
        let index = state.items.map(obj => obj.id).indexOf(id);
        state.items.splice(index, 1);
    }
};

const actions = {
    async setItems(state) {
        axios.get('api/items')
        .then( function(response) {
            state.commit('SAVE_ITEMS', response.data);
        })
        .catch( error => {
            console.log(error);
        });
    },
    async createItem(state, item) {
        return axios.post('api/items', {
            item: item
        })
        .then( response => {
            if ( response.status == 201 ) {
                state.commit('CREATE_ITEM', response.data);
                return response.data;
            }
        })
        .catch ( error => {
            console.log(error);
        });
    },
    async updateItem(state, item) {
        axios.put('api/items/' + item.id, {
            item: item
        })
        .then( response => {
            if (response.status == 200) {
                state.commit('UPDATE_ITEM', item);
                return response.data;
            }
        })
        .catch( error => {
            console.log(error);
        });
    },
    async deleteItem(state, item) {
        axios.delete('api/items/' + item.id)
        .then( response => {
            if (response.status = 200) {
                state.commit('DELETE_ITEM', item.id);
            }
        })
        .catch( error => {
            console.log(error);
        });
    }
};

const getters = {
    getAllItems(state) {
        return state.items;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
