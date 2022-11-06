import './style.css';
import EmailConfirm from './emailConfirm';
import PassConfirm from './passConfirm';
import { SelectUserState } from '../../../../core/featuresRedux/hookRedux';

const FormForget = (): JSX.Element => {
    const checkEmail = SelectUserState().checkEmail;

    if (checkEmail) return <PassConfirm />;
    else return <EmailConfirm />;
};

export default FormForget;