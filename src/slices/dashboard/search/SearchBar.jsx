import { useQuery } from "@tanstack/react-query";
import { cityNameToPosition } from "../../../services/openWeather";
import { useSearch } from "../../../contexts/SearchContext";
import SuggestionsContainer from "./SuggestionsContainer";




export default function SearchBar() {

  const { search, setSearch } = useSearch();

  const { data, isPending } = useQuery({
    queryKey: [search],
    queryFn: async ({signal}) => cityNameToPosition(search, signal)

  });



  return (
    <form 
      onSubmit={(e) => e.preventDefault()}
      className="relative w-full" 
    >
      <input 
        type="text" 
        placeholder="search location here..." 
        className="py-1.5 px-3 w-full outline-none rounded-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
      />

      <SuggestionsContainer locations={data} isPending={isPending} />

    </form> 
  )
}
