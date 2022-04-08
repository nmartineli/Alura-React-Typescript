import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import { ITask } from '../types/task';
import style from './App.module.scss';

function App() {
	const [tasks, setTasks] = useState<ITask[] | []>([]);

	const [isSelected, setIsSelected] = useState<ITask>();

	function selectTask(selectedTask: ITask) {
		setIsSelected(selectedTask);
		setTasks((oldTasks) => oldTasks.map((task) => ({ ...task, selected: task.id === selectedTask.id ? true : false })));
	}

	function endTask() {
		if (isSelected) {
			setIsSelected(undefined);
			setTasks((tasks) =>
				tasks.map((task) => {
					if (task.id === isSelected.id) {
						return {
							...task,
							selected: false,
							completed: true,
						};
					}
					return task;
				})
			);
		}
	}

	return (
		<div className={style.AppStyle}>
			<Form setTasks={setTasks} />
			<List tasks={tasks} selectTask={selectTask} />
			<Timer isSelected={isSelected} endTask={endTask} />
		</div>
	);
}

export default App;
