import { ArrowUpOutlined, ArrowDownOutlined, CaretRightOutlined } from '@ant-design/icons';

import './statisticCount.css';
import data from '../../../data/statstic-count.json';
import { Await, Calen, CalenCheck, Flash } from '../../assets/icon';

type dataStaCount = any[];

const Icon = [ <Calen />, <CalenCheck />, <Await />, <Flash /> ];

function TagCom ({d}: any) {
    if (d[3] === 'up') {
        return(
            <div className='tag-com up'>
                <ArrowUpOutlined className='arrow'/>
                <p>{d[2]}</p>
            </div>
        );
    } else if (d[3] === 'dow') {
        return(
            <div className='tag-com dow'>
                <ArrowDownOutlined className='arrow'/>
                <p>{d[2]}</p>
            </div>
        )
    } else {
        return(
            <div className='tag-com no'>
                <CaretRightOutlined className='arrow'/>
                <p>{d[2]}</p>
            </div>
        )
    }
};

const StaCouJSON = JSON.stringify(data); // Chuyển đổi tạm để xử lý data

const StatisticCountComponent = () => {
    const dataObj = JSON.parse(StaCouJSON);
    return(
        <div className="left-statistic">
            {dataObj.map((d: dataStaCount, i: number) => {
                return (
                    <div key={`${d[0]}-${i}`} className="sta-cou-box">
                        <p>{d[0]}</p>
                        <div className="sta-cou-box-icon">{ Icon[i] }</div>
                        <h3>{d[1]}</h3>
                        <TagCom d={d} />
                    </div>
                );
            })}
        </div>
    );
};

export default StatisticCountComponent;