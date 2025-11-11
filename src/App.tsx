
import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import RoyalLoadingScreen from "./components/RoyalLoadingScreen";


import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Apps from "./pages/Apps";
import WebsiteContent from "./pages/WebsiteContent";
import NotFound from "./pages/NotFound";
import MapDemo from "./pages/MapDemo";
import DelMarCompound from "./pages/DelMarCompound";
import Chatbot from "./components/Chatbot";
import LanguageDebugger from "./components/LanguageDebugger";
import ErrorBoundary from "./components/ErrorBoundary";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {isLoading ? (
              <RoyalLoadingScreen onLoadingComplete={handleLoadingComplete} />
            ) : (
              <>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:id" element={<ProjectDetails />} />
                    <Route path="/properties" element={<Properties />} />
                    <Route path="/properties/:id" element={<PropertyDetails />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/news/:id" element={<NewsDetails />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/terms-of-use" element={<TermsOfUse />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/apps" element={<Apps />} />
                    <Route path="/map-demo" element={<MapDemo />} />
                    <Route path="/del-mar-compound" element={<DelMarCompound />} />
                    <Route path="/admin/content" element={<WebsiteContent />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </BrowserRouter>
                <LanguageDebugger />
              </>
            )}
          </TooltipProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
