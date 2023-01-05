import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import './App.css';
import Products from './components/Products/Products';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:productId" element={<Products/>} />
      </Routes>
      </BrowserRouter>

    </QueryClientProvider>
    // <div className="App">
     
    // </div>
  );
}

export default App;
