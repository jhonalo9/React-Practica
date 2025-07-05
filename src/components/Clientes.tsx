
import React from 'react';
import { useRequest } from 'alova/client';
import { getClientes } from '../services/clienteService';
import { Cliente } from '../types/cliente';

export default function Clientes() {
  const {
    data: clientes = [],
    loading,
    error,
  } = useRequest(getClientes(), {
    initialData: [],
  });

  if (loading) return <p>Cargando clientes...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <table>
      <thead>
        <tr><th>ID</th><th>Nombre</th><th>Correo</th></tr>
      </thead>
      <tbody>
        {clientes.map((c: Cliente) => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.nombre}</td>
            <td>{c.correo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

