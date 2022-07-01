import React from 'react'

interface IForm {
	value: string;
	setValue: (value: string) => void;
	addToDo: React.MouseEventHandler<HTMLButtonElement>
}


export const Form: React.FC<IForm> = (props) => {
	const { value, setValue, addToDo } = props
	return (
		<form id="itemForm" className="my-3">
			<h3 className="text-capitalize mb-4">to do list</h3>
			<div className="input-group">
				<input type="text" value={value} onChange={e => setValue(e.target.value)}
					className="form-control text-capitalize" id="itemInput" placeholder="name..." />
				<div className="input-group-append">
					<button onClick={(event) => addToDo(event)}
						className="btn btn-green text-capitalize" type="submit">add item</button>
				</div>
			</div>
		</form>
	)
}
