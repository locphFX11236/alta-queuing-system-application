import { Typography } from "antd";

import ChartComponent from "../../shared/components/chart";
import StatisticCountComponent from "../../shared/components/statisticCount";

const LeftDashboard = (): JSX.Element => (
    <div className="left-dashboard">
        <Typography.Title className="title-lv-1">Biểu đồ</Typography.Title>
        <StatisticCountComponent />
        <div className="dashboard-chart"><ChartComponent /></div>
    </div>
);

export default LeftDashboard;