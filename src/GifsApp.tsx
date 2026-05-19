import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import PreviousSearches from "./gifs/PreviousSearches";

import { mockGifs } from "./mock-data/gifs.mock";
import { GiftList } from "./gifs/GiftList";
import { useState } from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";

export const GifsApp = () => {
	const [previousTerms, setPreviousTerms] = useState(["dragon ball z"]);

	const handleTermClicked = (term: string) => {
		console.log("🚀 ~ handleTermClicked ~ term:", term);
	};

	const handleSearch = async (query: string) => {
		query = query.trim().toLowerCase();

		if (query.length === 0) return;

		if (previousTerms.includes(query)) return;

		setPreviousTerms((prev) => [query, ...prev].slice(0, 8));

		console.log("🚀 ~ handleSearch ~ term:", query);

		const gifs = await getGifsByQuery(query);
		console.log({ gifs });
	};

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

			<GiftList gifs={mockGifs} />
		</>
	);
};
