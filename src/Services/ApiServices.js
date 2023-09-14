import axios from 'axios';

const apiGlobal = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const getAllBlogs = async () => {
  try {
    const response = await apiGlobal.get('/admin/websites');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
