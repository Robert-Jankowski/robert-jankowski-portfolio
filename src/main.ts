import App from './App.svelte';
import { data } from "./data/data"

const app = new App({
	target: document.body,
	props: { data }
});

export default app;