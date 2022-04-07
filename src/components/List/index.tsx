import { ITask } from '../../types/task';
import Item from './Item';
import style from './List.module.scss';

function List({ tasks }: { tasks: ITask[] }) {
	return (
		<aside className={style.listaTarefas}>
			<h2>Estudos do dia</h2>
			<ul>
				{tasks.map((item, index) => (
					<Item {...item} key={index} />
				))}
			</ul>
		</aside>
	);
}

export default List;
