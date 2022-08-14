import React, {useState, useEffect} from "react";
import {updateUser} from "../services/Users";
import Sidebar from "./Sidebar";
import {ToastContainer, toast} from "react-toastify";
export default function Dasboard({setStep}) {
  const [user, setUser] = useState({});

  console.log(user);

  useEffect(() => {
    let user = localStorage.getItem("user");

    if (user) setUser(JSON.parse(user));
  }, []);

  const handleUpdateUser = async () => {
    try {
      let newUser = {...user};

      await updateUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      toast.success("Usuario actualizado correctamente");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Error");
    }
  };

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };
  const handleChangeCheck = (e) => {
    setUser({...user, [e.target.name]: e.target.checked ? "1" : "0"});
  };

  return (
    <div className="containerDasboard">
      <Sidebar setStep={setStep} />
      <ToastContainer />
      <div className="Sintomas">
        <h4 className="Content-Title">Sintomas</h4>
        <div className="">
          <label className="form-label-custom">Virus Diagnosticado:</label>
          <input
            onChange={handleChange}
            value={user.diagnosticado}
            name="diagnosticado"
            type="text"
            className="form-control"
          />

          <label className="form-label-custom">Sintomas</label>
          <div className="contentCheckbox">
            <div>
              <input
                type="checkbox"
                onChange={handleChangeCheck}
                checked={user.fiebre === "1" ? true : false}
                name="fiebre"
              />
              <label className="form-label-custom-check">Fiebre</label>
            </div>
            <div>
              <input
                type="checkbox"
                onChange={handleChangeCheck}
                checked={user.erupciones === "1" ? true : false}
                name="erupciones"
              />
              <label className="form-label-custom-check">
                Erupciones en la piel
              </label>
            </div>

            <div>
              <input
                onChange={handleChangeCheck}
                checked={user.tos === "1" ? true : false}
                name="tos"
                type="checkbox"
              />
              <label className="form-label-custom-check">Tos</label>
            </div>
            <div>
              <input
                type="checkbox"
                onChange={handleChangeCheck}
                checked={user.doloresMusculares === "1" ? true : false}
                name="doloresMusculares"
              />
              <label className="form-label-custom-check">
                Dolores musculares
              </label>
            </div>
            <div>
              <input
                onChange={handleChangeCheck}
                checked={user.dolorCabeza === "1" ? true : false}
                name="dolorCabeza"
                type="checkbox"
              />
              <label className="form-label-custom-check">Dolor de cabeza</label>
            </div>
            <div>
              <input
                onChange={handleChangeCheck}
                checked={user.vomito === "1" ? true : false}
                name="vomito"
                type="checkbox"
              />
              <label className="form-label-custom-check"> Vomito</label>
            </div>
          </div>
          <label className="form-label-custom">Sintomas Adicionales</label>
          <div className="">
            <textarea
              onChange={handleChange}
              value={user.sintomasAdicionales}
              name="sintomasAdicionales"
              className="form-control"
              type="textarea"
              rows="5"
              cols="60"
            />
          </div>

          <button
            onClick={handleUpdateUser}
            className="btn btn-dark col-12 mt-5"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}
