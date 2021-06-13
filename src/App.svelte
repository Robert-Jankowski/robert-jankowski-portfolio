<script lang="ts">
	import Welcome from "./components/Welcome.svelte";
	import AboutMe from "./components/AboutMe.svelte";
	import Projects from "./components/Projects.svelte";
	import Skills from "./components/Skills.svelte";
	import Contact from "./components/Contact.svelte";
	import { data } from "./data/data";

	const { projects, skills, welcome, about } = data;
</script>

<main>
	<Welcome {welcome} />
	<AboutMe {about} />
	<Projects {projects} />
	<Skills {skills} />
	<Contact />
</main>

<style>
	main {
		text-align: center;
		padding: 0;
		margin: 0;
		width: 100%;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
