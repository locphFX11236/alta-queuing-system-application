import { LeftOutlined } from '@ant-design/icons';

const PrevButton = ({prevMonth}: any) => (
    <LeftOutlined onClick={() => prevMonth()} />
);

export default PrevButton;