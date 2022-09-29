import moment from 'moment';

const Title = ({ rootDate }: any) => (
    <>
        {moment(rootDate).format('DD MMM YYYY')}
    </>
);

export default Title;