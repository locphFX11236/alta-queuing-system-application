import { SearchL2 } from "../../shared/components/filter/search";
import { AccountLogTable } from "../../shared/components/table";

const UserLogList = (): JSX.Element => (
    <div className="user-log">
        <div className="input input-1">Input</div>
        <div className="input input-search">
            <label>Từ khóa</label>
            <SearchL2 />
        </div>
        <AccountLogTable />
    </div>
);

export default UserLogList;