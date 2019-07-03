import axios from 'axios'

class Comment {
    constructor (title, body, id){
        this.title = title;
        this.body = body;
        this.id = id;
    }
}

export default {
    state:{
        comments:[],
        comment: {}
    },
    mutations:{
        loadComments(state, payload){
            state.comments = payload
        },
        loadComment(state, payload){
            state.comment = payload
        },
        updateComment(state, { title, description}){
            state.comment.title = title;
            state.comment.body = description;
        },
        deleteComment(state, payload) {
            const comment = state.comments.find(c => {
                return c.id === payload
            });
            state.comments.splice(state.comments.indexOf(comment), 1 );
        }
    },
    getters: {
        myComments(state){
            return state.comments
        },
        myComment(state){
            return state.comment
        }
    },
    actions:{
        async fetchComments ({commit}) {
            try{
                await axios.get('https://5cbef81d06a6810014c66193.mockapi.io/api/comments')
                        .then(function (response) {
                            commit('loadComments', response.data);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
            }catch (error) {
                console.log(error);
                throw error
            }
        },
        async getComment ({commit}, payload) {
            try{
                await axios.get('https://5cbef81d06a6810014c66193.mockapi.io/api/comments/' + payload)
                    .then(function (response) {
                        commit('loadComment', response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }catch (error) {
                console.log(error);
                throw error
            }
        },
        async updateComment ({commit}, {title, description, id}) {
            try{
                await axios.put('https://5cbef81d06a6810014c66193.mockapi.io/api/comments/' + id,{
                    title: title,
                    body: description
                } )
                    .then(function (response) {
                        commit('updateComment', {title, description});
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }catch (error) {
                console.log(error);
                throw error
            }
        },
        async deleteComment ({commit}, payload) {
            try{
                await axios.delete('https://5cbef81d06a6810014c66193.mockapi.io/api/comments/' + payload)
                    .then(function (response) {
                        commit('deleteComment', payload);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }catch (error) {
                console.log(error);
                throw error
            }
        },
        async sendComment ({commit}, payload) {
            try{
                const config = {
                    headers: { 'Content-Type': 'application/json' },
                    responseType: 'json'
                };

                await axios.post('https://5cbef81d06a6810014c66193.mockapi.io/api/comments', {
                    title: payload.title,
                    body: payload.body,
                    created_at: payload.created_at
                }, config)
                    .then(response => {})
                    .catch(function (error) {
                        console.log(error);
                    });
            }catch (error) {
                console.log(error);
                throw error
            }
        }
    }
}
