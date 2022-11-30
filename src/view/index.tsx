import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import MainRouter from "../routes";
import { SelectUserState } from "../core/featuresRedux/hookRedux";
import { AppDispatch } from "../core/typescript/reduxState";
import { FetchAll } from "../core/featuresRedux/actionAllReducer";
// import { Clone } from "../core/data";

function IndexView () {
    const navigate = useNavigate();
    const userState = SelectUserState();
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        // Clone('numCou'); // Tắt strict mode
        FetchAll(dispatch);
        if (userState.isLoggedIn) navigate( '/' );
        else navigate( '/login' );
    }, [ userState.isLoggedIn ]) // eslint-disable-line react-hooks/exhaustive-deps
    // Đoạn comment cuối Hook này để bỏ qua (ignore) 'eslint's warning'

    return <MainRouter IsLogin={userState.isLoggedIn} />;
};

export default IndexView;