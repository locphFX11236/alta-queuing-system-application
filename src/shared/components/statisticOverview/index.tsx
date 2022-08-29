import './statisticOverview.css';
import data from '../../../data/dataStatistic.json';
import { MyResponsiveRadialBar } from '../chart/radialBar';

const StaCouJSON = JSON.stringify(data); // Chuyển đổi tạm để xử lý data

const dataObj = JSON.parse(StaCouJSON);

const AOverview = () => {
    console.log(dataObj[2].data[0].data[0].x);
    return dataObj.map((D: any, i: number) => (
        <div className="overview" key={i}>
            <MyResponsiveRadialBar />
            <p>{D.amount}</p>
            <div>
                { D.data.map((d: any, i: number) => d.data.map((a: any, i: number) => (

                <p>{a.x} {a.y}</p>

                ))) }
            </div>
        </div>
    ))
};

const StatisticOverviewComponent = (): JSX.Element => (
    <AOverview />
);

export default StatisticOverviewComponent;