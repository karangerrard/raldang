import { Switch, Route } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import RoomsSection from "@/components/sections/rooms-section";
import DiningSection from "@/components/sections/dining-section";
import GallerySection from "@/components/sections/gallery-section";
import ContactSection from "@/components/sections/contact-section";
import HowToReachSection from "@/components/sections/activities-section";
import AboutSection from "@/components/sections/about-section";

import { AppProvider } from "@/lib/context";

{/* function Router() {
  const [location] = useHashLocation();
  return (
    <Switch location={location}>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutSection} /> 
      <Route path="/rooms" component={RoomsSection} />
      <Route path="/dining" component={DiningSection} />
      <Route path="/gallery" component={GallerySection} />
      <Route path="/directions" component={HowToReachSection} />
      <Route path="/contact" component={ContactSection} /> 
      <Route component={NotFound} />
    </Switch>
  );
}*/}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <TooltipProvider>
          <Toaster />
          <Home />
        </TooltipProvider>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
