<template>
    <div class="add-new-note">
        <Navigation></Navigation>
        <div class="row">
            <form action="/add-new" class="add-new-note-form columns large-12 medium-12 small-12" v-on:submit="submitNote">
                <div class="row">
                    <div class="columns large-12 medium-12 small-12">
                        <label class="label-group">
                            <span class="label-text">Note Title</span>
                            <input type="text" placeholder="Enter Your Note Title Here" name="title" class="form-control" />
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="columns large-12 medium-12 small-12">
                        <textarea class="note-editor" title="Note Editor" placeholder="Enter Your Note Content"></textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="columns large-12 medium-12 small-12">
                        <input type="submit" name="submit" class="button" value="Create Your New Note">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import Navigation from './Navigation.vue';

    export default {
        name: 'add-new',
        components: {
            'Navigation': Navigation
        },
        data () {
            return {}
        },
        methods: {
            submitNote: (e) => {
                e.preventDefault();

                const form = document.querySelector('.add-new-note-form');

                fetch('https://api.studiorclv.com/api/v1/notes', {
                    method: 'put',
                    body: 'inputs=' + JSON.stringify({
                        name: 'Test title',
                        content: 'This is test content',
                        type: 1
                    }),
                    mode: 'cors'
                }).then((resp) => {
                    return resp.json();
                }).then((json) => {
                    console.log(json);
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .add-new-note-form {
        margin-top: 30px;
        padding: 20px;
        border-radius: 4px;
        display: block;
        background: #ECEDEE;
        font-family: 'Montserrat', Helvetica, Arial, sans-serif;
    }

    .label-group .label-text {
        float: left;
        background: #CCCCCC;
        border-radius: 4px 0 0 4px;
        display: block;
        padding: 10px;
        width: 15%;
        font-size: 22px;
        font-weight: 300;
        line-height: 1.25;
    }
    .label-group .form-control {
        float: left;
        padding: 10px 15px;
        width: 85%;
        font-size: 22px;
        border-radius: 0 4px 4px 0;
        font-weight: 300;
        height: auto;
        line-height: 1.25;
        border: 0;
    }

    .form-control {
        background: #FFF;
        color: #000;
        transition: all .4s !important;
    }
    .form-control:focus {
        color: #000;
    }

    .mce-container, .mce-container-body {
        background: #FFF;
        border-radius: 4px !important;
        border: 0;
        padding: 20px;
        font-size: 18px;
    }
    .mce-panel {
        background: #FFF !important;
    }

    textarea {
        padding: 20px;
        background: #FFF;
        margin: 0;
        border: 0;
        border-radius: 4px;
        min-height: 250px;
        transition: all .4s !important;
    }

    .button {
        background: #72c1af;
        border-radius: 4px;
        width: 100%;
        font-size: 22px;
        font-weight: 300;
        padding: 10px;
        margin: 20px 0 0;
        font-family: 'Montserrat', Helvetica, Arial, sans-serif;
        transition: all .3s;
    }
    .button:hover {
        color: #000;
        background: #CCC;
    }

    ::-webkit-input-placeholder {
        color: #000;
    }
    ::-moz-placeholder {
        color: #000;
    }
    :-ms-input-placeholder {
        color: #000;
    }
    :-moz-placeholder {
        color: #000;
    }
</style>
