import React from 'react';

import SelectCustom from './selectCustom';
import { FuncA1, FuncE1, FuncE2, FuncNc1, FuncNc2, FuncNc3, FuncS1, FuncSI1 } from './functions';
import { OptionItemsA1, OptionItemsE1E2S1, OptionItemsNc1, OptionItemsNc2, OptionItemsNc3, OptionItemsSI1 } from './optionItems';

export const SelectE1: React.FC = () => <SelectCustom optionItems={ OptionItemsE1E2S1 } functions={ FuncE1 } />;
export const SelectE2: React.FC = () => <SelectCustom optionItems={ OptionItemsE1E2S1 } functions={ FuncE2 } />;
export const SelectS1: React.FC = () => <SelectCustom optionItems={ OptionItemsE1E2S1 } functions={ FuncS1 } />;
export const SelectSI1: React.FC = () => <SelectCustom optionItems={ OptionItemsSI1 } functions={ FuncSI1 } />;
export const SelectNc1: React.FC = () => <SelectCustom optionItems={ OptionItemsNc1 } functions={ FuncNc1 } />;
export const SelectNc2: React.FC = () => <SelectCustom optionItems={ OptionItemsNc2 } functions={ FuncNc2 } />;
export const SelectNc3: React.FC = () => <SelectCustom optionItems={ OptionItemsNc3 } functions={ FuncNc3 } />;
export const SelectA1: React.FC = () => <SelectCustom optionItems={ OptionItemsA1 } functions={ FuncA1 } />;