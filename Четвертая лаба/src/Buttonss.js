import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

function Buttonss(){
	return(
		<div>
		<Button onClick={confirm}>Подверждение</Button>
		<Button onClick={warning}>Ошибка?</Button>
		</div>
		)
}

function confirm() {
  Modal.confirm({
    title: 'Подтвержение',
    icon: <ExclamationCircleOutlined />,
    content: 'Вы уверены в своем выборе',
    okText: 'Да',
    cancelText: 'Нет',
  });
}
function warning(){
	Modal.error({
		title: 'Ошибка!',
		content: 'Ошибка в работе,попробуйте снова.',
	});
}
export default Buttonss;

