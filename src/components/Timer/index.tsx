import { useState } from 'react';
import { timeToSeconds } from '../../common/utils/time';
import { ITask } from '../../types/task';
import Button from '../Button';
import Clock from './Clock';
import style from './Timer.module.scss';

interface Props {
	isSelected: ITask | undefined;
}

export default function Timer({ isSelected }: Props) {
	const [time, setTime] = useState<number>();

	if (isSelected?.time) {
		setTime(timeToSeconds(isSelected.time));
	}

	return (
		<div className={style.cronometro}>
			<p className={style.titulo}>Escolha um card e inicie o cronômetro </p>
			Tempo: {time}
			<div className={style.relogioWrapper}>
				<Clock />
			</div>
			<Button>Começar</Button>
		</div>
	);
}
