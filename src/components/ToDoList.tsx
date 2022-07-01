import React from 'react'
import { ToDoItem } from './ToDoItem'

interface IToDo {
	id: number,
	text: string,
}

interface IToDoList {
	items: IToDo[];
	removeTodo: (id: number) => void;
}


export const ToDoList: React.FC<IToDoList> = (props) => {
	const { items, removeTodo, } = props
	return (
		<div>
			{items.map(item => <ToDoItem key={item.id} {...item} removeTodo={removeTodo} />)}
		</div>
	)
}
