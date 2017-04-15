<template>
    <div class="hello">
        <Navigation></Navigation>
        <Note></Note>
    </div>
</template>

<script>
    import Navigation from './Navigation.vue';
    import Note       from './Note.vue';

    export default {
        name: 'hello',
        components: {
            'Navigation': Navigation,
            'Note': Note
        },
        data () {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .row {
        max-width: 1160px;
        margin: 0 auto;
        overflow: hidden;
    }
</style>
