import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {GlobalFonts} from "./styles/GlobalFonts.styles.tsx";
import {GlobalStyles} from "./styles/Global.styled.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <GlobalFonts />
      <GlobalStyles />
      <App />
  </StrictMode>,
)
