import React, { useState } from 'react';
import { useRequest, useWatcher } from 'alova/client';
import {
  getClientes,
  createCliente,
  updateCliente,
  deleteCliente,
} from '../services/clienteService';
import { Cliente } from '../types/cliente';

export default function Clientes() {
  const {
    data: clientes = [],
    loading,
    error,
    send: refetchClientes,
  } = useRequest(getClientes(), {
    initialData: [],
  });

  const [nuevo, setNuevo] = useState<Omit<Cliente, 'id'>>({ nombre: '', correo: '' });
  const [editando, setEditando] = useState<Cliente | null>(null);

  const handleCrear = async () => {
    await createCliente(nuevo).send();
    setNuevo({ nombre: '', correo: '' });
    refetchClientes(); // actualiza la tabla
  };

  const handleEditar = async () => {
    if (editando) {
      await updateCliente(editando).send();
      setEditando(null);
      refetchClientes();
    }
  };

  const handleEliminar = async (id: number) => {
    await deleteCliente(id).send();
    refetchClientes();
  };

  if (loading) return <p>Cargando clientes...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2> Lista de Clientes</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th><th>Nombre</th><th>Correo</th><th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.nombre}</td>
              <td>{c.correo}</td>
              <td>
                <button onClick={() => setEditando(c)}>Editar</button>
                <button onClick={() => handleEliminar(c.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>{editando ? 'Editar Cliente' : ' Nuevo Cliente'}</h3>
      <input
        placeholder="Nombre"
        value={editando ? editando.nombre : nuevo.nombre}
        onChange={(e) =>
          editando
            ? setEditando({ ...editando, nombre: e.target.value })
            : setNuevo({ ...nuevo, nombre: e.target.value })
        }
      />
      <input
        placeholder="Correo"
        value={editando ? editando.correo : nuevo.correo}
        onChange={(e) =>
          editando
            ? setEditando({ ...editando, correo: e.target.value })
            : setNuevo({ ...nuevo, correo: e.target.value })
        }
      />
      <button onClick={editando ? handleEditar : handleCrear}>
        {editando ? 'Guardar Cambios' : 'Crear Cliente'}
      </button>
    </div>
  );
}
