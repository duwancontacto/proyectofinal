import React, {useEffect, useState} from "react";
export default function Sidebar({setStep}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let user = localStorage.getItem("user");

    if (!user) setStep(1);

    setUser(JSON.parse(user));
  }, []);

  const handleClickLogout = () => {
    localStorage.removeItem("user");
    setStep(1);
  };

  return (
    <div className="sidebar">
      <div className="">
        <h3 className="tituloBarraLateral">PANEL</h3>
        <p className="ButtonSidebar" onClick={() => setStep(3)}>
          Sintomas
        </p>
        <p className="ButtonSidebar" onClick={() => setStep(4)}>
          Noticias
        </p>

        {user?.role === "administrador" && (
          <>
            <h3 className="tituloBarraLateral">ADMINISTRADOR</h3>
            <p className="ButtonSidebar" onClick={() => setStep(5)}>
              Crear Noticias
            </p>
            <p className="ButtonSidebar" onClick={() => setStep(6)}>
              Usuarios
            </p>
            <p className="ButtonSidebar" onClick={() => setStep(7)}>
              Reportes
            </p>
          </>
        )}

        <p onClick={handleClickLogout} className="cerrarSession">
          CERRAR SESION
        </p>
      </div>
    </div>
  );
}
