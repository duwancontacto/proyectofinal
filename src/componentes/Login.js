import React, {useState, useEffect} from "react";
import {authUser} from "../services/Users";
import {ToastContainer, toast} from "react-toastify";
import {validateAllComplete} from "../helpers/validateForm";
export default function Login({setStep}) {
  const [form, setForm] = useState({
    correo: "",
    clave: "",
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  useEffect(() => {
    let user = localStorage.getItem("user");

    if (user) setStep(3);
  }, []);

  const handleSubmit = async () => {
    try {
      if (validateAllComplete(form))
        return toast.error("Error, Completa el formulario");

      let result = await authUser(form);
      setStep(3);

      localStorage.setItem("user", JSON.stringify(result.data));
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Error");
    }
  };

  return (
    <div className="hijo">
      <ToastContainer />
      <div className="container-Login">
        <div className="content-Login">
          <h3 className="Content-Title">BIENVENIDO</h3>
          <div className="container-Form">
            <label>Correo</label>
            <input
              onChange={handleChange}
              value={form.correo}
              name="correo"
              type="email"
              placeholder="ejem.@gmail.com"
            />
            <label>Contrasena</label>
            <input
              onChange={handleChange}
              value={form.clave}
              name="clave"
              type="password"
              placeholder=""
            />
          </div>

          <button className="botonGeneral" onClick={handleSubmit}>
            Ingresar
          </button>

          <p className="registro" onClick={() => setStep(2)}>
            Registrarse
          </p>
        </div>
      </div>
    </div>
  );
}
