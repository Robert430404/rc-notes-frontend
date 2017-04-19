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
</style>
