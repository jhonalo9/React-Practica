import React from 'react';
import { useRequest } from 'alova/client';
import { getArticulos } from '../services/articuloService';
import { Articulo } from '../types/articuloService';


export default function TablaArticulos() {
  const {
    data: articulos = [],
    loading,
    error,
  } = useRequest(getArticulos(), {
    initialData: [],
  });

  if (loading) return <p>Cargando artículos...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <table>
      <thead>
        <tr><th>ID</th><th>Nombre</th><th>Precio</th></tr>
      </thead>
      <tbody>
        {articulos.map((a: Articulo) => (
          <tr key={a.id}>
            <td>{a.id}</td>
            <td>{a.nombre}</td>
            <td>{a.precio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
