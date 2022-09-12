import Icon from '@ant-design/icons';
import { Add, Back, Download, Update } from "../../assets/icon";
import { AffixType } from './affixType';

const IconsItem = [
    <Icon component={Add} />,
    <Icon component={Update} />,
    <Icon component={Back} />,
    <Icon component={Download} />
];

const AffixItem = ({type, text}: AffixType): JSX.Element => (
    <div className="affix-item">
        { IconsItem[type] }
        <p>{text}</p>
    </div>
);

export default AffixItem;