import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Components/pages/CoffeeCard";
import { useState } from "react";

function App() {
  const loaderCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loaderCoffees);
  return (
    <>
      <h1 className="text-6xl font-extrabold m-6 text-center">
        {" "}
        HOt Hot coffees {coffees.length}{" "}
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 m-4">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          />
        ))}
      </div>
    </>
  );
}

export default App;
