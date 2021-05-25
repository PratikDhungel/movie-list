import axiosClient from './axios-client';

export const handleGetMethod = async (endPoint: string, apiConfig: any) => {
  const apiResponse = await axiosClient.get(endPoint, apiConfig);
  return apiResponse;
};

export const handlePostMethod = async (endPoint: string, apiConfig: any, requestBody: any) => {
  const apiResponse = await axiosClient.post(endPoint, requestBody, apiConfig);
  return apiResponse;
};
