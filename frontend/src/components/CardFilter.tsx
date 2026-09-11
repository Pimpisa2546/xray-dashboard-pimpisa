import { Avatar, Card, Flex, Space } from "antd";
import { useState } from "react";
import brainIcon from '../assets/brain.png';
import pendeingIcon from '../assets/paperClock.png';
import successPaper from '../assets/paperSuccess.png';

const STATUS_CARDS = [
  {
    key: "All",
    label: "รายการทั้งหมด",
    count: 85,
    icon: brainIcon,
    activeBg: "#eff6ff",
    activeBorder: "border-blue-500",
    numColor: "text-cyan-700",
  },
  {
    key: "Pending",
    label: "รอยืนยันผล",
    count: 40,
    icon: pendeingIcon,
    activeBg: "#fffbeb",
    activeBorder: "border-yellow-500",
    numColor: "text-yellow-500",
  },
  {
    key: "Confirmed",
    label: "ยืนยันผลวินิจฉัย",
    count: 45,
    icon: successPaper,
    activeBg: "#ecfdf5",
    activeBorder: "border-emerald-500",
    numColor: "text-emerald-500",
  },
];

export const FilterCard: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>("All");

  return (
    <Flex gap="middle" justify="center" style={{ marginBottom: "16px", width: "100%" }} wrap>
      {STATUS_CARDS.map((item) => {
        const isSelected = selectedStatus === item.key;

        return (
          <Card key={item.key} size="small" variant="borderless"hoverable
            style={{
              width: 400,
              backgroundColor: isSelected ? item.activeBg : "#ffffff",
              transition: "all 0.2s ease-in-out",
            }}
            onClick={() => setSelectedStatus(item.key)}
            className={`cursor-pointer border-2 ${
              isSelected ? item.activeBorder : "border-transparent"
            }`}
          >
            <Flex gap="middle" align="center" justify="space-between">
              <Space align="center">
                <Avatar shape="circle" size="large" src={item.icon} />
                <span className="text-sm text-gray-700">{item.label}</span>
              </Space>
              <div className="flex items-baseline gap-1">
                <span className={`text-xl font-bold ${item.numColor}`}>
                  {item.count}
                </span>
                <span className="text-sm font-normal text-gray-500">เคส</span>
              </div>
            </Flex>
          </Card>
        );
      })}
    </Flex>
  );
};

export default FilterCard;