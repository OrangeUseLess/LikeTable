import React, { useState } from 'react';
import './toolbarIndex.scss';

import {
    ArrowDownOutlined,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    ArrowUpOutlined,
    FilterOutlined,
    SearchOutlined,
    SolutionOutlined
} from '@ant-design/icons';
import SearchBox from '../public_component/excelSearchBox/searchBox';

declare const luckysheet: any;
export const ToolbarIndex = () => {
    const [screenLuck,setScreenLuck] = useState<boolean>(true);

    // 撤销
    const excelUndo = () => {
        let res = luckysheet.undo();
        console.log(res)
    }

    // 重做
    const excelRedo = () => {
        luckysheet.redo();
    }

    // 查找功能
    const excelFind = () => {
        let findCell = luckysheet.find('1');
        console.log(findCell);
    }

    // 筛选
    const excelScreen = () => {
        if(screenLuck){
            luckysheet.setRangeFilter('open');
            setScreenLuck(false);
        }else{
            luckysheet.setRangeFilter('close');
            setScreenLuck(true);
        }
    }

    return (
        <div className={'xy_d_ToolbarIndex'}>
            <ul>
                <li>
                    <div onClick={() => excelUndo()}>
                        <span><ArrowLeftOutlined /></span>
                        <span>撤销</span>
                    </div>
                    <div onClick={() => excelRedo()}>
                        <span><ArrowRightOutlined /></span>
                        <span>重做</span>
                    </div>
                </li>
                <li>
                    <div>
                        <span><ArrowUpOutlined /></span>
                        <span>升序</span>
                    </div>
                    <div>
                        <span><ArrowDownOutlined /></span>
                        <span>降序</span>
                    </div>
                </li>
                <li>
                    <div onClick={() => excelFind()}>
                        <span><SearchOutlined /></span>
                        <span>查找</span>
                    </div>
                    <div onClick={() => excelScreen()}>
                        <span><FilterOutlined /></span>
                        {
                            screenLuck ? <span>筛选</span> : <span>清除筛选</span>
                        }
                    </div>
                </li>
                <li>
                    <div>
                        <span><SolutionOutlined /></span>
                        <span>表单</span>
                    </div>
                </li>
            </ul>
            <SearchBox />
        </div>
    )
}

export default ToolbarIndex;