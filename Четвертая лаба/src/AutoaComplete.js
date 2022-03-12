import { AutoComplete } from 'antd';

const options = [
  { value: 'Человек' },
  { value: 'Орк' },
  { value: 'Эльф' },
  { value: 'Макаронный монстр' },
];
const Complete = () => (
  <AutoComplete
    style={{
      width: 200,
    }}
    options={options}
    placeholder="Раса"
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
);

function AutoaComplete(){
	return(
		<Complete />
		)
}

export default AutoaComplete;

