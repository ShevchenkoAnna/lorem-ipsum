<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <h3>Edit comment</h3>
                    <div class="modal-header">
                        <input type="text"
                               name="title"
                               v-model="editedTitle"
                               id="editTitle"
                        >
                    </div>

                    <div class="modal-body">
                        <p><textarea
                                name="description"
                                v-model="editedDescription"
                                id="editBody"
                        ></textarea></p>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <button id="modalButtonSave" @click="onSave">
                                Save
                            </button>
                            <button id="modalButtonClose" @click="$emit('close')">
                                Close
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: ['comment'],
        data () {
            return {
                editedTitle: this.comment.title,
                editedDescription: this.comment.body
                }
            },
        computed: {
            editedTitle1() {
                return this.comment.title
            },
            editedDescription1() {
                return this.comment.body
            },
        },
        methods: {
            onSave() {

                if (this.editedDescription !== '' && this.editedTitle !== '') {

                    this.$store.dispatch('updateComment', {
                        title: this.editedTitle,
                        description: this.editedDescription,
                        id: this.comment.id
                    });
                    this.$emit('close');

                }

            }
        }
    }
</script>

<style scoped>

</style>
