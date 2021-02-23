import React, { useEffect } from 'react';
declare const luckysheet: any;

export const TableIndex = () => {

    useEffect(() => {
        returnTableFn();
    })

    function returnTableFn() {
        let options = {
            container: 'luckysheet', // luckysheet为容器id
            title: 'Luckysheet Demo', // 设定表格名称
            lang: 'zh', // 设定表格语言
            column: 26,  // 列号
            row: 200,   // 行号
            showtoolbar: false,  // 是否显示工具栏
            showinfobar: false,
            defaultRowHeight: 24, //自定义行高
            defaultColWidth: 70, //自定义列宽
            cellRightClickConfig: {
                copy: true, // 复制
                copyAs: false, // 复制为
                paste: true, // 粘贴
                insertRow: true, // 插入行
                insertColumn: true, // 插入列
                deleteRow: true, // 删除选中行
                deleteColumn: true, // 删除选中列
                deleteCell: false, // 删除单元格
                hideRow: false, // 隐藏选中行和显示选中行
                hideColumn: false, // 隐藏选中列和显示选中列
                rowHeight: false, // 行高
                columnWidth: false, // 列宽
                clear: false, // 清除内容
                matrix: false, // 矩阵操作选区
                sort: false, // 排序选区
                filter: false, // 筛选选区
                chart: false, // 图表生成
                image: false, // 插入图片
                link: false, // 插入链接
                data: false, // 数据验证
                cellFormat: false // 设置单元格格式
            },
            data: [
                {
                    name: "Sheet1",
                    color: "",
                    index: 1,
                    status: 0,
                    order: 1,
                    celldata: [
                        {
                            "r": 0,
                            "c": 0,
                            "v": {
                                ct: { fa: "General", t: "g" },
                                m: "1",
                                v: "1"
                            }
                        },{
                            "r": 0,
                            "c": 1,
                            "v": {
                                ct: { fa: "General", t: "g" },
                                m: "2",
                                v: "2"
                            }
                        },{
                            "r": 0,
                            "c": 2,
                            "v": {
                                ct: { fa: "General", t: "g" },
                                m: "3",
                                v: "3"
                            }
                        },{
                            "r": 1,
                            "c": 0,
                            "v": {
                                ct: { fa: "General", t: "g" },
                                m: "hahaha",
                                v: "hahaha"
                            }
                        },{
                            "r": 1,
                            "c": 1,
                            "v": {
                                ct: { fa: "General", t: "g" },
                                m: "xxxxx",
                                v: "xxxxx"
                            }
                        },{
                            "r": 1,
                            "c": 2,
                            "v": {
                                ct: { fa: "General", t: "g" },
                                m: "rtyr",
                                v: "rtyr"
                            }
                        },{
                            "r": 2,
                            "c": 0,
                            "v": {
                                ct: { fa: "General", t: "g" },
                                m: "qqqggg",
                                v: "qqqggg"
                            }
                        },{
                            "r": 2,
                            "c": 1,
                            "v": {
                                ct: { fa: "General", t: "g" },
                                m: "ggg",
                                v: "ggg"
                            }
                        },{
                            "r": 2,
                            "c": 2,
                            "v": {
                                ct: { fa: "General", t: "g" },
                                m: "1111",
                                v: "1111"
                            }
                        }
                    ],
                    config: {}
                }
            ]
        };
        luckysheet.create(options);
    }

    return (
        <div className={'xy_d_tableIndex'}>
            <div id={'luckysheet'}></div>
        </div>
    )
}

export default TableIndex;