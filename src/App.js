import { BrowserRouter, Route, Routes} from "react-router-dom";
import GlobalStyle from './styles/GlobalStyle';
import GlobalFont from './styles/GlobalFont';
import Home from './pages/home/Home';
import Listing from './pages/listing/Listing';
import Mypage from './pages/mypage/Mypage'; 

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/listing" element={<Listing/>} />
            <Route path="/mypage" element={<Mypage/>} />
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
