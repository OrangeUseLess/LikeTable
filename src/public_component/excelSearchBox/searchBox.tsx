import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React, { useEffect } from 'react';
import DragBox from '../dragBox';
import './searchBox.scss';

export const SearchBox = () => {

    useEffect(() => {
        DragBox(document.querySelector('#excelSearchBoxHeader'), document.querySelector('#xy_d_excelSearchBox'));
    }, [])

    return (
        <div id='xy_d_excelSearchBox'>
            <div id='excelSearchBoxHeader'></div>
            <div className='excelSearchBoxContent'>
                <Input
                    size={'small'}
                    prefix={<SearchOutlined />}
                    allowClear
                />
            </div>
        </div>
    )
}

export default SearchBox;