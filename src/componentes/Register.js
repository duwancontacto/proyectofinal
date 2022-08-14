import React, {useState} from "react";
import flecha from "../images/flecha.png";
import {createUser} from "../services/Users";
import {ToastContainer, toast} from "react-toastify";
import {validateAllComplete} from "../helpers/validateForm";
export default function Register({setStep}) {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    cedula: "",
    edad: "",
    telefono: "",
    direccion: "",
    correo: "",
    clave: "",
    confirmClave: "",
    role: "usuario",
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async () => {
    try {
      if (validateAllComplete(form))
        return toast.error("Error, Completa el formulario");

      if (form.clave !== form.confirmClave)
        return toast.error("Error, Las claves deben ser iguales");

      await createUser(form);
      setStep(1);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Error");
    }
  };

  return (
    <div className="container-Login">
      <ToastContainer />
      <div onClick={() => setStep(1)}>
        <img src={flecha} alt="flecha" className="flecha" />
      </div>
      <div className="content-Login">
        <h3 className="Content-Title">Registrarse</h3>
        <div className="containerForm-Register">
          <label>Role</label>
          <select
            className="form-control mb-3"
            onChange={handleChange}
            value={form.role}
            name="role"
          >
            <option value="usuario"> Usuario </option>
            <option value="administrador"> Administrador </option>
          </select>
          <label>Nombres</label>
          <input
            className="form-control mb-3"
            onChange={handleChange}
            value={form.nombre}
            name="nombre"
            type="text"
            placeholder="Ejem: Juan Perez"
          />
          <label>Apellitos</label>
          <input
            className="form-control mb-3"
            onChange={handleChange}
            value={form.apellido}
            name="apellido"
            type="text"
            placeholder="Ejem: Juan Perez"
          />

          <label>Cedula</label>
          <input
            className="form-control mb-3"
            onChange={handleChange}
            value={form.cedula}
            name="cedula"
            type="text"
            placeholder="Ejem: 28297315"
          />

          <label>Edad</label>
          <input
            className="form-control mb-3"
            onChange={handleChange}
            value={form.edad}
            name="edad"
            type="number"
            placeholder="Ejem: 22"
          />

          <label>Numero de Telefono</label>
          <input
            className="form-control mb-3"
            onChange={handleChange}
            value={form.telefono}
            name="telefono"
            type="text"
            placeholder="Ejem: +58 4242228344"
          />

          <label>Direccion</label>
          <input
            className="form-control mb-3"
            onChange={handleChange}
            value={form.direccion}
            name="direccion"
            type="text"
            placeholder="Ejem: Santa cecilia"
          />

          <label>Correo</label>
          <input
            className="form-control mb-3"
            onChange={handleChange}
            value={form.correo}
            name="correo"
            type="email"
            placeholder="Ejem: test@test.com"
          />

          <label>Contrasena</label>
          <input
            className="form-control mb-3"
            onChange={handleChange}
            value={form.clave}
            name="clave"
            type="password"
            placeholder="Ejem: qwerty12345"
          />

          <label>Confirmar Contrasena</label>
          <input
            className="form-control mb-3"
            onChange={handleChange}
            value={form.confirmClave}
            name="confirmClave"
            type="password"
            placeholder="Ejem: qwerty12345"
          />
        </div>
        <button className="btn btn-dark col-12 mt-3" onClick={handleSubmit}>
          Registrarse
        </button>
      </div>
    </div>
  );
}
