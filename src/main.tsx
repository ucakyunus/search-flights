import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@/assets/styles/index.scss'

import Providers from "@/components/providers";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers />
  </StrictMode>,
)
