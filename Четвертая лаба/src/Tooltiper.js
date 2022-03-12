import { Tooltip,Slider } from 'antd';

function Tooltiper(){
	return(
		<div>
		<Tooltip title="Характеристика описывает физическую силу и часто используется в обсчёте рукопашного боя" color={'red'} key={'red'}>
		<span> Сила. </span>
		</Tooltip>
		<Slider defaultValue={25} />
		<Tooltip title="Характеристика описывает физическую ловкость: увёртливость, координацию движений, подвижность, во многих случаях также и скорость" color={'green'} key={'green'}>
		<span> Ловкость. </span>
		</Tooltip>
		<Slider defaultValue={25}  />
		<Tooltip title="Характеристик, отвечающих за ментальные способности, в первую очередь за объём знаний и глубину ума." color={'blue'} key={'blue'}>
		<span> Интелект. </span>
		</Tooltip>
		<Slider defaultValue={25} />
		</div>
		)
}

export default Tooltiper;

