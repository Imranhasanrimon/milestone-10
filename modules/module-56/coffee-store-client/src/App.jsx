import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedData = useLoaderData();
  const [coffees, setCoffees] = useState(loadedData)

  return (
    <div className="m-8">
      <h1 className="text-3xl font-semibold">Coffees {loadedData.length}</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {
          coffees.map(coffee => <CoffeeCard coffees={coffees} setCoffees={setCoffees} key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
// app component is done