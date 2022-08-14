import React, {useEffect, useState} from "react";
import Sidebar from "./Sidebar";
import Modal from "./Modal";

import iconVerMas from "../images/IconVerMas.png";
import {getNotices} from "../services/Notices";
export default function CrearNoticiasModal({setStep}) {
  const [show, setShow] = useState(false);

  const [noticia, setNoticia] = useState([]);

  useEffect(() => {
    getNotices()
      .then((result) => setNoticia(result.data))
      .catch((error) => console.log("notices", error));
  }, []);

  return (
    <div className="containerDasboard">
      <Sidebar setStep={setStep} />
      <div className="Sintomas">
        <h4 className="Content-Title">Noticias</h4>
        <div className="ContainerNoticias">
          {noticia.map((element) => (
            <div
              className="contentNoticias"
              onClick={() => {
                setShow(element);
              }}
            >
              <img src={iconVerMas} alt="icon" />
              <h5>{element.title}</h5>
            </div>
          ))}
        </div>
      </div>

      <Modal show={show} setShow={setShow} disableSave title>
        <div className="containerModalNotice">
          <h4>{show.title}</h4>
          <p>{show.description}</p>
        </div>
      </Modal>
    </div>
  );
}
