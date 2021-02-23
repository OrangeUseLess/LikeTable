import DragBox from "../dragBox";

export class SearchBoxStore {
    // input框内容
    public inputChangeValue: string = '';

    // 切换显示与隐藏
    /**
     * 
     * @param key [string类型，可能的值为：'show','hide']
     */
    public hide(key: string) {
        if (key === 'show') {
            if (document.getElementById('xy_d_excelSearchBox_hide')) {
                document.getElementById('xy_d_excelSearchBox_hide')!!.id = 'xy_d_excelSearchBox_show';
                DragBox(document.querySelector('#excelSearchBoxHeader'), document.querySelector('#xy_d_excelSearchBox_show'));
            }
        } else {
            document.getElementById('xy_d_excelSearchBox_show')!!.id = 'xy_d_excelSearchBox_hide';
        }

    }
}

export default SearchBoxStore;