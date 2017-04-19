<template>
    <section class="notes row">
        <div class="columns large-4 medium-4 small-12" v-for="note in notes">
            <section class="note">
                <h3 class="name">{{ note.name }}</h3>
                <p class="content">
                    {{ note.content }}
                </p>
                <a :href="/update/ + note.id">Update Note</a>
            </section>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Note',
        data: () => {
            return {
                notes: [
                    {
                        id: 0,
                        name: '',
                        content: ''
                    }
                ]
            }
        },
        mounted () {
            fetch('https://api.studiorclv.com/api/v1/notes')
                .then((resp) => {
                    return resp.json();
                })
                .then((json) => {
                    this.notes = json;
                });
        }
    }
</script>

<style scoped>
    .note {
        background: #fcfcfc;
        border: 1px solid #f1f1f1;
        padding: 20px;
        border-radius: 4px;
        margin-top: 30px;
    }

    .note .name {
        text-align: left;
        font-size: 18px;
        font-weight: bold;
        margin: 0;
        padding: 0 0 20px;
        border-bottom: 1px solid #f1f1f1;
    }

    .note .content {
        font-size: 16px;
        text-align: left;
        margin: 20px auto 0 auto;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>