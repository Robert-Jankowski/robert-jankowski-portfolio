<script lang="ts">
    import type { Skills } from "../data/types";
    import StarRating from "svelte-star-rating";
    import { scrollto } from "svelte-scrollto";
    export let skills: Skills;

    const starConfig = {
        fullColor: "#000",
        emptyColor: "hsl(250, 0%, 90%)",
        size: 15,
    };
</script>

<section id="Skills">
    <i use:scrollto={"#Projects"} class="material-icons">keyboard_arrow_up</i>
    <header>MY SKILLS</header>
    <article>
        <div class="column">
            <h2>Programming</h2>
            <div class="skills">
                {#each skills.programming as skill}
                    <div class="skill">
                        <p class="skillname">{skill.name}</p>
                        <StarRating rating={skill.value} config={starConfig} />
                    </div>
                {/each}
            </div>
        </div>
        <div class="column">
            <h2>Language</h2>
            <div class="skills">
                {#each skills.language as skill}
                    <div class="skill">
                        <p class="skillname">{skill.name}</p>
                        <StarRating rating={skill.value} config={starConfig} />
                    </div>
                {/each}
            </div>
        </div>
        <div class="column">
            <h2>Soft skills</h2>
            <div class="skills">
                {#each skills.soft as skill}
                    <div class="skill">
                        <p class="skillname">{skill.name}</p>
                        <StarRating rating={skill.value} config={starConfig} />
                    </div>
                {/each}
            </div>
        </div>
    </article>
    <i use:scrollto={"#Contact"} class="material-icons">keyboard_arrow_down</i>
</section>

<style>
    section {
        position: relative;
        flex-direction: column;
        text-align: center;
        width: 100vw;
        height: 100vh;
        margin: 0 auto;
    }

    article {
        margin-right: auto;
        margin-left: auto;
        width: 50%;
        display: flex;
        justify-content: space-around;
    }

    header {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 3em;
        font-weight: 100;
    }

    .skill {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .skillname {
        margin-right: 20px;
        padding-bottom: 10px;
    }

    p {
        font-weight: bold;
    }

    i {
        font-size: 5em;
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
        * {
            margin: 0;
        }

        article {
            width: 80%;
            display: inline;
            padding: 0;
        }
        .skillname {
            margin: 0px;
            padding: 0px;
        }

        .skills {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            /* grid-template-rows: repeat(, 1fr); */
        }

        .skillname {
            padding-bottom: 10px;
            margin-left: 10px;
        }

        .column {
            margin: 0;
            padding-right: 20px;
        }
        h2 {
            margin-bottom: 10px;
        }
    }
</style>
