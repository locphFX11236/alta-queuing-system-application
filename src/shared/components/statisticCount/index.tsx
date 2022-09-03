import Icon, { ArrowUpOutlined, ArrowDownOutlined, CaretRightOutlined } from '@ant-design/icons';

import './statisticCount.css';
import { Await, Calen, CalenCheck, Flash } from '../../assets/icon';
import HandleData from '../../../data/handle';
import { statisticJSON } from '../../../data/dummy';

const RenderIcon = [
    <Icon component={Calen} />,
    <Icon component={CalenCheck} />,
    <Icon component={Await} />,
    <Icon component={Flash} />
];

function TagCom ({d}: any) {
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

const StatisticCountComponent = () => {
    const dataObj = HandleData(statisticJSON)[2];
    return(
        <div className="left-statistic">
            <div key={dataObj.name} className="sta-cou-box">
                <p>{dataObj.name}</p>
                <h3>{dataObj.amount}</h3>
                <div className="sta-cou-box-icon">{ RenderIcon[0] }</div>
                <TagCom d={dataObj['rate%']} />
            </div>

            { dataObj.data.map((d: any, i: number) => (

            <div key={d.id} className="sta-cou-box">
                <p>{d.data[0].x}</p>
                <h3>{d.data[0].y}</h3>
                <div className="sta-cou-box-icon">{ RenderIcon[i + 1] }</div>
                <TagCom d={d.data[0]['rate%']} />
            </div>

            )) }

        </div>
    );
};

export default StatisticCountComponent;