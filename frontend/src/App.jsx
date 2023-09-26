import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MedRecordsScreen from "./screens/MedRecordsScreen";
import MedRecordsFormScreen from "./screens/MedRecordsFormScreen";

const App = () => {
  return (
    <>
      <MedRecordsScreen />
      <MedRecordsFormScreen />
    </>
  );
};

export default App;
