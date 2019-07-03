<template>
    <div class="container">
        <div class="header-comments">
            <h1>Comments</h1>
        </div>
        <div class="all-comments">
            <ul>
                <router-link tag="li"
                             :to="'/comments/' + comment.id"
                             v-for="comment in getAllComments"
                             :key="comment.id"
                             class="comment-box">
                    <h3>{{comment.title}}</h3>
                    <p class="short-comment">{{comment.body}}</p>
                    <button type="submit"
                            class="read-more"
                            @click="toTopPage"
                    >Read more
                    </button>
                </router-link>
            </ul>
        </div>
        <div class="back">
            <p id="back-text">Lorem Ipsum is text of the typesetting industry</p>
            <button type="submit" class="back-to-homepage" @click="backToHomepage"><span>Back to homepage </span>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                comments: []
            }
        },
        methods: {
            backToHomepage() {
                this.$router.replace('/');
                scroll(0, 0);
            },
            toTopPage() {
                scroll(0, 0);
            }
        },
        computed: {
            getAllComments() {
                return this.$store.getters.myComments;
            }
        },
        created() {
            this.$store.dispatch('fetchComments')
        }
    }
</script>

<style lang="scss">
    @import '../css/style.css';
    @import '../css/normalize.css';
</style>



