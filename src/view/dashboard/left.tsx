import { Typography } from "antd";

import ChartComponent from "../../shared/components/chart";
import StatisticNumberComponent from "../../shared/components/statisticNumber";

const LeftDashboard = (): JSX.Element => (
    <div className="left-dashboard">
        <Typography.Title className="title-1">Bieu do</Typography.Title>
        <div><StatisticNumberComponent /></div>
        <div><ChartComponent /></div>
    </div>
);

export default LeftDashboard;