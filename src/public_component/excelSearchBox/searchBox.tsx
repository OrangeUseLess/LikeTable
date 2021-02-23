import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react';
import './searchBox.scss';
import SearchBoxStore from './searchBox.store';

declare const luckysheet: any;
export const SearchBox = () => {

    // 关闭弹框
    const closeSearchBox = () => {
        getInputValue('');
        new SearchBoxStore().hide('hide');
    }

    // input输入的内容
    const getInputValue = (e: string) => {
        let findCell = luckysheet.find(e);
        if(e !== ''){
            for(const item of findCell){
                luckysheet.setCellFormat(item.row,item.column,'bg','#f3d4a6');
            }
        }else{
            for(const item of findCell){
                luckysheet.setCellFormat(item.row,item.column,'bg','transparent');
                luckysheet.setCellFormat(item.row,item.column,'bd',{borderType:'border-all',style:'1',color:'#e5e5e5'});
            }
        }
    }


    return (
        <div id='xy_d_excelSearchBox_hide'>
            <div id='excelSearchBoxHeader'><CloseOutlined onClick={() => closeSearchBox()} /></div>
            <div className='excelSearchBoxContent'>
                <Input
                    allowClear
                    size={'small'}
                    prefix={<SearchOutlined />}
                    onChange={(e) => getInputValue(e.target.value)}
                />
            </div>
        </div>
    )
}

export default SearchBox;