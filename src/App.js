import { Route, Routes } from "react-router-dom";

import Home from "./routes/home.component";
import Navigation from "./routes/navigation.component";
import Authontication from "./routes/authontication.component";

function Shop() {
  return <h1>I'm the navaigation bar</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />}></Route>
        <Route path="auth" element={<Authontication />}/>
      </Route>
    </Routes>
  );
}

export default App;
