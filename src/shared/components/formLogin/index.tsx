import { Link } from "react-router-dom";
import { Button } from "antd";

import './formLogin.css'
import { useAppDispatch } from "../../../features/hookRedux";
import { login } from "../../../features/userSlice";
import type { PayloadUser } from "../../../features/redux";

const FormLogin = (): JSX.Element => {
    const dispatch = useAppDispatch();
    
    const logInPayload: PayloadUser = {
        userId: 'Admin'
    };

    const HandleClick = () => dispatch( login( logInPayload ));

    return(
        <div className='form-login _center'>
            <h1>Form Login</h1>
            <Link to='/' replace={true} >
                <Button type='primary' onClick={() => HandleClick()}>Login</Button>
            </Link>
        </div>
    );
};

export default FormLogin;