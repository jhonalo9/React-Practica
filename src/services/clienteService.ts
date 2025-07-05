
import { alovaInstance } from './alovaInstance';
import { Cliente } from '../types/cliente';

export const getClientes = () =>
  alovaInstance.Get<Cliente[]>('/clientes', {
    transform: async (response) => {
      const res = response as Response;
      return await res.json();
    },
  });




export const createCliente = (cliente: Omit<Cliente, 'id'>) =>
  alovaInstance.Post('/clientes', cliente);

export const updateCliente = (cliente: Cliente) =>
  alovaInstance.Put(`/clientes/${cliente.id}`, cliente);

export const deleteCliente = (id: number) =>
  alovaInstance.Delete(`/clientes/${id}`);