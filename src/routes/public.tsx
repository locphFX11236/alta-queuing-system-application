import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Login, ErrorPage } from './item';

const PublicRouter: React.FC = () => (
    <Routes>
        <Route path='/login' element={ <Login state='login' /> } />
        <Route path='/forget' element={ <Login state='forget' /> } />

        {/* Error path v6 */}
        <Route path='*' element={ <ErrorPage /> } />
    </Routes>
);

export default PublicRouter;