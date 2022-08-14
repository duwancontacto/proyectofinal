import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import Modal from "./Modal";
import iconAgregar from "../images/iconAgregar.png";
import {ToastContainer, toast} from "react-toastify";
import iconVerMas from "../images/IconVerMas.png";
import {
  createNotice,
  deleteNotice,
  getNotices,
  updateNotice,
} from "../services/Notices";

export default function CrearNotcias({setStep}) {
  const [show, setShow] = useState(false);
  const [reload, setReload] = useState(true);
  const [form, setForm] = useState({title: "", description: ""});

  const handleSubmitNotice = async () => {
    if (show === "edit") await updateNotice(form);
    else await createNotice(form);
    setReload(true);
    setShow(false);
  };

  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    if (reload) {
      setReload(false);
      getNotices()
        .then((result) => setNoticias(result.data))
        .catch((error) => console.log("notices", error));
    }
  }, [reload]);

  const handleDeleteNotice = async (noticeId) => {
    try {
      await deleteNotice(noticeId);
      toast.success("Noticia eliminada");
      setReload(true);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Error");
    }
  };

  return (
    <div className="containerDasboard">
      <Sidebar setStep={setStep} />
      <ToastContainer />
      <div className="Sintomas">
        <h4 className="Content-Title">Crear Noticias</h4>
        <div className="contenCrearNoticias">
          {noticias.map((element) => (
            <div className="containerTitulo">
              <label>{element.title}</label>
              <div className="containerImagen">
                <p>{new Date(element.created_at).toLocaleDateString()}</p>
                <button
                  onClick={() => handleDeleteNotice(element.id)}
                  className="btn btn-danger mx-4"
                >
                  Eliminar
                </button>
                <img
                  onClick={() => {
                    setShow("edit");
                    setForm(element);
                  }}
                  src={iconVerMas}
                  alt="iconEditar"
                  className="iconEditar"
                />
              </div>
            </div>
          ))}
        </div>

        <div
          className="contentBotonAgregar"
          onClick={() => {
            setShow(true);
            setForm({title: "", description: ""});
          }}
        >
          <button>
            Agregar
            <img src={iconAgregar} alt="iconAgregar" className="iconAgregar" />
          </button>
        </div>
        <Modal
          show={show}
          setShow={setShow}
          title={show === "edit" ? "Editar Noticia" : "Nueva Noticia"}
          onSubmit={handleSubmitNotice}
        >
          <div className="containerModal">
            <label className="form-label pt-3">Titulo</label>
            <input
              className="form-control"
              name="title"
              value={form.title}
              onChange={(e) =>
                setForm({...form, [e.target.name]: e.target.value})
              }
              type="text"
            />
            <label className="form-label pt-3">Descripcion</label>
            <textarea
              className="form-control"
              name="description"
              value={form.description}
              onChange={(e) =>
                setForm({...form, [e.target.name]: e.target.value})
              }
              type="textarea"
              rows="5"
              cols="60"
            />
          </div>
        </Modal>
      </div>
    </div>
  );
}
