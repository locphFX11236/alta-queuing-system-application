import { Affix } from 'antd';
import React from 'react';

const App: React.FC = () => {

    return (
        <Affix
            offsetTop={90}
            onChange={affixed => console.log(affixed)}
            style={{ background: 'yellow' }}
            // className='Affix'
        >
            <div style={{ background: 'red', width: 80, height: 100 }}>A</div>
        </Affix>
    );
};

export default App;