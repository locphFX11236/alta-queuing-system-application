import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MainRouter from "../routes";
import { SelectUserState } from "../core/featuresRedux/hookRedux";

function IndexView () {
    const navigate = useNavigate();
    const userState = SelectUserState();

    useEffect(() => {
        if (userState.isLoggedIn) navigate( '/setting/account' );
        else navigate( '/login' );
    }, [userState]) // eslint-disable-line react-hooks/exhaustive-deps
    // Đoạn comment cuối Hook này để bỏ qua (ignore) 'eslint's warning'

    return <MainRouter IsLogin={userState.isLoggedIn} />;
};

export default IndexView;