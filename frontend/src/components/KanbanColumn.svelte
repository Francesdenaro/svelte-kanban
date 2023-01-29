<script async>
	// @ts-nocheck

	import { createEventDispatcher } from 'svelte'
	import { onMount } from 'svelte/internal'
	import KanbanCard from './KanbanCard.svelte'

	const dispatch = createEventDispatcher()

	export let column
	let dragArea = false
	$: cards = []

	const getCards = async () => {
		let res = await fetch(`http://localhost:8000/api/cards/${column._id}`)
		return res.json()
	}

	onMount(async () => {
		cards = await getCards()
	})

	const updateCard = async e => {
		const id = e.dataTransfer.getData('id')
		const res = await fetch(`http://localhost:8000/api/cards/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				columnId: column._id,
			}),
		})
		if (res.status === 200) {
			cards = await getCards()
			dispatch('updateCards', { column: column.id, cards: cards })
		}
		dragArea = false
	}
</script>

<div
	data-column={column.name}
	on:dragover|preventDefault={() => (dragArea = true)}
	on:dragleave|preventDefault={() => (dragArea = false)}
	on:drop|preventDefault={e => updateCard(e)}
	class="flex gap-2 flex-col rounded-lg overflow-scroll {dragArea
		? 'bg-sky-500'
		: 'bg-sky-200'} p-6 shrink-0 w-64"
>
	<h2 class="uppercase font-bold">{column.name}</h2>
	{#each cards as card}
		<KanbanCard {card} />
	{/each}
</div>
