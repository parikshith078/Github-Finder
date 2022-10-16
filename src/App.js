import Navbar from "./components/leyout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/leyout/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/GithubContext";
import { AlertProvider } from "./context/AlertContext";
import Alert from "./components/leyout/Alert";
import User from "./pages/User";

export default function App() {
  return (
    <AlertProvider>
      <GithubProvider>
        <Router>
          <div className="flex h-screen justify-between flex-col ">
            <Navbar />
            <main className="container px-3 pb-12 mx-auto ">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </GithubProvider>
    </AlertProvider>
  );
}
