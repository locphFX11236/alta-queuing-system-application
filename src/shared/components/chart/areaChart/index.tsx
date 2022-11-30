import { Typography } from 'antd';
import { useState } from 'react';

import './areaChart.css';
import Chart from './chart';
import SelectBtn from './select';

const ChartComponent = (): JSX.Element => {
    const [ select, setSelect ] = useState<string>('month');

    return (
        <div className="dashboard-chart">
            <div className='name-area-chart'>
                <Typography.Title className="title-lv-2" style={{ color: '#282739' }}>Bảng thống kê theo tháng</Typography.Title>
                <p>Năm 2021</p>
            </div>
            <div className='radio-choice-chart'>
                <h5>Xem theo</h5>
                <SelectBtn handleChange={setSelect}/>
            </div>
            <div className='area-chart'>
                <Chart select={select}/>
            </div>
        </div>
    );
};
export default ChartComponent;