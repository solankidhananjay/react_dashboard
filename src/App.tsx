import Sidebar from "./components/layouts/Sidebar";
import Header from "./components/layouts/Header";
import Dashboard from "./pages/Dashboard";

function App() {

  return (
    <div style={{display: "flex", height: "100vh"}}>
      <Sidebar/>
      <div style={{flex: 1}}>
        <Header/>
        <main style={{padding: "16px"}}>
          <Dashboard/>
        </main>
      </div>
    </div>
  );
}

export default App
