/**
 * App.tsx — Route configuration for 24 Hour Emergency Plumber Calgary
 * Design: Precision Response / Emergency Operations Center
 * All routes use clean URLs matching the SEO blueprint
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StickyPhoneBar from "./components/StickyPhoneBar";

// Pages
import Home from "./pages/Home";
import EmergencyPillar from "./pages/EmergencyPillar";
import ServicePage from "./pages/ServicePage";
import NeighborhoodPage from "./pages/NeighborhoodPage";
import WaterHardnessReport from "./pages/resources/WaterHardnessReport";
import WinterizeGuide from "./pages/resources/WinterizeGuide";
import TanklessComparison from "./pages/resources/TanklessComparison";
import ShutOffValveGuide from "./pages/resources/ShutOffValveGuide";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
      <StickyPhoneBar />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      {/* Home */}
      <Route path="/" component={() => <Layout><Home /></Layout>} />

      {/* Pillar page */}
      <Route path="/emergency-plumbing-calgary" component={() => <Layout><EmergencyPillar /></Layout>} />

      {/* Service pages */}
      <Route path="/emergency-plumber-calgary" component={() => <Layout><ServicePage slug="emergency-plumber-calgary" /></Layout>} />
      <Route path="/24-hour-plumber-calgary" component={() => <Layout><ServicePage slug="24-hour-plumber-calgary" /></Layout>} />
      <Route path="/burst-pipe-repair-calgary" component={() => <Layout><ServicePage slug="burst-pipe-repair-calgary" /></Layout>} />
      <Route path="/drain-cleaning-calgary" component={() => <Layout><ServicePage slug="drain-cleaning-calgary" /></Layout>} />
      <Route path="/water-heater-installation-calgary" component={() => <Layout><ServicePage slug="water-heater-installation-calgary" /></Layout>} />
      <Route path="/frozen-pipe-thawing-calgary" component={() => <Layout><ServicePage slug="frozen-pipe-thawing-calgary" /></Layout>} />
      <Route path="/sump-pump-repair-calgary" component={() => <Layout><ServicePage slug="sump-pump-repair-calgary" /></Layout>} />
      <Route path="/sewer-line-inspection-calgary" component={() => <Layout><ServicePage slug="sewer-line-inspection-calgary" /></Layout>} />

      {/* Neighborhood pages */}
      <Route path="/nw-calgary-plumber" component={() => <Layout><NeighborhoodPage slug="nw-calgary-plumber" /></Layout>} />
      <Route path="/se-calgary-plumber" component={() => <Layout><NeighborhoodPage slug="se-calgary-plumber" /></Layout>} />
      <Route path="/airdrie-plumber" component={() => <Layout><NeighborhoodPage slug="airdrie-plumber" /></Layout>} />
      <Route path="/chestermere-plumber" component={() => <Layout><NeighborhoodPage slug="chestermere-plumber" /></Layout>} />

      {/* Resource / backlink pages */}
      <Route path="/calgary-water-hardness-report" component={() => <Layout><WaterHardnessReport /></Layout>} />
      <Route path="/winterize-outdoor-faucets-calgary" component={() => <Layout><WinterizeGuide /></Layout>} />
      <Route path="/tankless-vs-traditional-water-heater-alberta" component={() => <Layout><TanklessComparison /></Layout>} />
      <Route path="/shut-off-valve-location-calgary-home" component={() => <Layout><ShutOffValveGuide /></Layout>} />

      {/* Info pages */}
      <Route path="/about" component={() => <Layout><AboutPage /></Layout>} />
      <Route path="/contact" component={() => <Layout><ContactPage /></Layout>} />

      {/* 404 */}
      <Route path="/404" component={() => <Layout><NotFound /></Layout>} />
      <Route component={() => <Layout><NotFound /></Layout>} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
