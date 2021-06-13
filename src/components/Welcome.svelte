<script lang="ts">
    import { scrollto } from "svelte-scrollto";
    export let welcome;
</script>

<section
    id="Welcome"
    style={`background: url('${welcome.image}') no-repeat center fixed`}
>
    <article>
        <h1>
            {welcome.textOne}<span style="color: #fd4e4e">{welcome.name}</span>.
        </h1>
        <h1>{welcome.textTwo}</h1>
        <i use:scrollto={"#AboutMe"} class="material-icons"
            >keyboard_arrow_down</i
        >
    </article>
</section>

<style>
    section {
        text-align: center;
        background-color: black;
        width: 100vw;
        height: 100vh;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    article {
        width: 50%;
    }

    h1 {
        text-align: center;
        color: white;
        font-size: 3.5em;
        margin: 0;
    }

    i {
        color: white;
        font-size: 5rem;
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
        section {
            max-width: none;
        }
        h1 {
            text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
            text-align: justify;
        }
        article {
            width: 80%;
        }
    }
</style>
