import React, { useEffect, useRef, useState } from 'react';
import './styles/main.css'
import './styles/all.css'
import './styles/bootstrap.min.css'
import { ToDoItem } from './components/ToDoItem';
import { Form } from './components/Form';
import { ToDoList } from './components/ToDoList';

interface ITODO {
	id: number,
	text: string,
}

const App: React.FC = () => {
	const [value, setValue] = useState('')
	const [todo, setTodo] = useState<ITODO[]>([])

	const addToDo: React.MouseEventHandler<HTMLButtonElement> = (event) => {
		console.log('123')
		event.preventDefault()
		if (value) {
			setTodo([...todo, {
				id: Date.now(),
				text: value,
			}])
			setValue('')
		}
	}
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus()
		}
	}, [])

	const removeTodo = (id: number): void => {
		console.log('123')
		setTodo(todo.filter(t => t.id !== id))
	}

	const removeItems = (): void => {
		setTodo([])
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col mx-auto col-md-8 mt-3 text-center">
					<div className="alert text-capitalize feedback">
						write value for item
					</div>
					<Form value={value} setValue={setValue} addToDo={addToDo} />
					{/* <form id="itemForm" className="my-3">
						<h3 className="text-capitalize mb-4">to do list</h3>
						<div className="input-group">
							<input ref={inputRef} type="text" value={value} onChange={e => setValue(e.target.value)}
								className="form-control text-capitalize" id="itemInput" placeholder="name..." />
							<div className="input-group-append">
								<button onClick={addToDo} className="btn btn-green text-capitalize">add item</button>
							</div>
						</div>
					</form> */}
					<div className="item-container">
						{todo.length === 0
							? <h1>Empty list</h1>
							: <div className="item-list my-5">
								<ToDoList items={todo} removeTodo={removeTodo} />
							</div>}
						<button onClick={removeItems} type="button" className="btn btn-green my-3 text-capitalize" id="clear-list">clear items</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
