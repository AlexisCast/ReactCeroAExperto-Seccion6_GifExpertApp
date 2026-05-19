import { useEffect, useState } from "react";

interface Props {
	placeholder?: string;
	onQuery?: (query: string) => void;
}

export const SearchBar = ({ placeholder = "Buscar...", onQuery }: Props) => {
	const [query, setQuery] = useState("");

	useEffect(() => {
		const timeOutId = setTimeout(() => {
			onQuery(query);
		}, 1000);

		return () => {
			clearTimeout(timeOutId);
		};
	}, [query, onQuery]);

	const handleSearch = () => {
		onQuery(query);
		setQuery("");
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleSearch();
		}
	};

	return (
		<div className="search-container">
			<input
				type="text"
				placeholder={placeholder}
				value={query}
				onChange={(e) => {
					// console.log(e.target.value);
					setQuery(e.target.value);
				}}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						handleKeyDown(e);
					}
				}}
			/>
			<button onClick={handleSearch}>Buscar</button>
		</div>
	);
};
