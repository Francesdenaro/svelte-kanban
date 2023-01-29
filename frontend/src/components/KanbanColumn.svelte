<script async>
	import { onMount } from 'svelte/internal'
	import KanbanCard from './KanbanCard.svelte'

	export let column
	let dragArea = false
	let cards = []
	const getCards = async () => {
		let res = await fetch(`http://localhost:8000/api/cards/${column._id}`)
		return res.json()
	}

	onMount(async () => {
		cards = await getCards()
		console.log(cards)
	})
</script>

<div
	on:dragover|preventDefault={() => (dragArea = true)}
	on:dragleave|preventDefault={() => (dragArea = false)}
	on:drop|preventDefault={e => {
		const id = e.dataTransfer.getData('id')
		const parentColumn = e.dataTransfer.getData('parentColumn')
		dragArea = false
		console.log(id, parentColumn)
	}}
	class="flex gap-2 flex-col rounded-lg {dragArea
		? 'bg-sky-500'
		: 'bg-sky-200'} p-6 shrink-0 w-64"
>
	<h2 class="uppercase font-bold">{column.name}</h2>
	{#each cards as card}
		<KanbanCard {card} />
	{/each}
</div>
