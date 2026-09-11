import { Button, Menu} from "antd";
import type {MenuProps}  from "antd";
import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import {  MenuOutlined, ProductOutlined, ProfileFilled } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];
export const AppSider: React.FC =() => {
    const [collapsed,setCollapsed] = useState(false);

    const items: MenuItem[] = [
      { key: '1', icon: <ProductOutlined />, label: "Dashboard"},
      { key: '2', icon: <ProfileFilled />, 
        label: "รายการ X-ray",
        children: [
          { key: '2-1', label: (<div className="text-xs">รายการ X-ray ที่นำเข้า</div>) },
          { key: '2-2', label: (<div className="text-xs">รายการ รอ X-ray </div>) },
        ],
      },
    ];

    return(
        <Sider
          trigger={null} collapsible  collapsed={collapsed} width={200} className="p-2"
          style={{ backgroundColor: '#F1F5F9'}}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="flex items-center gap-3 px-3 py-4 mb-2">
            <Button 
                type="text" onClick={() => setCollapsed(!collapsed)} 
                icon={<MenuOutlined style={{ fontSize: '16px'}} className="text-blue-900!"/>}
            />
            {!collapsed && (
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-slate-800 tracking-tight">
                  1LIFE <span className="text-slate-500 font-normal text-base">System</span>
                </span>
              </div>
            )}
          </div>
          
          <Menu
            mode="inline"
            defaultOpenKeys={['2']}
            defaultSelectedKeys={['2-1']}
            items={items}
            className="bg-transparent! border-none! flex flex-col gap-2

            [&>li.ant-menu-item]:bg-white [&>li.ant-menu-item]:rounded-2xl [&>li.ant-menu-item]:py-6
            [&>.ant-menu-submenu]:bg-white [&>.ant-menu-submenu]:rounded-2xl [&>.ant-menu-submenu]:overflow-hidden

            [&_.ant-menu-submenu-title]:text-gray-600! 
            [&_.ant-menu-submenu-title_.ant-menu-item-icon]:text-gray-600!

            [&_.ant-menu-submenu-selected>.ant-menu-submenu-title]:text-blue-900! 
            [&_.ant-menu-submenu-selected>.ant-menu-submenu-title]:font-semibold
            [&_.ant-menu-submenu-selected>.ant-menu-submenu-title_.ant-menu-item-icon]:text-blue-900!

            [&_.ant-menu-sub]:bg-white! [&_.ant-menu-sub]:px-3 [&_.ant-menu-sub]:pb-3
            [&_.ant-menu-item-selected]:bg-blue-900! [&_.ant-menu-item-selected]:text-white!
            [&_.ant-menu-item]:rounded-xl [&_.ant-menu-item]:my-1"
          />
        </Sider>
    );
};
export default AppSider; 