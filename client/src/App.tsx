import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { CartProvider } from "./contexts/CartContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import StarfrontGallery from "./pages/StarfrontGallery";
import KalamazooGallery from "./pages/KalamazooGallery";
import TravelGallery from "./pages/TravelGallery";
import GearReview from "./pages/GearReview";
import Tutorials from "./pages/Tutorials";
import Store from "./pages/Store";
import About from "./pages/About";
import YouTubePage from "./pages/YouTube";
import SeestarGallery from "./pages/SeestarGallery";
import MilkyWayRises from "./pages/MilkyWayRises";
import Galleries from "./pages/Galleries";
import Articles from "./pages/Articles";
import ScrollToTop from "./components/ScrollToTop";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/galleries" component={Galleries} />
      <Route path="/articles" component={Articles} />
      <Route path="/starfront-gallery" component={StarfrontGallery} />
      <Route path="/kalamazoo-gallery" component={KalamazooGallery} />
      <Route path="/travel-gallery" component={TravelGallery} />
      <Route path="/seestar-gallery" component={SeestarGallery} />
      <Route path="/gear-review" component={GearReview} />
      <Route path="/tutorials" component={Tutorials} />
      <Route path="/store" component={Store} />
      <Route path="/about" component={About} />
      <Route path="/youtube" component={YouTubePage} />
      <Route path="/articles/the-milky-way-rises" component={MilkyWayRises} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <CartProvider>
          <TooltipProvider>
            <ScrollToTop />
            <Toaster richColors position="bottom-right" />
            <Router />
          </TooltipProvider>
        </CartProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
