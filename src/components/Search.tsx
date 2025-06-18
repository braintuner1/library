import React, { useState, useEffect } from 'react';

type Item = {
    id: number;
    title: string;
};

type SearchProps = {
    items: Item[];
};

const Search: React.FC<SearchProps> = ({ items }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Item[]>(items);

    useEffect(() => {
        // If the query is empty, show all items; otherwise filter the list.
        if (query.trim() === '') {
            setResults(items);
        } else {
            const lowerQuery = query.toLowerCase();
            setResults(
                items.filter((item) =>
                    item.title.toLowerCase().includes(lowerQuery)
                )
            );
        }
    }, [query, items]);

    return (
        <div className="p-4">
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border border-gray-300 rounded p-2 w-full"
            />
            <ul className="mt-4">
                {results.map((item) => (
                    <li key={item.id} className="border-b p-2">
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Search;