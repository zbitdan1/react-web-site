import "./App.css";
import React, { Suspense, useState } from "react";
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { Provider } from "react-redux";
import store from "./Redux/redux-store";
import Preloader from "./assets/common/Preloader/Preloader";
import TopBarContainer from "./components/topbar/TopBarContainer";
import Chat from "./components/Chat/Chat";
import { ChatEngine } from "react-chat-engine";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

const App = ({ isAuth }) => {
  if (isAuth === false) {
    return (
      <Routes>
        <Route path="/login" />
      </Routes>
    );
  }

  return (
    <>
      <BrowserRouter>
        <div className="site-wrapper">
          <HeaderContainer />
          <Nav />
          <div className="app-wrapper-content">
            <Routes>
              {/* <Route path="/" element={<Suspense fallback={<Preloader />}>
                  <ProfileContainer />
                </Suspense>}> */}
              <Route
                path="/dialogs"
                element={
                  <Suspense fallback={<Preloader />}>
                    <DialogsContainer />
                  </Suspense>
                }
              />
              <Route
                path="/profile"
                element={
                  <Suspense fallback={<Preloader />}>
                    <ProfileContainer />
                  </Suspense>
                }
              />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/admin" element={<TopBarContainer />} />
              <Route path="*" element={<div>404 NOT FOUND</div>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

const DanyayaJSApp = (props) => {
  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(true);
  const onDoubleClick = () => setShowResults(false); 

  return (
    <>
      <React.StrictMode>
        <Provider store={store}>
        <input
            className="input"
            value= {showResults ? "Открыть чат" : "Закрыть чат"}
            type={"submit"}
            onClick={onClick}
            onDoubleClick={onDoubleClick}
          />
          {showResults ? <App /> : <Chat/>}
          
        </Provider>
      </React.StrictMode>
    </>
  );
};

export default DanyayaJSApp;
