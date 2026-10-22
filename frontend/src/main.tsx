import { apiRequest } from './services/apiClient';
import { applyBusinessSettings } from './services/websiteContent';
import type { BusinessSettings } from './admin/types/adminTypes';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App.tsx';

const root = createRoot(document.getElementById('root')!);
const renderApp = () => root.render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);

// Show the page immediately. Settings can update contact details after the API responds.
renderApp();
void apiRequest<BusinessSettings>('/settings', { signal: AbortSignal.timeout(5000) })
  .then((settings) => {
    applyBusinessSettings(settings);
    renderApp();
  })
  .catch(() => {});
