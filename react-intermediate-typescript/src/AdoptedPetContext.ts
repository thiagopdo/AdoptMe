import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<[Pet | null, (adopted: Pet) => void]>([
  {
    id: 1337,
    name: "fido",
    animal: "dog",
    description: "Lorem",
    breed: "Beagle",
    images: [],
    city: "Seatle",
    state: "WA",
  },
  () => {},
]);

export default AdoptedPetContext;
