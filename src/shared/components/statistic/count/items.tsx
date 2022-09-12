import Icon, { ArrowUpOutlined, ArrowDownOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Await, Calen, CalenCheck, Flash } from '../../../assets/icon';

export const RenderIcon = [
    <Icon component={Calen} />,
    <Icon component={CalenCheck} />,
    <Icon component={Await} />,
    <Icon component={Flash} />
];

export function TagStatus ({d}: any) {
    if (d > 0) {
        return(
            <div className='tag-com up'>
                <ArrowUpOutlined className='arrow'/>
                <p>{d} %</p>
            </div>
        );
    } else if (d < 0) {
        return(
            <div className='tag-com dow'>
                <ArrowDownOutlined className='arrow'/>
                <p>{Math.abs(d)} %</p>
            </div>
        )
    } else {
        return(
            <div className='tag-com no'>
                <CaretRightOutlined className='arrow'/>
                <p>{d} %</p>
            </div>
        )
    }
};