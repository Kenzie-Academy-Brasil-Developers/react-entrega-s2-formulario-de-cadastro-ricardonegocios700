import { useState } from "react";
import { Switch, Route, useParams } from "react-router-dom";

import Register from "../pages/Register/register.jsx";
import Home from "../pages/Home/home.jsx";

const Routes = () => {
  const params = useParams();
  console.log("params: ", { params });
  const [dataForm, setDataForm] = useState();
  return (
    <div className="Rotas">
      <Switch>
        <Route exact path="/">
          <Register setDataForm={setDataForm} />
        </Route>
        <Route path="/home">
          <Home dataForm={dataForm} />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
