<template>
    <div class="add-new-note">
        <Navigation></Navigation>
        <div class="row">
            <form action="/add-new" class="add-new-note-form columns large-12 medium-12 small-12">
                <div class="row">
                    <div class="columns large-12 medium-12 small-12">
                        <label class="label-group">
                            <span class="label-text">Note Title</span>
                            <input type="text" placeholder="Enter Your Note Title Here" name="title" class="form-control" />
                        </label>
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
</style>
