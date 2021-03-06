import './App.css';
import MainPageComponent from "./main/index.js"
import { Switch, Route } from "react-router-dom"
import UploadPage from "./upload"
import ProductPage from "./product"
function App() {
  return <div>
    <Switch>
      <Route exact={true} path="/">
        <MainPageComponent />
      </Route>
      <Route exact={true} path="/product/:id">
        <ProductPage></ProductPage>
      </Route>
      <Route exact={true} path="/upload">
        <UploadPage></UploadPage>
      </Route>
    </Switch>

  </div>
}

export default App;
