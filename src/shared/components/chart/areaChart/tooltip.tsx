import { CaretDownOutlined } from '@ant-design/icons';

const TooltipComponent = ({point}: any) => (
    <div className='tooltip-area-chart'>
        <div className='tooltip-box'>
            <div className='content-tooltip'>{ point.data.y }</div>
        </div>
        <CaretDownOutlined className='arrow-tooltip' />
        <div className='point-chart' />
        <div className='crosshair-bot' style={{ height: 259 - point.y }}/>
    </div>
);

export default TooltipComponent;