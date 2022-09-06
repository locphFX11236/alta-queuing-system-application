import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import type { UserState } from "../features/redux";

// import { useAppSelector } from "../features/hookRedux";
// import { SelectUser } from "../features/userSlice";
import Router from "../routes/routes";

function IndexView () {
    let navigate = useNavigate();
    // const userState: UserState = useAppSelector(SelectUser)

    useEffect(() => {
        // user.isLoggedIn ? navigate('/') : navigate('/login');
        
        navigate('/report');
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    // Đoạn comment cuối Hook này để bỏ qua (ignore) 'eslint's warning'

    return <Router />;
};

export default IndexView;