import axios, {AxiosRequestConfig} from 'axios';
import {baseUrl} from './endpoints';

export const AxiosInstance = axios.create({
  baseURL: baseUrl,
  "Content-Type": 'multipart/form-data',
});

// GET METHOD
export const GET = async (url: string,baseUrl: string,config: AxiosRequestConfig,) => {
  try {
    
    const response = await AxiosInstance.get(url, {...config, timeout: 120000});
    return response;
  } catch (error) {
    console.log('GET request error:', error);
    throw error;
  }
};
// POST METHOD

export const POST = async (url: string, body: any) => {
  try {
    console.log('🚀 ~ GET ~ url:', url);
    const response = await AxiosInstance.post(url, body, {timeout: 120000});
    return response;
  } catch (error) {
    console.log('POST request error:', error);
    throw error;
  }
};
