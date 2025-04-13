type Company = {
  id: string;
  name: string;
  phone: string;
  location: string;
  image?: string;
};

type CompanyList = Company[];

type Equipment = {
  id: string;
  name: string;
  description?: string;
  image?: string;
};

type EquipmentList = Equipment[];

export type { Company, CompanyList, Equipment, EquipmentList };
