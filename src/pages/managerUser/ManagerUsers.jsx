import React from 'react';

function ManagerUsers({ users, successMessage, errorMessage, onDeleteInactiveUsers, onChangeUserRole, onDeleteUser }) {
  return (
    <div>
      <h1>Gestionar Usuarios</h1>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      {}
      <form onSubmit={onDeleteInactiveUsers} style={{ marginBottom: '20px' }}>
        <button
          type="submit"
          style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}
        >
          Borrar Usuarios sin Actividad
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Última Conexión</th>
            <th>Acciones</th>
            <th>Advertencia</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name} {user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.last_connection ? user.last_connection : 'Nunca conectado'}</td>
              <td>
                <button type="button" onClick={() => onChangeUserRole(user.id)}>Cambiar Rol</button>
                <button type="button" onClick={() => onDeleteUser(user.id)}>Eliminar Usuario</button>
              </td>
              <td>
                {user.isAdminUpgrade && <p style={{ color: 'red' }}>Falta documentación</p>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManagerUsers;
