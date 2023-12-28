import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import OfferModelsRight from "../right/offer-models/offer-models";
import OfferModelsLeft from "../left/offer-models/offer-models";

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppHeader />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
