import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedLayout from "./components/protectedLayout";
import { AuthProvider } from "./context/AuthProvider";
import { ListProvider } from "./context/listProvider";
import { Login, Profiler } from "./pages";
import { Header } from "./pages/header";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/users">
            <Route
              index
              element={
                <ProtectedLayout
                  children={
                    <ListProvider>
                      <Profiler />
                    </ListProvider>
                  }
                />
              }
            />
            <Route
              path="profiler"
              element={
                <ListProvider>
                  <Profiler />
                </ListProvider>
              }
            />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="login" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
