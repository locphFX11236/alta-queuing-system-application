import { Typography } from "antd";

import ChartComponent from "../../shared/components/chart";
import StatisticNumberComponent from "../../shared/components/statisticNumber";

const LeftDashboard = (): JSX.Element => (
    <div className="left-dashboard">
        <Typography.Title>Bieu do</Typography.Title>
        <div><StatisticNumberComponent /></div>
        <div><ChartComponent /></div>
    </div>
);

export default LeftDashboard;