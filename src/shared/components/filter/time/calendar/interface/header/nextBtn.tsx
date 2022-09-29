import { RightOutlined } from '@ant-design/icons';

const NextButton = ({nextMonth}: any) => (
    <RightOutlined onClick={() => nextMonth()} />
);

export default NextButton;