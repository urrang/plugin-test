import App from './App.svelte'

export { default as Counter } from './components/Counter.svelte';
export { default as Greeter } from './components/Greeter.svelte';

const app = new App({
  target: document.getElementById('app'),
})


export default app
