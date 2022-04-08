import { useEffect, useState } from 'react';
import { timeToSeconds } from '../../common/utils/time';
import { ITask } from '../../types/task';
import Button from '../Button';
import Clock from './Clock';
import style from './Timer.module.scss';

interface Props {
	isSelected: ITask | undefined;
	endTask: () => void;
}

export default function Timer({ isSelected, endTask }: Props) {
	const [time, setTime] = useState<number>();

	useEffect(() => {
		if (isSelected?.time) {
			setTime(timeToSeconds(isSelected?.time));
		}
	}, [isSelected]);

	function timer(counter: number = 0) {
		setTimeout(() => {
			if (counter > 0) {
				setTime(counter - 1);
				return timer(counter - 1);
			}
			endTask();
		}, 1000);
	}

	return (
		<div className={style.cronometro}>
			<p className={style.titulo}>Escolha um card e inicie o cronômetro </p>
			<div className={style.relogioWrapper}>
				<Clock time={time} />
			</div>
			<Button onClick={() => timer(time)}>Começar</Button>
		</div>
	);
}
