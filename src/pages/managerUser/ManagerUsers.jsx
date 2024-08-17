import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../managerUser/ManagerUser.scss';

const ManagerUsers = () => {
  const [users, setUsers] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {

    const fetchUsers = async () => {
      try {
        const response = await fetch('https://ecommercech53115-production.up.railway.app/api/users/admin/manage-users', {
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error('Error al obtener los usuarios');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteInactiveUsers = async () => {
    if (window.confirm('¿Estás seguro de que quieres borrar los usuarios inactivos?')) {
      try {
        const response = await fetch('https://ecommercech53115-production.up.railway.app/api/users', {
          method: 'DELETE',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        });
        const data = await response.json();
        if (data.message) {
          setSuccessMessage(data.message);
          setUsers(users.filter(user => !user.inactive)); // Remove inactive users from the state
        } else {
          setErrorMessage('Error al eliminar usuarios inactivos');
        }
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
  };

  const handleChangeUserRole = async (userId) => {
    try {
      const response = await fetch(`https://ecommercech53115-production.up.railway.app/api/users/premium/${userId}`, {
        method: 'POST',
        credentials: 'include',
      });
      if (response.ok) {
        const updatedUser = await response.json();
        setUsers(users.map(user => (user.id === userId ? updatedUser : user)));
        setSuccessMessage('Rol del usuario actualizado');
      } else {
        setErrorMessage('Error al cambiar el rol del usuario');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      try {
        const response = await fetch(`https://ecommercech53115-production.up.railway.app/api/users/delete/${userId}`, {
          method: 'POST',
          credentials: 'include',
        });
        if (response.ok) {
          setUsers(users.filter(user => user.id !== userId));
          setSuccessMessage('Usuario eliminado correctamente');
        } else {
          setErrorMessage('Error al eliminar el usuario');
        }
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:8080/api/users/logout', {
        method: 'POST',
        credentials: 'include',
      });
      navigate('/login');
    } catch (error) {
      setErrorMessage('Error al cerrar sesión', error);
    }
  };

  return (
    <div className='principal'>
      <h1 className='text-base font-serif-georgia font-semibold md:font-serif text-red-900 mb-4 mt-12'>Gestionar Usuarios</h1>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <form className='self-end'
      onSubmit={(e) => e.preventDefault()} style={{ marginBottom: '20px' }}>
        <button className='shadow-md text-2x1 mt-4 p-4 bg-gray-300  hover:bg-gray-200 font-serif-georgia rounded'
          type="button"
          onClick={handleDeleteInactiveUsers}
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
              <td>{user.last_connection || 'Nunca conectado'}</td>
              <td>
                <button className='shadow-md text-2x1 mt-4 p-3 bg-gray-300  hover:bg-gray-200 font-serif-georgia rounded'
                  type="button"
                  onClick={() => handleChangeUserRole(user.id)}
                >
                  Cambiar Rol
                </button>
                <button className='shadow-md text-2x1 mt-4 p-3 bg-gray-300  hover:bg-gray-200 font-serif-georgia rounded'
                  type="button"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Eliminar Usuario
                </button>
              </td>
              <td>
                {user.isAdminUpgrade && (
                  <p style={{ color: 'red' }}>Falta documentación</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Botón para cerrar sesión */}
      <form onSubmit={(e) => e.preventDefault()}>
        <button className='shadow-md text-2x1 mt-4 bg-gray-400  hover:bg-gray-300 font-serif-georgia rounded mb-12 p-4'
          type="button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </form>
    </div>
  );
};

export default ManagerUsers;
