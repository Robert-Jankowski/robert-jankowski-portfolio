<script lang="ts">
    import { scrollto } from "svelte-scrollto";
    export let about: string[];
</script>

<section id="AboutMe">
    <i use:scrollto={"#Welcome"} class="material-icons">keyboard_arrow_up</i>
    <header>ABOUT ME</header>
    <article>
        {#each about as paragraph}
            <p>{paragraph}</p>
        {/each}
    </article>
    <i use:scrollto={"#Projects"} class="material-icons">keyboard_arrow_down</i>
</section>

<style>
    section {
        position: relative;
        text-align: center;
        width: 100vw;
        height: 100vh;
        margin: 0;
    }

    article {
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        text-align: justify;
    }

    header {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 3em;
        font-weight: 100;
    }

    p {
        font-size: 1.5rem;
    }

    i {
        font-size: 5rem;
        /* position: absolute;
        bottom: 0;
        left: 0;
        right: 0; */
    }

    i:nth-of-type(2) {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }

    i:hover {
        transition: 0.5s;
        cursor: pointer;
        opacity: 0.8;
    }

    @media (max-width: 640px) {
        p {
            font-size: 3.6vw;
        }
        article {
            width: 80%;
        }
    }
</style>
