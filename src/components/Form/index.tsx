import React, { useState } from 'react';
import { ITask } from '../../types/task';
import Button from '../Button';
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props {
	setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function Form({ setTasks }: Props) {
	const [task, setTask] = useState('');
	const [time, setTime] = useState('00:00');

	function addTask(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setTasks((oldTasks) => [...oldTasks, { task, time, selected: false, completed: false, id: uuidv4() }]);
		setTask('');
		setTime('00:00');
	}
	return (
		<form className={style.novaTarefa} onSubmit={addTask}>
			<div className={style.inputContainer}>
				<label htmlFor="task">Adicione um novo estudo</label>
				<input
					type="text"
					name="task"
					value={task}
					onChange={(event) => setTask(event.target.value)}
					id="task"
					placeholder="O que você quer estudar?"
					required
				/>
			</div>
			<div className={style.inputContainer}>
				<label htmlFor="tempo">Tempo</label>
				<input
					type="time"
					step="1"
					value={time}
					onChange={(event) => setTime(event.target.value)}
					name="tempo"
					id="tempo"
					min="00:00:00"
					max="01:30:00"
					required
				/>
			</div>
			<Button type="submit">Adicionar</Button>
		</form>
	);
}

class Form1 extends React.Component<{
	setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}> {
	state = {
		task: '',
		time: '00:00:00',
	};

	addTask(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		this.props.setTasks((oldTasks) => [...oldTasks, { ...this.state, selected: false, completed: false, id: uuidv4() }]);
		this.setState({ tasks: '', time: '00:00' });
	}

	render() {
		return (
			<form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
				<div className={style.inputContainer}>
					<label htmlFor="task">Adicione um novo estudo</label>
					<input
						type="text"
						name="task"
						value={this.state.task}
						onChange={(event) => this.setState({ ...this.state, task: event.target.value })}
						id="task"
						placeholder="O que você quer estudar?"
						required
					/>
				</div>
				<div className={style.inputContainer}>
					<label htmlFor="tempo">Tempo</label>
					<input
						type="time"
						step="1"
						value={this.state.time}
						onChange={(event) => this.setState({ ...this.state, time: event.target.value })}
						name="tempo"
						id="tempo"
						min="00:00:00"
						max="01:30:00"
						required
					/>
				</div>
				<Button type="submit">Adicionar</Button>
			</form>
		);
	}
}

export default Form;
