import { useMutation } from "@tanstack/react-query";

import type { UseMutationCustomOptions } from "../../types/common";
import { getCompanys, getEquipments } from "../../api/company";

function useGetCompany(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: getCompanys,
    ...mutationOptions,
  });
}

function useGetEquipment(
  companyId: string,
  mutationOptions?: UseMutationCustomOptions
) {
  return useMutation({
    mutationFn: () => getEquipments(companyId),
    ...mutationOptions,
  });
}

export { useGetEquipment, useGetCompany };
