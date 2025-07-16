import {Route, Routes} from "react-router"; // Need this so our React app can read our backend routes we made with our controllers.

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";

const App = () => {
  return (
    <div data-theme="forest">
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
