import React, { useState } from 'react'

interface IItemProps {
	id: number,
	text: string,
	removeTodo: (id: number) => void;
}

export const ToDoItem: React.FC<IItemProps> = (props) => {
	const [done, setDone] = useState(false)
	const { id, text, removeTodo, } = props
	return (
		<div className="item my-3">
			<h5 style={{ color: done ? 'gray' : '', textDecoration: done ? 'line-through' : '' }} className="item-name text-capitalize">{text}</h5>
			<div className="item-icons">
				<span onClick={() => setDone(!done)} className="complete-item mx-2 item-icon"><i className="far fa-check-circle"></i></span>
				<span onClick={() => removeTodo(id)} className="delete-item item-icon"><i className="far fa-times-circle"></i></span>
			</div>
		</div>
	)
}
