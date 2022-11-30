// import { useEffect } from "react";
// import { useDispatch } from "react-redux";

// import { SetTimeRefresh } from "../../core/featuresRedux/slice/dashboard";
// import { AppDispatch } from "../../core/typescript/reduxState";
import LeftDashboard from "./left";
import RightDashboard from "./right";

const Dashboard = (): JSX.Element => {
    // const dispatch: AppDispatch = useDispatch();

    // useEffect(() => dispatch(SetTimeRefresh( 6000 )), []);

    return (
        <>
            <LeftDashboard />
            <RightDashboard />
        </>
    );
};

export default Dashboard;
