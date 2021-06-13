<script lang="ts">
    import type { Projects } from "../data/types";
    import { scrollto } from "svelte-scrollto";
    export let projects: Projects;
</script>

<section id="Projects">
    <i use:scrollto={"#AboutMe"} class="material-icons">keyboard_arrow_up</i>
    <header>MY PROJECTS</header>
    <article>
        <div class="projects">
            {#each projects as project}
                <div class="projectcontainer">
                    <div
                        class="project"
                        style={`background: url('${project.image}')`}
                        on:click
                    >
                        <a href={project.url} target="_blank">{project.name}</a>
                    </div>
                </div>
            {/each}
        </div>
    </article>
    <i use:scrollto={"#Skills"} class="material-icons">keyboard_arrow_down</i>
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
        height: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    header {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 3em;
        font-weight: 100;
    }

    .projects {
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        height: 80%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-gap: 15px;
    }

    .project {
        height: 100%;
        width: 100%;
        background-size: cover;
        /* background-clip: border-box; */
        background-repeat: no-repeat;
        background-position: center;
    }

    .project:hover {
        cursor: pointer;
    }

    i {
        font-size: 5rem;
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

    a {
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        font-size: 1.2rem;
        color: white;
        font-weight: bold;
    }

    @media (max-width: 640px) {
        * {
            margin: 0;
            padding: 0;
        }

        article {
            /* width: 100%; */
            height: 0;
        }

        section {
            margin-left: auto;
            margin-right: auto;
        }

        .projects {
            width: 95%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 0px;
        }

        .project {
            height: 110px;
            width: 110px;
            margin-bottom: 15px;
        }
    }
</style>
