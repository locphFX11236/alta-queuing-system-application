import { Badge } from 'antd';

import './statisticOverview.css';
import { statisticJSON } from '../../../../data/dummy';
import RadialBar from '../../chart/radialBarChart/radialBar';
import HandleData from '../../../../data/handle';
import { RenderIcon } from './items';

const dataObj = HandleData(statisticJSON);

const StatisticOverviewComponent: React.FC = () => dataObj.map((D: any, i: number) => (
    <div className="overview" key={`${D.key}_${i}`}>
        <RadialBar choice={i} />
        <p>{Math.round(D.data[0].data[0]['proportion%'])}%</p>
        <div>
            <p>{D.amount}</p>
            <p style={{ color: D.color[0] }}>{RenderIcon[i]}</p>
            <p style={{ color: D.color[0] }}>{D.key}</p>
        </div>
        <div>{ D.data.map((d: any, i: number) => (

            <div key={i}>
                <Badge color={D.color[i]} />
                <p>{d.data[0].x}</p>
                <p style={{ color: D.color[i] }}>{d.data[0].y}</p>
            </div>

        )) }</div>
    </div>
));

export default StatisticOverviewComponent;