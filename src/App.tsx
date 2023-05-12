import "./App.css";
import { OthentLogin } from "@othent/react-components";
function App() {
  return (
    <>
      <h1>Othent React Components Test</h1>
      <div className="card">
        <OthentLogin />
      </div>
      <p className="read-the-docs">
        Click on Login with Othent to test the Othent React Components
      </p>
    </>
  );
}

export default App;
