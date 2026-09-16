import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import AppDevelopment from "./pages/AppDevelopment";
import WebDevelopment from "./pages/WebDevelopment";
import DigitalMarketing from "./pages/DigitalMarketing";
import BrandingDesign from "./pages/BrandingDesign";
import SocialMediaGrowth from "./pages/SocialMediaGrowth";
import Legal from "./pages/Legal";
import AppStorePublishing from "./pages/AppStorePublishing";
import CrmIntegration from "./pages/CrmIntegration";
import FundingGuidance from "./pages/FundingGuidance";
import PaymentIntegration from "./pages/PaymentIntegration";
import BusinessStrategy from "./pages/BusinessStrategy";
import HiringSupport from "./pages/HiringSupport";
import OngoingSupport from "./pages/OngoingSupport";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/branding-design" element={<BrandingDesign />} />
          <Route path="/social-media-growth" element={<SocialMediaGrowth />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/app-store-publishing" element={<AppStorePublishing />} />
          <Route path="/crm-integration" element={<CrmIntegration />} />
          <Route path="/funding-guidance" element={<FundingGuidance />} />
          <Route path="/payment-integration" element={<PaymentIntegration />} />
          <Route path="/business-strategy" element={<BusinessStrategy />} />
          <Route path="/hiring-support" element={<HiringSupport />} />
          <Route path="/ongoing-support" element={<OngoingSupport />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
