import { Typography } from "antd";

import ChartComponent from "../../shared/components/chart/areaChart";
import StatisticCountComponent from "../../shared/components/statistic/count";

const LeftDashboard = (): JSX.Element => (
    <div className="left-dashboard">
        <Typography.Title className="title-lv-1">Biểu đồ</Typography.Title>
        <StatisticCountComponent />
        <ChartComponent />
    </div>
);

export default LeftDashboard;