import { useContext, useState } from "react";
import SearchIcon from "../../assets/icons/search.svg";
import { SearchContext } from "../../context";
import { useDebounce } from "../../hooks";

export default function Search() {
    const [isExpanded, setIsExpanded] = useState(false);

    const { setSearchTerm } = useContext(SearchContext);

    const doSearch = useDebounce((term) => {
        setSearchTerm(term);
    }, 500);

    function handleChange(e) {
        const value = e.target.value;
        doSearch(value);
    }

    function handleSearchIconClick(e) {
        e.preventDefault();
        setIsExpanded(!isExpanded);
    }

    function handleOnSubmit(e) {
        e.preventDefault();
        const value = e.target.value;
        doSearch(value);
    }

    return (
        <form action="#" onSubmit={handleOnSubmit}>
            <div
                className={`flex items-center space-x-2 py-2 px-3 group transition-all border-b border-white/50 ${
                    isExpanded ? "bg-black/30 border-b-0 rounded-md" : ""
                }`}
            >
                <input
                    className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search"
                    placeholder="Search..."
                    onChange={handleChange}
                />
                <button type="submit">
                    <img onClick={handleSearchIconClick} src={SearchIcon} />
                </button>
            </div>
        </form>
    );
}
