import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../core/features/hookRedux";
import { UserState } from "../core/features/redux";
import { SelectUser } from "../core/features/userSlice";

import Router from "../routes/routes";

function IndexView () {
    let navigate = useNavigate();
    const userState: UserState = useAppSelector(SelectUser);

    useEffect(() => {
        userState.isLoggedIn ? navigate('/') : navigate('/login');
        
        // navigate('/infor');
    }, [userState]) // eslint-disable-line react-hooks/exhaustive-deps
    // Đoạn comment cuối Hook này để bỏ qua (ignore) 'eslint's warning'

    return <Router />;
};

export default IndexView;