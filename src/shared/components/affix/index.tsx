import './affix.css';
import AffixItem from './item';

export const AddEquip: React.FC = () => <AffixItem type={0} text='Thêm thiết bị'/>;
export const UpdEquip: React.FC = () => <AffixItem type={1} text='Cập nhật thiết bị'/>;
export const AddService: React.FC = () => <AffixItem type={0} text='Thêm dịch vụ'/>;
export const UpdService: React.FC = () => <AffixItem type={1} text='Cập nhật danh sách'/>;
export const BackService: React.FC = () => <AffixItem type={2} text='Quay lại'/>;
export const AddNum: React.FC = () => <AffixItem type={0} text='Cấp số mới'/>;
export const BackNum: React.FC = () => <AffixItem type={2} text='Quay lại'/>;
export const DownReport: React.FC = () => <AffixItem type={3} text='Tải về'/>;
export const AddRole: React.FC = () => <AffixItem type={0} text='Thêm vai trò'/>;
export const AddAcc: React.FC = () => <AffixItem type={0} text='Thêm tài khoản'/>;