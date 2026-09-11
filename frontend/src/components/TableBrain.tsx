import React, { useMemo } from "react";
import { Badge, BadgeProps, Button, ConfigProvider, PaginationProps, Table, Tag } from "antd";
import type { ColumnsType } from 'antd/es/table';
import { CheckCircleFilled, ClockCircleFilled, EyeFilled, InfoCircleOutlined } from "@ant-design/icons";
import { mockXrayData, XrayItem } from "../mock/XrayDataMock";

const customItemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
  if (type === 'prev') {
    return (
      <span className="flex items-center justify-center w-9 h-6 rounded-full! bg-white text-slate-300 font-medium text-xs">
        Prev
      </span>
    );
  }
  if (type === 'next') {
    return (
      <span className="flex items-center justify-center w-9 h-6 rounded-full! bg-white text-slate-700 font-medium text-xs">
        Next
      </span>
    );
  }
  return originalElement;
};

export const TableXrayBrain: React.FC = () => {
  const columns: ColumnsType<XrayItem> = useMemo(() => [
    {
      title: (
        <div className="font-medium flex justify-between items-center gap-2">
          <span>เลขที่รายการ</span>
          <InfoCircleOutlined />
        </div>
      ),
      dataIndex: 'id',
      key: 'id',
      width: 120,
      fixed: 'left',
    },
    {
      title: <div className="font-medium"><span>ชื่อผู้ป่วย</span></div>,
      dataIndex: 'patientName',
      key: 'patientName',
      width: 180,
      ellipsis: true,
    },
    {
      title: <div className="font-normal"><span>HN</span></div>,
      dataIndex: 'hn',
      key: 'hn',
      width: 100,
    },
    {
      title: <div className="font-normal"><span>ประเภท X-ray</span></div>,
      dataIndex: 'type',
      key: 'type',
      width: 140,
    },
    {
      title: <div className="font-normal"><span>สถานะรายการ</span></div>,
      dataIndex: 'status',
      key: 'status',
      width: 150,
      render: (status: string) => {
        let color = '#45C37A';
        let icon = <CheckCircleFilled />;

        if (status === 'รอยืนยันผล') {
          color = '#F1AE5E';
          icon = <ClockCircleFilled />;
        }

        return (
          <Tag icon={icon} color={color} className="rounded-full!">
            {status}
          </Tag>
        );
      }
    },
    {
      title: (
        <div className="font-medium flex justify-between items-center gap-2">
          <span>ผลลัพธ์</span>
          <InfoCircleOutlined />
        </div>
      ),
      dataIndex: 'result',
      key: 'result',
      width: 130,
      render: (result: string) => {
        let status: BadgeProps['status'] = 'default';
        let textcolor = 'text-gray-500';
        if (result === 'ไม่พบโรค') {
          status = 'success';
          textcolor = 'text-green-500';
        } else if (result === 'พบโรค') {
          status = 'error';
          textcolor = 'text-red-500';
        }
        return (
          <div className="flex items-center gap-2">
            <Badge status={status} />
            <span className={`font-medium ${textcolor}`}>
              {result}
            </span>
          </div>
        );
      },
    },
    {
      title: <div className="font-normal"><span>วันที่ X-ray</span></div>,
      dataIndex: 'date',
      key: 'date',
      width: 150,
    },
    {
      title: <div className="font-normal"><span>จัดการ</span></div>,
      key: 'actions',
      fixed: 'right',
      width: 120,
      render: () => (
        <div className="flex items-center gap-1.5 cursor-pointer">
          <Button icon={<EyeFilled style={{ color: '#193cb8' }} />} size="small" />
          <span className="underline underline-offset-2 text-blue-800">รายละเอียด</span>
        </div>
      ),   
    },
  ], []);

  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            itemActiveBg: '#1e3a8a',
            colorPrimary: '#ffffff',
            colorPrimaryHover: '#1e40af', 
            itemSize: 32,
            borderRadius: 9999,
          },
          Select: {
            borderRadius: 9999,
            colorBorder: '#d1d5db',
          }
        },
      }}
    >
      <Table
        size="small"
        dataSource={mockXrayData}
        columns={columns}
        scroll={{ y: 'calc(100vh - 460px)' }}
        pagination={{
          itemRender: customItemRender,
          rootClassName: `
            !mt-4 !flex !w-full !items-center !px-4

            [&_.ant-pagination-prev]:!ml-auto
            
            [&_.ant-pagination-total-text]:-order-2 
            [&_.ant-pagination-total-text]:!text-xs 
            [&_.ant-pagination-total-text]:!text-slate-400
            [&_.ant-pagination-total-text]:!inline-flex 
            [&_.ant-pagination-total-text]:!items-center
            [&_.ant-pagination-total-text]:!mr-3

            [&_.ant-pagination-options]:-order-1 
            [&_.ant-pagination-options]:!ml-0

            [&_.ant-select]:!rounded-full
            [&_.ant-select-selector]:!rounded-full 

            [&_.ant-pagination-item]:!border-none 
            [&_.ant-pagination-item]:!bg-transparent
            [&_.ant-pagination-item_a]:!text-slate-600 
            [&_.ant-pagination-item_a]:!font-medium
            
            [&_.ant-pagination-item-active]:!bg-blue-900 
            [&_.ant-pagination-item-active_a]:!text-white
            
            [&_.ant-pagination-prev]:!border-none
            [&_.ant-pagination-next]:!border-none
          `,
          pageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ['10', '20', '50', '100'],
          showTotal: () => 'แสดงทั้งหมด',
        }}
      />
    </ConfigProvider>
  );
};

export default TableXrayBrain;