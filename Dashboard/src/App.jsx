import LeftColumn from "./components/LeftColumn";
import Navbar from "./components/Navbar";
import RightColumn from "./components/RightColumn";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="grid md:grid-cols-3 grid-cols-1 w-full p-3">
          <div className="col-span-2">
            <LeftColumn />
          </div>
          <div w-full>
            <RightColumn />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
