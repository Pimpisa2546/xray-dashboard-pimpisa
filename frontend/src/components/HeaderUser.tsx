import { BellOutlined, DownOutlined, LogoutOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Select, Button, Dropdown, Flex, Space, Badge, MenuProps } from "antd";
import pin from '../assets/pin.png';
import boy from '../assets/boy.png';

export const HeaderCard: React.FC = () => {

    const itemsMenu: MenuProps['items'] = [
        {key: '1',label: 'Profile',icon: <UserOutlined />},
        {key: '2',label: 'Settings',icon: <SettingOutlined />,},
        {type: 'divider',},
        {key: '3',label: 'Logout',icon: <LogoutOutlined />,danger: true,},
      ];

    return(
        <div className="bg-[#fafbff] rounded-lg px-2 py-2 flex-1 min-w-0 w-full shadow-xs">
            <Flex gap="middle" justify="space-between" align="center">
                <Space size="middle">
                    <span>
                        <Avatar src={pin}/> :
                        <Select
                        style={{ width: 200, borderRadius: '9999px',marginLeft: '5px' }}
                        defaultValue="A"
                        options={[
                          {value: 'A',label: 'หน่วยบริการ A',},  
                          {value: 'B',label: 'หน่วยบริการ B',},
                          {value: 'C',label: 'หน่วยบริการ C',},
                        ]}
                    ></Select></span>
                </Space>
                <Space size="middle" align="center">
                    <Button 
                      type="text" 
                      shape="circle" 
                      icon={<Badge count={1} offset={[-1, 3]} size="small"><BellOutlined className="text-lg text-blue-900!" /></Badge>}
                      className="bg-white! hover:bg-gray-50! shadow-xs flex items-center justify-center w-10! h-10! "
                    />
                  <Dropdown menu={{ items: itemsMenu }} trigger={['click']}>
                    <div className="flex items-center gap-3 rounded-xl bg-white px-3 py-1.5 shadow-xs cursor-pointer hover:bg-gray-50 transition-all">
                        <Avatar size={40} src={boy} />
                        <div className="flex flex-col text-left">
                          <span className="text-sm font-bold text-blue-900 leading-tight">
                            นายพัธรนัส จิตภักดี
                          </span>
                          <span className="text-xs text-gray-400 font-normal">
                            เจ้าหน้าที่รังสี
                          </span>
                        </div>
                      <DownOutlined className="text-xs text-blue-900 ml-1" />
                    </div>
                  </Dropdown>
                </Space>
            </Flex>
        
          </div>
    );
};
export default HeaderCard;