import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './TicketView.scss';

const TicketView = () => {
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState(null);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const response = await fetch(`https://ecommercech53115-production.up.railway.app/api/tickets/${ticketId}`, {
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error('Failed to fetch ticket');
        }
        const data = await response.json();
        setTicket(data.ticket);
        setErrors(data.errors || []);  // Asegura que siempre sea un array
        setLoading(false);
      } catch (error) {
        setErrorMessage(error.message);
        setLoading(false);
      }
    };

    fetchTicket();
  }, [ticketId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMessage) {
    return <div>Error: {errorMessage}</div>;
  }

  if (!ticket) {
    return <div>No se encontró el ticket.</div>;  // Maneja el caso de que no haya ticket
  }

  return (
    <div className='principal-ticket'>
      <h1 className='text-base font-serif-georgia font-semibold md:font-serif text-red-900'>Compra Finalizada</h1>
      <div className="ticket-container">
        <div className="ticket-info">
          <p><strong>Código de Ticket:</strong> {ticket.code}</p>
          <p><strong>Fecha de Compra:</strong> {new Date(ticket.purchase_datetime).toLocaleString()}</p>
          <p><strong>Monto Total:</strong> ${ticket.amount}</p>
          <p><strong>Comprador:</strong> {ticket.purchaser}</p>
        </div>

        {errors.length > 0 && (
          <div className="error-list">
            <p><strong>Productos no comprados por falta de stock:</strong></p>
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Usamos Link en lugar de a para evitar recargar toda la página */}
        <Link to="/products" className="back-button shadow-md text-2x1 mb-4 ml-4 p-4 bg-gray-300  hover:bg-gray-200 font-serif-georgia rounded w-56 text-center">Volver a Productos</Link>
      </div>
    </div>
  );
};

export default TicketView;
