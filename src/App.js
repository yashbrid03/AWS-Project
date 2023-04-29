import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Main from "./components/Main";
import Add from "./components/Add";
import Home from "./components/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Individual from "./components/Individual";
import MyBlog from "./components/MyBlog";

Amplify.configure(config);
function App() {
  return (
    <Authenticator className="App-header">
      {({ signOut, user }) => (
        <>
          <Routes>
            <Route
              path="/"
              element={<Home user={user.username} signout={signOut} />}
            />
            <Route
              path="/blog/:id/:author"
              element={<Individual signout={signOut} />}
            />
            <Route
              path="/myblog"
              element={<MyBlog signout={signOut} user={user.username} />}
            />

            <Route path="/blog" element={<Main signout={signOut} />} />
            <Route
              path="/add"
              element={
                <Add
                  authid={user.keyPrefix}
                  user={user.username}
                  signout={signOut}
                />
              }
            />
          </Routes>
        </>
      )}
    </Authenticator>
  );
}

export default App;
