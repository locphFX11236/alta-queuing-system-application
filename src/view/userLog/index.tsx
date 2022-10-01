import { SearchL2 } from "../../shared/components/filter/search";
import { RangeUserLog } from "../../shared/components/filter/time";
import { AccountLogTable } from "../../shared/components/table";

const UserLogList = (): JSX.Element => (
    <div className="user-log">
        <div className="input input-1">
            <label>Chọn thời gian</label>
            <RangeUserLog />
        </div>
        <div className="input input-search">
            <label>Từ khóa</label>
            <SearchL2 />
        </div>
        <AccountLogTable />
    </div>
);

export default UserLogList;