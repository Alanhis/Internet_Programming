import { DatePicker} from 'antd';




const dateFormat = 'YYYY/MM/DD';

function Date(){
	return(
		<DatePicker format={dateFormat} />
		)
}

export default Date;

