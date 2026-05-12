import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import PreviousSearches from "./gifs/PreviousSearches";

import { mockGifs } from "./mock-data/gifs.mock";
import { GiftList } from "./gifs/GiftList";

export const GifsApp = () => {
	return (
		<>
			<CustomHeader
				title="Buscador de Gifs"
				description="Descubre y comparte el gif perfecto"
			/>

			<SearchBar placeholder="Busca lo que quieras..." />

			<PreviousSearches searches={["Goku", "Dragon Ball Z"]} />

			<GiftList gifs={mockGifs} />
		</>
	);
};
