import { Cascader } from 'antd';

const options = [
  {
    value: 'Воин',
    label: 'Воин',
    children: [
      {
        value: 'Мастер боевых искусств',
        label: 'Мастер боевых искусств',
      },
      {
        value: 'Мистический рыцарь',
        label: 'Мистический рыцарь',
      },
      {
        value: 'Рыцарь Пурпурного дракона',
        label: 'Рыцарь Пурпурного дракона',
      },
       {
        value: 'Самурай',
        label: 'Самурай',
      },
    ],
  },
  {
    value: 'Друид',
    label: 'Друид',
    children: [
      {
        value: 'Круг земли',
        label: 'Круг земли',
      },
      {
        value: 'Круг дикого огня',
        label: 'Круг дикого огня',
      },
      {
        value: 'Круг кованых',
        label: 'Круг кованых',
      },
    ],
  },
  {
    value: 'Плут',
    label: 'Плут',
    children: [
      {
        value: 'Фантом',
        label: 'Фантом',
      },
      {
        value: 'Убийца',
        label: 'Убийца',
      },
      {
        value: 'Круг кованых',
        label: 'Круг кованых',
      },
    ],
  },
  {
    value: 'Следопыт',
    label: 'Следопыт',
    children: [
      {
        value: 'Охотник',
        label: 'Охотник',
      },
      {
        value: 'Сумрачный охотник',
        label: 'Сумрачный охотник',
      },
      {
        value: 'Повелитель зверей',
        label: 'Повелитель зверей',
      },
    ],
  },
];


function Classes(){
	return(
		<Cascader options={options} placeholder="Выбирете Класс" />
		)
}

export default Classes;

