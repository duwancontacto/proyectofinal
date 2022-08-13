import React, { useState } from 'react';
import './App.css';
import Login from './componentes/Login';
import Register from './componentes/Register';
import Sintomas from "./componentes/Sintomas"
import Noticias from "./componentes/Noticias"
import 'bootstrap/dist/css/bootstrap.min.css';
import CrearNotcias from './componentes/CrearNotcias';

function App() {

  const [step, setStep] = useState(1)
  return (
    <div className="">
      {step === 1 && <Login setStep={setStep} />}
      {step === 2 && <Register setStep={setStep} />}
      {step === 3 && <Sintomas setStep={setStep} />}
      {step === 4 && <Noticias setStep={setStep} />}
      {step === 5 && <CrearNotcias setStep={setStep} />}

    </div>
  );
}

export default App;
