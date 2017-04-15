<template>
    <nav class="primary-navigation">
        <section class="title-bar">
            <section class="hamburger" v-on:click="toggleNavigation">
                <div></div>
                <div></div>
                <div></div>
            </section>
            <section class="branding">
                RC Notes
            </section>
        </section>
        <section class="links">
            <a v-for="link in links" :href="link.href" class="link">
                {{ link.label }}
            </a>
        </section>
    </nav>
</template>

<script>
    export default {
        name: 'Navigation',
        data () {
            return {
                links: [
                    {
                        id: 0,
                        href: '/',
                        label: 'Home'
                    }, {
                        id: 1,
                        href: '/new',
                        label: 'New Note'
                    }, {
                        id: 2,
                        href: '/archive',
                        label: 'Archived Notes'
                    }
                ]
            }
        }, methods: {
            toggleNavigation: () => {
                const links = document.querySelector('.links');

                links.classList.toggle('show');
            }
        }
    }
</script>

<style scoped>
    .title-bar {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        background: #72c1af;
        margin: 0;
        padding: 10px;
        width: 100%;
        border-bottom: 1px solid rgba(255, 255, 255, .40);
        box-shadow: 0 0 15px rgba(00, 00, 00, .35);
    }

    .hamburger {
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, .50);
        border: 2px solid rgba(00, 00, 00, .25);
        border-radius: 4px;
        padding: 5px 0 0;
        box-sizing: border-box;
        cursor: pointer;
        display: block;
        float: left;
        transition: all .4s;
    }

    .hamburger div {
        width: 50%;
        height: 2px;
        margin: 5px 25% 0;
        background: rgba(00, 00, 00, .25);
        transition: all .4s;
    }

    .hamburger:hover {
        background: rgba(00, 00, 00, .25);
        border-color: rgba(255, 255, 255, .50);
    }

    .hamburger:hover div {
        background: rgba(255, 255, 255, .50);
    }

    .branding {
        text-align: left;
        line-height: 40px;
        font-size: 24px;
        color: #1b1b1b;
        padding: 0 0 0 20px;
        display: block;
        float: left;
        font-weight: 300;
    }

    .links {
        position: fixed;
        top: 60px;
        left: 0;
        bottom: 0;
        z-index: 9;
        background: #ECEDEE;
        border-right: 1px solid #ccc;
        transform: translateX(-100%);
        transition: all .4s;
    }

    .links.show {
        transform: translateX(0%);
    }

    .links .link {
        display: block;
        color: #1b1b1b;
        text-align: left;
        padding: 15px 10px;
        text-decoration: none;
        border-bottom: 1px solid #ccc;
        font-size: 18px;
        width: 275px;
        transition: all .4s;
    }

    .links .link:hover {
        background: #CCC;
    }
</style>