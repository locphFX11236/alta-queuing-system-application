import { Typography } from "antd";
import CalendarComponent from "../../shared/components/calendar";
import StatisticOverviewComponent from "../../shared/components/statisticOverview";

const RightDashboard = (): JSX.Element => (
    <div className="right-dashboard">
        <Typography.Title className="title-lv-1">Tổng quan</Typography.Title>
        <div className="right-statistic-group"><StatisticOverviewComponent /></div>
        <div className="dashboard-calendar"><CalendarComponent /></div>
    </div>
);

export default RightDashboard;