import { LeftOutlined } from '@ant-design/icons';

const PrevButton = ({prevMonth}: any): JSX.Element => (
    <LeftOutlined onClick={() => prevMonth()} />
);

export default PrevButton;