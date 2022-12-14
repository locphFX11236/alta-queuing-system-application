import './statisticCount.css';
import { RenderIcon, TagStatus } from './items';
import { SelectDashState } from '../../../../core/featuresRedux/hookRedux';


const StatisticCountComponent = (): JSX.Element => {
    const dataObj: any = SelectDashState().showStatistic[2];

    return (
        <div className="left-statistic">
            <div key={dataObj.name} className="sta-cou-box">
                <p>{dataObj.name}</p>
                <h3>{dataObj.amount}</h3>
                <div className="sta-cou-box-icon">{ RenderIcon[0] }</div>
                <TagStatus d={dataObj['rate%']} />
            </div>

            { dataObj.data.map((d: any, i: number) => (

            <div key={d.id} className="sta-cou-box">
                <p>{d.data[0].x}</p>
                <h3>{d.data[0].y}</h3>
                <div className="sta-cou-box-icon">{ RenderIcon[i + 1] }</div>
                <TagStatus d={d.data[0]['rate%']} />
            </div>

            )) }

        </div>
    );
};
export default StatisticCountComponent;