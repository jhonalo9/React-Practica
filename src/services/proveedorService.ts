import axios from 'axios';

const API = 'http://localhost:3001/proveedores';

export const getProveedores = async () => {
  const res = await axios.get(API);
  return res.data;
};
