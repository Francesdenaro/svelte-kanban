<script>
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()
	export let columnId
	let title = ''
	let short_description = ''
	$: open = false
	const addCard = async () => {
		console.log(title, short_description, columnId)
		const res = await fetch('http://localhost:8000/api/cards', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title,
				short_description,
				column: columnId,
			}),
		})
		if (res.status === 200) {
			dispatch('updateCards')
			title = ''
			short_description = ''
		}
	}
</script>

<button
	class="rounded-lg px-4 py-2 bg-sky-600 text-white hover:bg-sky-400 transition"
	on:click={() => (open = true)}
>
	+ Add Card
</button>
<div>
	{#if open}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="fixed inset-0 bg-black bg-opacity-50"
			on:click={() => (open = false)}
		/>
	{/if}
</div>
<dialog class="shadow-2xl rounded-lg p-10" {open}>
	<form class="flex flex-col gap-4" on:submit|preventDefault={addCard}>
		<label class="flex flex-col" for="title"
			>Title

			<input
				class="shadow rounded-lg"
				type="text"
				id="title"
				bind:value={title}
			/>
		</label>
		<label class="flex flex-col" for="description">
			Short Description
			<input
				class="shadow rounded-lg"
				type="text"
				id="description"
				bind:value={short_description}
			/>
		</label>
		<button
			class="rounded-lg px-4 py-2 bg-sky-600 text-white hover:bg-sky-400 transition"
			type="submit"
			>Add
		</button>
	</form>
</dialog>
