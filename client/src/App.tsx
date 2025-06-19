import { HashRouter, Routes, Route } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import GalleryPage from "@/pages/gallery";
import { AppProvider } from "@/lib/context";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <TooltipProvider>
          <Toaster />
          <HashRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HashRouter>
        </TooltipProvider>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
