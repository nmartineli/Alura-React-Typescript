import { ITask } from '../../types/task';
import Item from './Item';
import style from './List.module.scss';

interface Props {
	tasks: ITask[];
	selectTask: (selectedTask: ITask) => void;
}

function List({ tasks, selectTask }: Props) {
	return (
		<aside className={style.listaTarefas}>
			<h2>Estudos do dia</h2>
			<ul>
				{tasks.map((item, index) => (
					<Item selectTask={selectTask} {...item} key={item.id} />
				))}
			</ul>
		</aside>
	);
}

export default List;
