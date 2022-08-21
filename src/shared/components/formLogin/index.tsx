import { Link } from "react-router-dom";
import { Button } from "antd";

const FormLogin = (): JSX.Element => (
    <>
        <h1>Form Login</h1>
        <Link to='/' replace={true} >
            <Button type='primary'>Login</Button>
        </Link>
    </>
);

export default FormLogin;