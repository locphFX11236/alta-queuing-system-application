import { ResponsiveRadialBar } from '@nivo/radial-bar';
import { statisticJSON } from '../../../../data/dummy';

import HandleData from '../../../../data/handle';

const RadialBar = ({choice}: any): JSX.Element => {
    const dataObj = HandleData(statisticJSON)[choice];
    return (
        <div style={{width: 60, height: 60}} >
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