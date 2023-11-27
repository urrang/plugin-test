<script lang="ts">
    import { onMount } from 'svelte';

    export let pluginAPI: any; // Type me

    let user: any;

    onMount(() => {
        loadUserData();
    });

    async function loadUserData() {
        user = await pluginAPI.http.get('/api/biz/users?action=current-session');
    }
</script>

<h1>
    Hello
    {#if user}
        {user.DisplayName || user.UserName || user.Email}
    {/if}
</h1>

<button on:click={() => pluginAPI.showAlert('Hello from plugin')}>Show alert</button>

<style>
    h1 {
        color: red;
    }
</style>
