import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
	return (
		<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/user/login" element={<LoginPage />} />
          <Route path="/user/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
	);
}
