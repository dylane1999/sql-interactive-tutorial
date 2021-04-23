import React from "react";
import NavBar from "./views/components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SqlTutorialPage from "./views/pages/SqlTutorialPage";
import IntroPage from "./views/pages/IntroductionPage";
import styled from "styled-components";

const NoneErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  padding: 56px;
`;
const NotFound = () => {
  return (
    <NoneErrorWrapper>
      <div>
        <h1>404 Not found</h1>
      </div>
    </NoneErrorWrapper>
  );
};

const App = () => {
  return (
    <>
      <NavBar />
        <div>
          <Switch>
            <Route exact path="/">
              <IntroPage/>
            </Route>
            <Route exact path="/practice" component={SqlTutorialPage}/>
            <Route component={NotFound} />
          </Switch>
        </div>
    </>
  );
};

export default App;
