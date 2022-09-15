import { Button, notification } from 'antd';
import React from 'react';

const openNotification = () => {
    notification.open({
        placement: 'top',
        duration: 0,
        message: 'Notification',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
};

const App: React.FC = () => (
    <Button onClick={openNotification}>
        top
    </Button>
);

export default App;