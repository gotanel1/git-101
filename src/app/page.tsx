import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProgramExplorer from "@/components/ProgramExplorer";
import FacultyHighlights from "@/components/FacultyHighlights";
import TcasAndFees from "@/components/TcasAndFees";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <HeroSection />
        <ProgramExplorer />
        <FacultyHighlights />
        <TcasAndFees />
        <LeadForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
