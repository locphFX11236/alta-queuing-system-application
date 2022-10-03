import PublicRouter from './public';
import PrivateRouter from './private';
import { CheckLogInType } from './type';

const MainRouter = ({IsLogin}: CheckLogInType): JSX.Element => (
    IsLogin ? <PrivateRouter /> : <PublicRouter/>
);

export default MainRouter;