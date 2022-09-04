import { Link } from "react-router-dom";
import { Button } from "antd";

import './formLogin.css'
import { useAppDispatch } from "../../../core/features/hookRedux";
import { login } from "../../../core/features/userSlice";
import type { PayloadUser } from "../../../core/features/redux";

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