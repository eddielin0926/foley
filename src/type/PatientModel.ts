interface PatientModel {
  id: number;
  name: string;
  gender: "male" | "female" | "other";
  bed: string;
  case: string;
  age: number;
  day: number;
  foleyStatus: "none" | "inserted" | "removed";
  state: string;
  insertedDate: Date
};

export default PatientModel;
