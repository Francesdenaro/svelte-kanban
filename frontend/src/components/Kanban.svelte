<script>
	import { onMount } from 'svelte/internal'
	import KanbanColumn from './KanbanColumn.svelte'

	$: columns = []

	const getColumns = async () => {
		let res = await fetch('http://localhost:8000/api/columns')
		return res.json()
	}

	$: change = false

	onMount(async () => {
		columns = await getColumns()
	})
</script>

<div
	class="w-full items-stretch overflow-scroll flex gap-10 h-full rounded-lg p-10 bg-sky-100"
>
	{#each columns as column (column._id)}
		{#key change}
			<KanbanColumn
				{column}
				on:updateCards={() => {
					console.log(column.name, 'here')
					change = !change
				}}
			/>
		{/key}
	{/each}
</div>
