import axios from "../../axios";
import PatientModel from "~/type/PatientModel";


export const getPatients = async () =>{
  return async() =>{
    try {
      let res = await axios.get("/patients");
      console.log(res.data);
    } catch (error) {}
  }
};

export const addPatient = 
    (patient: PatientModel)=>{
        const data = {
          name: patient.name,
          gender: patient.gender,
          bed: patient.bed,
          case: patient.case,
          age: patient.age,
          day: patient.day,
          foleyStatus: patient.foleyStatus,
          state: patient.state || ""
        };
        const pro = {...data};
        return new Promise<{ message: number }>((resolve, reject) => {
          // console.log(patient);
          axios
            .post("/patients", pro)
            .then((response) => {
              resolve(response.data);
            })
            .catch((error) => {
              console.log(error);
              reject({ message: -1 });
            });      
        });
    };