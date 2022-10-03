import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { SelectUserState } from "../core/featuresRedux/hookRedux";
import { AppDispatch } from "../core/featuresRedux/redux";
import MainRouter from "../routes";
import { FetchGetDatas } from "../core/featuresRedux/slice/equipmentSlice";

function IndexView () {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch()
    const userState = SelectUserState();

    useEffect(() => {
        if (userState.isLoggedIn) {
            navigate('/');
            dispatch(FetchGetDatas());
        } else navigate('/login');
    }, [userState]) // eslint-disable-line react-hooks/exhaustive-deps
    // Đoạn comment cuối Hook này để bỏ qua (ignore) 'eslint's warning'

    return <MainRouter IsLogin={userState.isLoggedIn} />;
};

export default IndexView;