import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import IndexView from './view';

const App: React.FC = () => (
    <BrowserRouter>
        <IndexView />
    </BrowserRouter>
);

export default App;