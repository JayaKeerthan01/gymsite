import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Facilities from "./sections/Facilities";
import Services from "./sections/Services";
import Results from "./sections/Results";
import Contact from "./sections/Contact";
import { useState } from "react";
import JoinModal from "./components/JoinModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openJoinModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeJoinModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onJoinClick={openJoinModal} />
      <Hero onJoinClick={openJoinModal} />
      <About />
      <Facilities />
      <Services />
      <Results />
<Contact onJoinClick={openJoinModal} />
      <JoinModal isOpen={isModalOpen} onClose={closeJoinModal} />
    </div>
  );
}

export default App;