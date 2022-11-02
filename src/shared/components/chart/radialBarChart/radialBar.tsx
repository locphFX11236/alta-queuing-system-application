import { ResponsiveRadialBar } from '@nivo/radial-bar';

import './radialBar.css';
import { statisticJSON } from '../../../../core/data/dummy';

const RadialBar = ({choice}: any): JSX.Element => {
    const dataObj = JSON.parse(statisticJSON)[choice];

    return (
        <div className='radial-bar' >
            <ResponsiveRadialBar
                data={dataObj.data.reverse()}
                maxValue={dataObj.amount}
                endAngle={360}
                innerRadius={0.33}
                padding={0.5}
                colors={dataObj.color.reverse()}
                cornerRadius={10}
                enableTracks={true}
                tracksColor={'#EAEAEC'}
                enableRadialGrid={false}
                enableCircularGrid={false}
                radialAxisStart={null}
                circularAxisOuter={null}
                isInteractive={false}
            />
        </div>
    );
};

export default RadialBar;