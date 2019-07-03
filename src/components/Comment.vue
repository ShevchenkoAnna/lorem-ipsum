<template>
    <div class="container">
        <div class="container-comment">
            <div class="one-comment">
                <button type="submit" class="back-to-comments" @click="backToComments"><span>Back to Comments </span>
                </button>
                <div class="settings">
                    <button type="submit" id="edit" @click="showModal = !showModal">Edit</button>
                    <app-edit-comment :comment="comment"
                                      v-if="showModal"
                                      @close="showModal = !showModal"
                    ></app-edit-comment>
                    <button type="submit" id="delete" @click="deleteComment">Delete</button>
                </div>
                <h2>{{ comment.title}}</h2>
                <p>{{ comment.body}}</p>
            </div>
        </div>
        <div class="back">
            <p id="back-text">Lorem Ipsum is text of the typesetting industry</p>
            <button type="submit" class="back-to-homepage" @click="backToHomepage"><span>Back to homepage </span>
            </button>
        </div>
    </div>
</template>

<script>
    import EditComment from './EditComment'

    export default {
        data() {
            return {
                showModal: false
            }
        },
        props: ['id'],
        computed: {
            comment() {
                return this.$store.getters.myComment;
            }
        },
        methods: {
            backToHomepage() {
                this.$router.push('/');
                scroll(0, 0);
            },
            backToComments() {
                this.$router.push('/comments');
                scroll(0, 0);
            },
            deleteComment() {
                const id = this.id;
                this.$store.dispatch('deleteComment', id)
                    .then(() => {
                        this.$router.push('/comments')
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        created() {
            const id = this.id;
            this.$store.dispatch('getComment', id)
        },
        components: {
            appEditComment: EditComment
        },
        watch: {
            showModal: function (val) {

            }
        }

    }
</script>

<style lang="scss">
    @import '../css/style.css';
    //@import './css/font-style.css';
    @import '../css/normalize.css';
</style>
