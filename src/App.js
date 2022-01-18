import MemeState from "./context/MemeState";
import MemeCard from "./components/MemeCard";

export default function App() {
  return (
    <MemeState>
      <MemeCard />
    </MemeState>
  );
}
