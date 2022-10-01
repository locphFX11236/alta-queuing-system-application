import { RightOutlined } from '@ant-design/icons';

const NextButton = ({nextMonth}: any): JSX.Element => (
    <RightOutlined onClick={() => nextMonth()} />
);

export default NextButton;