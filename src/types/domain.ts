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
  pricePerHour?: string;
  image?: string;
};

type EquipmentList = Equipment[];

type Profile = {
  email: string;
};

export type { Company, CompanyList, Equipment, EquipmentList, Profile };
