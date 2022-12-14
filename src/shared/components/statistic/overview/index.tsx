import { Badge } from 'antd';

import './statisticOverview.css';
import RadialBar from '../../chart/radialBarChart/radialBar';
import { RenderIcon } from './items';
import { SelectDashState } from '../../../../core/featuresRedux/hookRedux';


const StatisticOverviewComponent = (): JSX.Element => {
    const dataObj: any = SelectDashState().showStatistic;

    return dataObj.map((D: any, i: number) => (
        <div className="overview" key={`${D.key}_${i}`}>
            <RadialBar dataObj={D} />
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
};
export default StatisticOverviewComponent;