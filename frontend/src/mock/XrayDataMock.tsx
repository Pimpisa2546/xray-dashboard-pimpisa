export interface XrayItem {
  id: string;
  patientName: string;
  hn: string;
  type: string;
  status: 'รอยืนยันผล' | 'ยืนยันผลแล้ว';
  result: string;
  date: string;
}

const defaultData = {
  id: 'A123456',
  patientName: 'THANYANATTHA THANYANATTHA',
  hn: 'H/N',
  result: 'ไม่พบโรค',
  date: '04/03/2567 10.00 น.',
};

const initialTenItems: XrayItem[] = [
  { ...defaultData, type: 'X-ray,2D', status: 'รอยืนยันผล' },
  { ...defaultData, type: 'MRI,3D', status: 'ยืนยันผลแล้ว' },
  { ...defaultData, type: 'CT Scan,2D', status: 'ยืนยันผลแล้ว' },
  { ...defaultData, type: 'CT Scan,3D', status: 'รอยืนยันผล' },
  { ...defaultData, type: 'MRI, 3D', status: 'รอยืนยันผล' },
  { ...defaultData, type: 'X-ray,2D', status: 'ยืนยันผลแล้ว' },
  { ...defaultData, type: 'CT Scan,2D', status: 'ยืนยันผลแล้ว' },
  { ...defaultData, type: 'X-ray, 2D', status: 'รอยืนยันผล' },
  { ...defaultData, type: 'X-ray, 2D', status: 'รอยืนยันผล' },
  { ...defaultData, type: 'X-ray, 2D', status: 'รอยืนยันผล' },
];

const generatedItems: XrayItem[] = Array.from({ length: 75 }, (_, index) => {
  const itemNumber = index + 11;
  const types = ['X-ray, 2D', 'MRI, 3D', 'CT Scan, 2D', 'CT Scan, 3D'];
  const statuses: ('รอยืนยันผล' | 'ยืนยันผลแล้ว')[] = ['รอยืนยันผล', 'ยืนยันผลแล้ว'];
  const results = ['ไม่พบโรค', 'พบโรค'];

  return {
    ...defaultData,
    id: `A123${itemNumber.toString().padStart(3, '0')}`, 
    type: types[index % types.length],                   
    status: statuses[index % statuses.length],            
    result: results[index % results.length],              
  };
});


export const mockXrayData: XrayItem[] = [...initialTenItems, ...generatedItems];