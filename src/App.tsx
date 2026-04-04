import { Footer, Header } from "compositions";
import { AllProviders } from "data";
import { CompoundDesigningWorkshop } from "./examples/CompoundDesigningWorkshop";
import { SdsWorkshopWelcomePage } from "./examples/SdsWorkshopWelcomePage";
import { useEffect, useState } from "react";

function App() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const isSdsWelcome = hash === "#sds-welcome";

  return (
    <AllProviders>
      <Header
        logoAriaLabel={
          isSdsWelcome
            ? "Back to SDS overview top"
            : "Back to workshop introduction"
        }
        logoHref={isSdsWelcome ? "#sds-welcome-top" : "#workshop-hero-heading"}
      />
      {isSdsWelcome ? <SdsWorkshopWelcomePage /> : <CompoundDesigningWorkshop />}
      <Footer />
    </AllProviders>
  );
}

export default App;
