import moment from 'moment';

const Title = ({ rootDate, value }: any): JSX.Element => {
    if (value.length === 0) return <>{ moment(rootDate).format('DD MMM YYYY') } (now)</>;
    if (value.length === 1) return <>{moment(value[1]).format('DD MMM YYYY ')}</>;
    if (value.length === 2 && moment(value[0]).isSame(value[1], 'month')) return <>{moment(value[0]).format('DD - ') + moment(value[1]).format('DD MMM YYYY')}</>;
    else return <>{`${ moment(value[0]).format('DD MMM YYYY')} - ${ moment(value[1]).format('DD MMM YYYY') }`}</>;
}

export default Title;