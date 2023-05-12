import "./App.css";
import { OthentLogin } from "@othent/react-components";

const API_ID = import.meta.env.VITE_OTHENT_API_ID;

function App() {
  return (
    <>
      <h1>Othent React Components Test</h1>
      <div className="card">
        <OthentLogin apiid={API_ID} />
      </div>
      {/* <p className="read-the-docs">Your API_ID={API_ID}</p> */}
      <p className="read-the-docs">
        Click on Login with Othent to test the Othent React Components
      </p>
    </>
  );
}

export default App;
