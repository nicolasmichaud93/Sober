import { addictions } from "./Data";
import Timer from "./Timer";

function App() {
  return (
    <>
      <h1>Sobriety Tracker</h1>

      {addictions.map((addiction) => (
        <div
          key={addiction.name}
          style={{
            border: "1px solid gray",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "16px",
          }}
        >
          <h2>{addiction.name}</h2>

          <Timer addiction={addiction} />
        </div>
      ))}
    </>
  );
}

export default App;