<template>
    <div>
        <div class="container">
            <div class="header-text">
                <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
            </div>
            <div class="header-image">
                <img src=  "../images/office.jpg" alt="Office">
            </div>
            <div class="content" id="about-us">
                <div id="content-box-1" class="content-box">
                    <img src="../images/WhoWeAre-icon.png" alt="Who we are icon"/>
                    <h2>Who we are</h2>
                    <ul>
                        <li>It is a long established fact that a reader will be distracted</li>
                        <li> The readable content of a page when looking at its layout</li>
                        <li>The point of using Lorem Ipsum</li>
                        <li>As opposed to using 'Content here, content here'.</li>
                    </ul>
                </div>
                <div id="content-box-2" class="content-box">
                    <img src="../images/WhatWeDo-icon.png" alt="What we do icon"/>
                    <h2>What we do</h2>
                    <ul>
                        <li>Many desktop publishing packages and web page</li>
                        <li> There are many variations of passages of Lorem Ipsum available, but the majority have</li>
                        <li>Various versions have evolved over the years, sometimes by accident</li>
                    </ul>
                </div>
                <div id="content-box-3" class="content-box">
                    <img src="../images/Technology-icon.png" alt="Technology icon"/>
                    <h2>Technology</h2>
                    <ul>
                        <li>The point of using Lorem Ipsum</li>
                        <li>As opposed to using 'Content here, content here'</li>
                        <li id="technology-3">Contrary to popular belief, Lorem Ipsum is not simply random text</li>
                        <li> A Latin professor at <br/> Hampden-Sydney College in Virginia</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="comment">
                <div class="comment-text">
                    <p>Write comment</p>
                    <p id = "line"></p>
                </div>
                <div class="comment-form" id = "write-comment">
                    <form v-on:submit.prevent="sendComment"  method="post" ref="form">
                        <p><input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Title"
                                required
                                v-model="title"
                        ></p>
                        <p><textarea
                                name="message"
                                id = "message"
                                placeholder="Your comment"
                                required
                                v-model="body"
                        ></textarea></p>
                        <p id = "form-submit"><button type="submit" id="submit" >Send</button></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                body: '',
            }
        },
        methods: {
            sendComment() {
                const comment = {
                    title: this.title,
                    body: this.body,
                    created_at: Date.now()
                };

                this.$store.dispatch('sendComment', comment)
                    .then(() => {
                        this.$router.push('/comments')
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
    }
</script>
