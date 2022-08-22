import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectUser } from "../features/slice";
import Router from "../routes/routes";

function IndexView () {
    const user = useSelector(selectUser)
    let navigate = useNavigate();

    useEffect(() => {
        user ? navigate('/') : navigate('/login');
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    // Đoạn comment cuối Hook này để bỏ qua (ignore) 'eslint's warning'

    return (
        <Router />
    );
};

export default IndexView;