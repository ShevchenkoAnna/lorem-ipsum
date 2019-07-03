<template>
    <div class="container">
        <div class="header-comments">
            <h1>Comments</h1>
        </div>
        <div class="all-comments" >
            <ul>
                <router-link tag="li"
                             :to="'/comments/' + comment.id"
                             v-for="comment in getAllComments"
                             :key="comment.id"
                             class="comment-box">
                    <h3>{{comment.title}}</h3>
                    <p class = "short-comment">{{comment.body}}</p>
                    <button type="submit"
                            class="read-more"
                            @click="toTopPage"
                    >Read more</button>
                </router-link>

                <!--<li class="comment-box">
                    <h3>Where does it come from?</h3>
                    <p class = "short-comment">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
                    <button type="submit"  class="read-more">Read more</button>
                </li>

                <li class="comment-box">
                    <h3>If you are going to use a passage</h3>
                    <p class = "short-comment">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    <button type="submit"  class="read-more">Read more</button>
                </li>
                <li class="comment-box">
                    <h3>Why do we use it?</h3>
                    <p class = "short-comment">Itis a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                    <button type="submit"  class="read-more">Read more</button>
                </li>
                <li class="comment-box">
                    <h3>There are many variations of passages of Lorem Ipsum available.</h3>
                    <p class = "short-comment">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button type="submit"  class="read-more">Read more</button>
                </li>
                <li class="comment-box">
                    <h3>What is Lorem Ipsum?</h3>
                    <p class = "short-comment">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button type="submit"  class="read-more">Read more</button>
                </li> -->
            </ul>
        </div>
        <div class="back" >
            <p id = "back-text">Lorem Ipsum is text of the typesetting industry</p>
            <button type="submit"  class="back-to-homepage" @click="backToHomepage"><span>Back to homepage </span></button>
        </div>
    </div>
</template>

<script>
    export default  {
        data () {
            return {
                comments: []
            }
        },
        methods:{
            backToHomepage () {
                this.$router.replace('/');
                scroll(0,0);
            },
            toTopPage () {
                scroll(0,0);
            },
            // updateListComments () {
            //     this.$store.dispatch('fetchComments')
            // }
        },
        computed: {
            getAllComments(){
                return this.$store.getters.myComments;
            }
        },
        created() {

            this.$store.dispatch('fetchComments')
            //debugger;
        }
        // beforeRouteEnter(to, from, next) {
        //     //debugger;
        //     next(vm => {
        //         //debugger;
        //         vm.updateListComments
        //     })
        // }
    }
</script>

<style lang="scss" >
    @import '../css/style.css';
    //@import './css/font-style.css';
    @import '../css/normalize.css';
</style>



