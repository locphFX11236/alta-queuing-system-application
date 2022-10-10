import React from 'react';

import RangePickerCustom from './rangePickerCustom';
import { FuncNumCou, FuncReport, FuncSerInfo, FuncSerList, FuncUserLog } from './functions';

export const RangeSerList: React.FC = () => <RangePickerCustom functions={FuncSerList} />;
export const RangeSerInfo: React.FC = () => <RangePickerCustom functions={FuncSerInfo} />;
export const RangeNumCou: React.FC = () => <RangePickerCustom functions={FuncNumCou} />;
export const RangeReport: React.FC = () => <RangePickerCustom functions={FuncReport} />;
export const RangeUserLog: React.FC = () => <RangePickerCustom functions={FuncUserLog} />;