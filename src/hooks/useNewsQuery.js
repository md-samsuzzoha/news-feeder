import { useContext, useEffect, useState } from "react";
import { CategoryContext, SearchContext } from "../context";

const useNewsQuery = () => {
    const [newsData, setNewsData] = useState([]);
    const { category } = useContext(CategoryContext);
    const { searchTerm } = useContext(SearchContext);

    const [loading, setLoading] = useState({
        state: false,
        message: "",
    });
    const [error, setError] = useState(null);

    const fetchNewsData = async (category) => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: "Fetching news data...",
            });

            const response = await fetch(
                `${import.meta.env.VITE_NEWS_API_URI}/top-headlines?category=${
                    category ? category : ""
                }`
            );

            if (!response.ok) {
                const errorMessage = `Fetching news data failed ${response.status}`;
                throw new error(errorMessage);
            }

            const data = await response.json();
            setNewsData(data?.articles);
        } catch (err) {
            setError(err);
        } finally {
            setLoading({
                ...loading,
                state: false,
                message: "",
            });
        }
    };
    const searchNewsData = async (searchTerm) => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: "Searching news data...",
            });

            const response = await fetch(
                `${import.meta.env.VITE_NEWS_API_URI}/search?q=${searchTerm}`
            );

            if (!response.ok) {
                const errorMessage = `Searching news data failed ${response.status}`;
                throw new error(errorMessage);
            }

            const data = await response.json();
            setNewsData(data?.result);
        } catch (err) {
            setError(err);
        } finally {
            setLoading({
                ...loading,
                state: false,
                message: "",
            });
        }
    };

    useEffect(() => {
        setLoading({
            ...loading,
            state: true,
            message: "Finding news...",
        });

        if (category) {
            fetchNewsData(category.toLowerCase());
        } else {
            fetchNewsData();
        }
    }, [category]);

    useEffect(() => {
        if (searchTerm) {
            setLoading({
                ...loading,
                state: true,
                message: "Searching news...",
            });
            searchNewsData(searchTerm);
        }
    }, [searchTerm]);

    return {
        newsData,
        error,
        loading,
    };
};

export default useNewsQuery;
