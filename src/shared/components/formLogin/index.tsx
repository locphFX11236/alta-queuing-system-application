import { Link } from "react-router-dom";
import { Button } from "antd";
import { useDispatch } from "react-redux";

import './formLogin.css'
import { login } from "../../../features/slice";

const HandleClick = (e: any) => {
    const dispatch = useDispatch();
    e.preventDefault();
    dispatch(login({
        isLoggedIn: true
    }));
}

const FormLogin = (): JSX.Element => (
    <div className='form-login _center'>
        <h1>Form Login</h1>
        <Link to='/' replace={true} >
            <Button type='primary' onClick={(e) => HandleClick(e)}>Login</Button>
        </Link>
    </div>
);

export default FormLogin;