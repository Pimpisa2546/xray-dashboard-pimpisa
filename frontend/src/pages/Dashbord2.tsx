import Layout, { Content } from "antd/es/layout/layout";
import AppSider from "../components/AppSider";
import { Button, Dropdown, Flex, MenuProps, Tabs, TabsProps, Tag } from "antd";
import { TableXrayBrain } from "../components/TableBrain";
import { SearchSelect } from "../components/SearchSelect";
import { FilterCard } from "../components/CardFilter";
import { CloudUploadOutlined, DownOutlined } from "@ant-design/icons";
import HeaderCard from "../components/HeaderUser";
import { useState } from "react";

export const Dashboard2: React.FC = () => {
  const [activeTabKey, setActiveTabKey] = useState('1');
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: (
        <span className={`flex items-center gap-2  ${activeTabKey === '1' ? 'text-blue-900! font-medium' : ''}`}>
          รายการ X-ray สมอง
          <Tag className={`border-0 transition-colors rounded-full! ${activeTabKey === '1' ? 'bg-blue-100! text-blue-800!' : 'bg-gray-100!'}`}>
            85
          </Tag>
        </span>
      ),
    },
    {
      key: '2',
      label: (
        <span className={`flex items-center gap-2  ${activeTabKey === '2' ? 'text-blue-900! font-medium' : ''}`}>
          รายการ X-ray ทรวงอก
          <Tag className={`border-0 transition-colors rounded-full! ${activeTabKey === '2' ? 'bg-blue-100! text-blue-800!' : 'bg-gray-100!'}`}>
            120
          </Tag>
        </span>
      ),
    },
    {
      key: '3',
      label: (
        <span className={`flex items-center gap-2  ${activeTabKey === '3' ? 'text-blue-900! font-medium' : ''}`}>
          รายการ X-ray ดวงตา
          <Tag className={`border-0 transition-colors rounded-full! ${activeTabKey === '3' ? 'bg-blue-100! text-blue-800!' : 'bg-gray-100!'}`}>
            25
          </Tag>
        </span>
      ),
    },
  ];

  const itemsMenu: MenuProps['items'] = [
    { key: '1', label: 'อัปโหลดฟิล์ม X-ray สมอง' },
    { key: '2', label: 'อัปโหลดฟิล์ม X-ray ทรวงอก' },
    { key: '3', label: 'อัปโหลดฟิล์ม X-ray ดวงตา' },
  ];

  return (
    <Layout className="min-h-0">
      <AppSider />
      <Layout className="min-w-0">
        <Content style={{ backgroundColor: "#f4f7fe" }} className="flex-col h-fit px-6 py-2 min-w-0 w-full">
          <div className="mb-3">
            <HeaderCard />
          </div>
          <div className="bg-[#fafbff] rounded-xl p-4 flex-1 min-w-0 w-full shadow-xs">
          <Flex gap="middle" justify="space-between" align="center" style={{ marginBottom: '10px', width: '100%' }} wrap>
              <span className="text-lg font-semibold text-blue-900">รายการ X-ray ที่นำเข้า</span>
              <Dropdown menu={{ items: itemsMenu }} placement="bottomLeft" trigger={['click']}>
                <Button style={{ borderRadius: '9999px', color: '#ffffff', backgroundColor: '#1c398e' }} icon={<CloudUploadOutlined style={{ fontSize: '18px' }} />}>
                  อัปโหลดฟิล์ม X-ray <DownOutlined />
                </Button>
              </Dropdown>
            </Flex>
            <Tabs activeKey={activeTabKey} onChange={(key) => setActiveTabKey(key)} items={items} 
              indicator={{ size: (origin) => origin - 8, align: 'center' }} className="[&_.ant-tabs-ink-bar]:bg-blue-900!" />
            <div className="mb-4">
              <FilterCard />
            </div>
            <SearchSelect />
            <TableXrayBrain />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard2;