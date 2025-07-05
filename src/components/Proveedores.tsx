import React, { useEffect, useState } from 'react'
import { getProveedores } from '../services/proveedorService';

interface Proveedor {
  id: number;
  nombre: string;
  ruc: string;
}

export const Proveedores = () => {

  const [proveedores, setProveedores] = useState<Proveedor[]>([]);

  useEffect(() => {
    getProveedores().then(data => setProveedores(data));
  }, []);
  return (
     <table>
      <thead>
        <tr>
          <th>ID</th><th>Nombre</th><th>RUC</th>
        </tr>
      </thead>
      <tbody>
        {proveedores.map(p => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.nombre}</td>
            <td>{p.ruc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
