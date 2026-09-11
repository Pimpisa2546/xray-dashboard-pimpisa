import { FilterOutlined, SearchOutlined } from "@ant-design/icons";
import {Button, Flex, Input, Select, Space} from "antd";
import React from "react";
import { Upload } from "lucide-react";

export const SearchSelect: React.FC = () => {
    return(
        <Flex justify="space-between" align="center" wrap style={{ marginBottom: '10px', width: '100%' }}>
            <Space size="middle" align="center" wrap>
                <Input 
                    placeholder="ค้นหา" 
                    suffix={<SearchOutlined style={{ color: '#9ca3af' }} />} 
                    variant="outlined"
                    allowClear
                    style={{ borderRadius: '9999px', width: '280px' }}
                />
                <span>ความเร่งด่วนของเคส : 
                    <Select
                    style={{ width: 120, borderRadius: '9999px',marginLeft: '5px' }}
                    defaultValue="All"
                    options={[
                      {value: 'All',label: 'ทั้งหมด',},  
                      {value: 'Emergency',label: 'เคสเร่งด่วน',},
                      {value: 'Normal',label: 'เคสปกติ',},
                    ]}
                ></Select></span>
                
                <span className="underline text-blue-900"><FilterOutlined  />ตัวกรองขั้นสูง</span>
            </Space>
            <Button type="primary" ghost icon={<Upload size={16} />} style={{ borderRadius: '9999px', color: '#1c398e',border: '1px solid #1c398e' }}>Export</Button>
        </Flex>
    );
};
export default SearchSelect;