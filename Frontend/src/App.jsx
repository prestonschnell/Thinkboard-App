import {Route, Routes} from "react-router"; // Need this so our React app can read our backend routes we made with our controllers.
import '../src/index.css'
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";

const App = () => {
  return (
     <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
      {/* Theses routes are utilized in our React app so we can control the frontend endpoints in tandem with our backend endpoints. */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/note/:id" element={<NoteDetailPage />} />
    </Routes>
    </div>
  )
}

export default App;
