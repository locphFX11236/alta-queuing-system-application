import { Typography } from "antd";
import CalendarComponent from "../../shared/components/calendar";
import StatisticOverviewComponent from "../../shared/components/statisticOverview";

const RightDashboard = (): JSX.Element => (
    <div className="right-dashboard">
        <Typography.Title className="title-1">Tong quan</Typography.Title>
        <div><StatisticOverviewComponent /></div>
        <div><CalendarComponent /></div>
    </div>
);

export default RightDashboard;