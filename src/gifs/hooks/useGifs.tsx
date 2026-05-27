import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

export const useGifs = () => {
	const [gifs, setGifs] = useState<Gif[]>([]);
	const [previousTerms, setPreviousTerms] = useState<string[]>([]);

	const gifsCache = useRef<Record<string, Gif[]>>({});

	const handleTermClicked = async (term: string) => {
		console.log("🚀 ~ handleTermClicked ~ term:", term);

		if (gifsCache.current[term]) {
			setGifs(gifsCache.current[term]);
			return;
		}

		const gifs = await getGifsByQuery(term);

		gifsCache.current[term] = gifs;
		setGifs((prev) => [...gifs, ...prev]);
	};

	const handleSearch = async (query: string) => {
		query = query.trim().toLowerCase();

		if (query.length === 0) return;

		if (previousTerms.includes(query)) return;

		setPreviousTerms((prev) => [query, ...prev].slice(0, 8));

		console.log("🚀 ~ handleSearch ~ term:", query);

		const gifs = await getGifsByQuery(query);
		console.log({ gifs });

		setGifs((prev) => [...gifs, ...prev]);

		gifsCache.current[query] = gifs;
		console.log({ gifsCache });
	};

	return {
		// properties
		gifs,
		previousTerms,

		// Methods
		handleTermClicked,
		handleSearch,
	};
};
