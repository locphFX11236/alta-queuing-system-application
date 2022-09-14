import './forget.css';
import EmailConfirm from './emailConfirm';
import { useState } from 'react';
import PassConfirm from './passConfirm';

const FormForget = (): JSX.Element => {
    const [isPassConfirm, setIsPassConfirm] = useState<boolean>(false);

    if (isPassConfirm) return <PassConfirm />;
    else return <EmailConfirm onOk={setIsPassConfirm}/>;
};

export default FormForget;