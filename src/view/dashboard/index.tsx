import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { SelectDashState } from "../../core/featuresRedux/hookRedux";
import { DashboardFetchAPI, SetTimeRefresh } from "../../core/featuresRedux/slice/dashboard";
import { AppDispatch } from "../../core/typescript/reduxState";
import LeftDashboard from "./left";
import RightDashboard from "./right";

const Dashboard = (): JSX.Element => {
    const dispatch: AppDispatch = useDispatch();
    const time: any = SelectDashState().refreshTime;

    useEffect(() => { dispatch(SetTimeRefresh( 60000 )) }, [ dispatch ]);
    setInterval(() => { dispatch( DashboardFetchAPI() )}, time);

    return (
        <>
            <LeftDashboard />
            <RightDashboard />
        </>
    );
};

export default Dashboard;
