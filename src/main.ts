import Counter from './components/Counter.svelte';
import Greeter from './components/Greeter.svelte';

export default {
    routes: {
        '/': {
            title: 'Home',
            component: Greeter,
        },
        '/counter': {
            title: 'Counter',
            component: Counter,
        },
    },
};
