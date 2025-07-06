import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from "@/components/toaster";
import { Toaster as Sonner } from "@/components/sonner";
import { TooltipProvider } from "@/components/tooltip";
import { AuthProvider } from "./contexts/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Index from "./pages/Index";
import AIGeneration from "./pages/AIGeneration";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const App = () => (
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/ai-generation" element={<AIGeneration />} />
              <Route path="/auth" element={<Auth />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </GoogleOAuthProvider>
);

export default App;
