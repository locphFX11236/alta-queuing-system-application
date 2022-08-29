import { ArrowUpOutlined, ArrowDownOutlined, CaretRightOutlined } from '@ant-design/icons';

import './statisticCount.css';
import data from '../../../data/dataStatistic.json';
import { Await, Calen, CalenCheck, Flash } from '../../assets/icon';

const StaCouJSON = JSON.stringify(data); // Chuyển đổi tạm để xử lý data

const Icon = [ <Calen />, <CalenCheck />, <Await />, <Flash /> ];

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
    const dataObj = JSON.parse(StaCouJSON)[2];
    return(
        <div className="left-statistic">
            <div key={dataObj.name} className="sta-cou-box">
                <p>{dataObj.name}</p>
                <h3>{dataObj.amount}</h3>
                <div className="sta-cou-box-icon">{ Icon[0] }</div>
                <TagCom d={dataObj['rate%']} />
            </div>

            { dataObj.data.map((d: any, i: number) => (

            <div key={d.id} className="sta-cou-box">
                <p>{d.data[0].x}</p>
                <h3>{d.data[0].y}</h3>
                <div className="sta-cou-box-icon">{ Icon[i] }</div>
                <TagCom d={d.data[0]['rate%']} />
            </div>

            )) }

        </div>
    );
};

export default StatisticCountComponent;