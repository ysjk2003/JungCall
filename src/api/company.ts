import { CompanyList, EquipmentList } from "../types";
import axiosInstance from "./axios";

const getCompanys = async (): Promise<CompanyList> => {
  const { data } = await axiosInstance.get(`/companys`);

  return data;
};

const getEquipments = async (companyId: string): Promise<EquipmentList> => {
  const { data } = await axiosInstance.get(`/equipment?companyId=${companyId}`);

  return data;
};

export { getCompanys, getEquipments };
