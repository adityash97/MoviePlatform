
import { IndexLayout } from "./layout/IndexLayout.js";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { NotFound } from "./components/NotFound.js";
import { Router } from "./router/routes.js";
import {UserRouter} from "./router/user-routes.js"
function App() {
  return (
    // use react bootstrap instead of bootstrap
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<IndexLayout/>}>
        <Route path="/home/*" element={<Router/>}></Route>
      </Route>
      <Route path="/user/*" element={<UserRouter/>}/>

      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
