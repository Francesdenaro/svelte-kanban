<script>
	export let card

	const handleDragStart = e => {
		e.dataTransfer.setData('id', card._id.toString())
		e.dataTransfer.setData('parentColumn', card.column)
	}
	const handleDragEnd = e => {}
</script>

<div
	on:dragstart={handleDragStart}
	on:dragend={handleDragEnd}
	class="rounded-lg bg-white px-6 py-4"
	draggable="true"
>
	<h3 class="font-semibold ">{card.title}</h3>
	<p>{card.short_description}</p>
</div>
