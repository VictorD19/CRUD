import Routers from "./Routes";
import DataUserProvider from "./Context/ContextDataUser";
function App() {
  return (
    <div className="App">
    <DataUserProvider>
      <Routers/>
    </DataUserProvider>
    </div>
  );
}

export default App;
