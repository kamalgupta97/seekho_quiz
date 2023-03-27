import { useState } from "react";
import "./App.css";
import { Drawer, Loader, Questions, Score } from "./Components";
import { AppContextProvider } from "./Context/AppContext";

function App() {
  const [appState, setAppState] = useState(0);
  const handleUpdateAppState = (param) => {
    setAppState((prev) => prev + param);
  };
  return (
    <AppContextProvider>
      <div className="App">
        {/* <Loader /> */}
        {appState === 0 && (
          <Drawer handleUpdateAppState={handleUpdateAppState} />
        )}
        {appState === 1 && (
          <Questions handleUpdateAppState={handleUpdateAppState} />
        )}
        {appState === 2 && (
          <Score handleUpdateAppState={handleUpdateAppState} />
        )}
      </div>
    </AppContextProvider>
  );
}

export default App;
