<script lang="ts">
    import { scrollto } from "svelte-scrollto";
</script>

<section id="Contact">
    <i use:scrollto={"#Skills"} class="material-icons">keyboard_arrow_up</i>
    <header>CONTACT</header>
</section>

<style>
    section {
        position: relative;
        text-align: center;
        /* max-width: 240px; */
        width: 100vw;
        height: 100vh;
        margin: 0 auto;
    }

    header {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 3em;
        font-weight: 100;
    }

    i {
        font-size: 5em;
    }

    i:hover {
        transition: 0.5s;
        cursor: pointer;
        opacity: 0.8;
    }

    @media (min-width: 640px) {
        section {
            max-width: none;
        }
    }
</style>
