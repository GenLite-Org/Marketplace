// React Imports
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Material UI Imports
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Component Imports
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Listings from "./pages/Listings";
import Auctions from "./pages/Auctions";

// Font Imports
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from "react";

export default function App() {
  return (
    <main>
      <ThemeProvider theme={createTheme({ palette: { mode: 'dark' } })}>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
        <CssBaseline />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Listings />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/auctions" element={<Auctions />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<React.StrictMode><App /></React.StrictMode>);
