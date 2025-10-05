import "./Sundial.css";
import daytime from "@/assets/daytime.png";
import afternoon from "@/assets/afternoon.png";
import night from "@/assets/night.png";

export type PhaseType = 1 | 2 | 3;

interface PhaseProps {
  content: PhaseType;
}

function Sundial({ content = 1 }: PhaseProps) {
  const phases = {
    1: daytime,
    2: afternoon,
    3: night,
  };

  return (
    <div className="sundial-container">
      <img className="sundial" src={phases[content]} alt="time of day" />
    </div>
  );
}

export default Sundial;
