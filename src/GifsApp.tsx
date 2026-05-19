import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import PreviousSearches from "./gifs/PreviousSearches";

import { GiftList } from "./gifs/GiftList";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
	const { gifs, previousTerms, handleSearch, handleTermClicked } = useGifs();
	return (
		<>
			<CustomHeader
				title="Buscador de Gifs"
				description="Descubre y comparte el gif perfecto"
			/>

			<SearchBar
				placeholder="Busca lo que quieras..."
				onQuery={handleSearch}
			/>

			<PreviousSearches
				searches={previousTerms}
				onLabelClicked={handleTermClicked}
			/>

			<GiftList gifs={gifs} />
		</>
	);
};
