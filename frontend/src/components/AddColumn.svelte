<script>
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()

	let name = ''
	const addColumn = async name => {
		let res = await fetch('http://localhost:8000/api/columns', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name }),
		})

		if (res.status === 200) {
			name = ''
			dispatch('addColumn')
		}
	}
</script>

<div class="flex gap-5">
	<input bind:value={name} type="text" class="shadow-md rounded-lg px-1" />
	<button
		on:click={() => addColumn(name)}
		class="rounded-lg px-4 py-2 bg-sky-600 text-white hover:bg-sky-400 transition"
		>Add column</button
	>
</div>
