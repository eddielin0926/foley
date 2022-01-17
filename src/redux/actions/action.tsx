import axios from "../../axios";
import PatientModel from "~/type/PatientModel";
import SetRequest from "~/type/PatientModel"

export const getPatients =async () =>{
    try {
      console.log('Get');
      let res = await axios.get("/patients");
      // console.log('?', res.data);
      return res.data;
    } catch (error) {
      return [];
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
          state: patient.state || "1A"
        };
        return new Promise<{ message: number }>((resolve, reject) => {
          axios
            .post("/patients", data)
            .then((response) => {
              resolve(response.data);
            })
            .catch((error) => {
              console.log(error);
              reject({ message: -1 });
            });      
        });
    };

export const updatePatients = 
    (id:number, options: SetRequest) => {
      return new Promise<{ message: number }>((resolve, reject) => {
        axios
          .patch(`/patients/${id}`, options)
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            console.log(error);
            reject({ message: -1 });
          });      
      });
    };

export const deletePatient = async (id:number) => {
    try {
      await axios.delete(`/patients/${id}`);
    } catch (error) {}
}