<script>
	import Kanban from './components/Kanban.svelte'
	let change = false
</script>

<main class="min-h-screen h-screen bg-sky-500 p-32">
	{#key change}
		<Kanban on:addColumn={() => (change = !change)} />
	{/key}
</main>
