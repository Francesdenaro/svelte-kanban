<script>
	import { onMount } from 'svelte/internal'
	import AddColumn from './AddColumn.svelte'
	import KanbanColumn from './KanbanColumn.svelte'

	$: columns = []

	const getColumns = async () => {
		let res = await fetch('http://localhost:8000/api/columns')
		change = !change
		return res.json()
	}

	$: change = false

	onMount(async () => {
		columns = await getColumns()
	})
</script>

<div
	class="w-full items-end overflow-scroll flex flex-col gap-10 h-full rounded-lg p-10 bg-sky-100"
>
	<AddColumn on:addColumn />
	<div class="w-full items-stretch overflow-scroll h-full flex gap-10">
		{#each columns as column (column._id)}
			{#key change}
				<KanbanColumn
					{column}
					on:updateCards={() => {
						change = !change
					}}
				/>
			{/key}
		{/each}
	</div>
</div>
