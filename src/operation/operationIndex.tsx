import { Dropdown, Menu } from 'antd';
import './operationIndex.scss';

export const OperationIndex = () => {

    const MenuList: Array<any> = [
        <Menu>
            <Menu.Item>生成</Menu.Item>
            <Menu.Item>发布</Menu.Item>
            <Menu.Item>保存</Menu.Item>
            <Menu.Item>查看</Menu.Item>
        </Menu>,
        <Menu>
            <Menu.Item>111</Menu.Item>
            <Menu.Item>222</Menu.Item>
            <Menu.Item>333</Menu.Item>
            <Menu.Item>444</Menu.Item>
        </Menu>,
        <Menu>
            <Menu.Item>哈哈</Menu.Item>
            <Menu.Item>xxxx</Menu.Item>
            <Menu.Item>hhh</Menu.Item>
            <Menu.Item>uuuu</Menu.Item>
        </Menu>
    ]

    return (
        <div className={'xy_d_opeartion'}>
            {
                MenuList.map((item: any, index: number) => {
                    return (
                        <Dropdown key={index} overlay={item} trigger={['click']}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                菜单{index + 1}
                            </a>
                        </Dropdown>
                    )
                })
            }
        </div>
    )
}
export default OperationIndex;