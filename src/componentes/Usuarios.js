import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import Modal from "./Modal";

import iconVerMas from "../images/IconVerMas.png";
import {getUsers} from "../services/Users";

export default function CrearNotcias({setStep}) {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUsers()
      .then((result) => setUsers(result.data))
      .catch((error) => console.log("notices", error));
  }, []);

  return (
    <div className="containerDasboard">
      <Sidebar setStep={setStep} />
      <div className="Sintomas">
        <h4 className="Content-Title">Lista de usuarios</h4>
        <div className="contenCrearNoticias">
          {users.map((element) => (
            <div
              onClick={() => {
                setShow(true);
                setUser(element);
              }}
              className="containerTitulo"
            >
              <label>
                {element.nombre} {element.apellido} - {element.correo}
              </label>
              <div className="containerImagen">
                <img src={iconVerMas} alt="iconEditar" className="iconEditar" />
              </div>
            </div>
          ))}
        </div>

        <Modal
          show={show ? true : false}
          setShow={setShow}
          title={`${user?.nombre} ${user?.apellido}`}
          disableSave
        >
          <div className="containerModal">
            <div className="data-user">
              <h5> Nombre y apellido: </h5>
              <span>
                {user?.nombre} {user?.apellido}
              </span>
            </div>
            <div className="data-user">
              <h5> Cedula: </h5> <span> {user?.cedula} </span>
            </div>
            <div className="data-user">
              <h5> Correo: </h5> <span> {user?.correo} </span>
            </div>
            <div className="data-user">
              <h5> Direccion: </h5> <span> {user?.direccion} </span>
            </div>
            <div className="data-user">
              <h5> Edad: </h5> <span> {user?.edad} </span>
            </div>
            <div className="data-user">
              <h5> Telefono: </h5> <span> {user?.telefono} </span>
            </div>
            <div className="data-user">
              <h5> Diagnosticado: </h5> <span> {user?.diagnosticado} </span>
            </div>

            <div className="data-user">
              <h5> Dolor de cabeza: </h5>
              <span> {user?.dolorCabeza === "1" ? "Si" : "No"} </span>
            </div>
            <div className="data-user">
              <h5> Dolores musculares: </h5>
              <span> {user?.doloresMusculares === "1" ? "Si" : "No"} </span>
            </div>
            <div className="data-user">
              <h5> Erupciones en la piel: </h5>
              <span> {user?.erupciones === "1" ? "Si" : "No"} </span>
            </div>
            <div className="data-user">
              <h5> Fiebre: </h5>
              <span> {user?.fiebre === "1" ? "Si" : "No"} </span>
            </div>
            <div className="data-user">
              <h5> Tos: </h5> <span> {user?.tos === "1" ? "Si" : "No"} </span>
            </div>
            <div className="data-user">
              <h5> Vomito: </h5>
              <span> {user?.vomito === "1" ? "Si" : "No"} </span>
            </div>
            <div className="data-user flex-column">
              <h5 className="col-12"> Sintomas adicionales: </h5>
              <span className="col-12 p-0 ml-0">
                {user?.sintomasAdicionales}
              </span>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
