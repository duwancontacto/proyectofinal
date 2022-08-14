import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";

import {getUsers} from "../services/Users";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import {Doughnut, Bar} from "react-chartjs-2";

import {Card} from "react-bootstrap";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
);

export default function CrearNotcias({setStep}) {
  const [users, setUsers] = useState([]);
  const [userCounter, setUserCounter] = useState(0);
  const [sintomas, setSintomas] = useState(null);

  const getPersonasConUnaEnfermedad = (users) => {
    let userCounter = 0;

    users.map((user) => {
      if (
        user?.dolorCabeza === "1" ||
        user?.doloresMusculares === "1" ||
        user?.erupciones === "1" ||
        user?.fiebre === "1" ||
        user?.tos === "1" ||
        user?.vomito === "1"
      )
        userCounter += 1;
    });

    setUserCounter(userCounter);
  };

  const getPersonasSintomas = (users) => {
    let userCounter = [0, 0, 0, 0, 0, 0];

    users.map((user) => {
      if (user?.dolorCabeza === "1") userCounter[0] += 1;
      if (user?.doloresMusculares === "1") userCounter[1] += 1;
      if (user?.erupciones === "1") userCounter[2] += 1;
      if (user?.fiebre === "1") userCounter[3] += 1;
      if (user?.tos === "1") userCounter[4] += 1;
      if (user?.vomito === "1") userCounter[5] += 1;
    });

    setSintomas(userCounter);
  };

  useEffect(() => {
    getUsers()
      .then((result) => {
        getPersonasConUnaEnfermedad(result.data);
        getPersonasSintomas(result.data);
        setUsers(result.data);
      })
      .catch((error) => console.log("notices", error));
  }, []);

  const data = {
    labels: ["PERSONAS CON AL MENOS UN SINTOMAS", "PERSONAS SIN SINTOMAS"],
    datasets: [
      {
        label: "# of Votes",
        data: [userCounter, users.length - userCounter],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  const labels = [
    "Dolor de cabeza",
    "Dolores musculares",
    "Erupciones en la piel",
    "Fiebre",
    "Tos",
    "Vomito",
  ];

  const data2 = {
    labels,
    datasets: [
      {
        label: "Personas",
        data: sintomas,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="containerDasboard">
      <Sidebar setStep={setStep} />
      <div className="Sintomas">
        <h4 className="Content-Title">Reportes</h4>

        <Card body style={{width: "500px"}}>
          <h5 className="text-center">
            Reporte 1 - Personas Totales: {users.length}
          </h5>
          <Doughnut data={data} />
        </Card>
        <Card body style={{width: "500px", margin: "50px"}}>
          <h5 className="text-center">Reporte 2 - Personas con sintomas</h5>
          <Bar options={options} data={data2} />
        </Card>
      </div>
    </div>
  );
}
