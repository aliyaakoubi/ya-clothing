import { Route, Routes } from "react-router-dom";

import Home from "./routes/home-component/home.component";
import Navigation from "./routes/navigation-component/navigation.component";
import Authontication from "./routes/authontification/authontication.component";
import Shop from "./routes/shop/shop-component";



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
