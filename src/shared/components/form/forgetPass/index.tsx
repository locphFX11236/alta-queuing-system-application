import './forget.css';
import EmailConfirm from './emailConfirm';
import { useState } from 'react';
import PassConfirm from './passConfirm';

const FormForget = (): JSX.Element => {
    const [confirm, setConfirm] = useState('email');

    if (confirm === 'email') return <EmailConfirm onOk={setConfirm}/>;
    else return <PassConfirm />;
};

export default FormForget;