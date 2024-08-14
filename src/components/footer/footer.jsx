import "../footer/styleFooter.scss";

const Footer = () => {
   
  return (
      <footer className="bg-rose-800 grid grid-cols-4 grid-rows-2">
        <div className="container m-auto py-6 flex justify-content-space-between items-start gap-5">
          <h1 className="subname self-center">Lo de Ciro</h1>
          <span>
            FOOD
            <br />
            Delivery
          </span>
        </div>
        <section className="redes__sociales container m-auto flex flex-row gap-5">
          <a href="https://www.facebook.com/anasofia.zeballos.3/">
            <img src="facebook.svg" alt="logo facebook"/>
          </a>

          <a href="">
            <img src="instagram.svg" alt="logo instagram" />
          </a>

          <a href="">
            <img src="email.svg" alt="logo email" />
          </a>
        </section>
        <section className="informacion__comercial flex flex-col gap-5">
          <div className=" flex flex-row gap-4">
            <img src="phone-call.svg" alt="logo phone" />
           <ul> 
            <li>+54 9 381 123-4567</li>
            <li>+54 9 381 123-4567</li>
           </ul>
          </div>
          <div className="flex flex-row gap-4">
            <img src="gps.svg" alt="logo gps" />
              <p>Encontranos en:
                <p>Idelfonso de las Muñecas 2554, San Miguel de Tucumán</p>
              </p>
          </div>
          <div className=" flex flex-row gap-4">
            <img src="logoGmail.svg" alt="logo gmail" />
            <p> Necesitas ayuda? Contáctanos
              <p>KyrosLencería@gmail.com</p>
            </p>
          </div>
          <div className="horarios__atencion flex flex-row gap-4">
            <img src="calendario.svg" alt="logo calendario" />
            <ul className="gap-4">
              <h2>Horarios de atención</h2>
              <li>Lunes  de 08:00 a.m  a  20:30 p.m</li>
              <li>Martes de 08:00 a.m  a  20:30 p.m</li>
              <li>Miercoles de 08:00 a.m  a  20:30 p.m</li>
              <li>Jueves de 08:00 a.m  a  20:30 p.m</li>
              <li>Viernes de 08:00 a.m  a  20:30 p.m</li>
            </ul>
            
            
          </div>

        </section>
      </footer>
    );
  };
  
  export default Footer;
  