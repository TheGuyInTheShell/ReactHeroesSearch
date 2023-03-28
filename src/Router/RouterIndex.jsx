import { Route, Routes, BrowserRouter } from "react-router-dom"
import BaseApp from "../components/BaseApp";
import LoginScreen from "../components/HeroesApp/LoginScreen";

const AppRouter = ()=> {
  
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<BaseApp/>}/>
          <Route path="login" element={<LoginScreen history={history} />} />
        </Routes>
      </BrowserRouter>
    )

}
export default AppRouter