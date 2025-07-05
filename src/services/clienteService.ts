
import { alovaInstance } from './alovaInstance';
import { Cliente } from '../types/cliente';

export const getClientes = () =>
  alovaInstance.Get<Cliente[]>('/clientes', {
    transform: async (response) => {
      const res = response as Response;
      return await res.json();
    },
  });