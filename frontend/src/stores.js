import { writable } from 'svelte/store'

export const TaskStore = writable([
	{
		id: 1,
		title: 'Task 1',
		description: 'Description 1',
		completed: false,
	},
	{
		id: 2,
		title: 'Task 2',
		description: 'Description 2',
		completed: false,
	},
	{
		id: 3,
		title: 'Task 3',
		description: 'Description 3',
		completed: false,
	},
])

export const ColumnStore = writable([
	{
		id: 1,
		title: 'To Do',
		tasks: [1, 2],
	},
	{
		id: 2,
		title: 'In Progress',
		tasks: [3],
	},
	{
		id: 3,
		title: 'Done',
		tasks: [],
	},
])
