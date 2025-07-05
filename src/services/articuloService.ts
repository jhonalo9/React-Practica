import { alovaInstance } from './alovaInstance';
import { Articulo } from '../types/articuloService';

export const getArticulos = () =>
  alovaInstance.Get<Articulo[]>('/articulos', {
    transform: async (response) => {
     
      const res = response as Response;
      return await res.json();
    },
  });