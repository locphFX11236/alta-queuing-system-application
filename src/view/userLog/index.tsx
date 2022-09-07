import { AccountLogTable } from "../../shared/components/table";

const UserLogList = (): JSX.Element => (
    <div className="user-log">
        <div className="input input-1">Input</div>
        <div className="input input-search">Search box</div>
        <AccountLogTable />
    </div>
);

export default UserLogList;