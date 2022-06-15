import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Create from "./mypage/Create";
import Explore from "./mypage/Explore";
import Profile from "./mypage/Profile";
import Resources from "./mypage/Resources";
import Stats from "./mypage/Stats";
import Wallet from "./mypage/Wallet";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Main />
      <Routes>
        <Route path="/" />
        <Route path="/explore" element={<Explore />} />
        <Route path="/stats/" element={<Stats />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
