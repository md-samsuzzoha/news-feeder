/* eslint-disable react/prop-types */
import { NewsContext } from "../context";
import useNewsQuery from "../hooks/useNewsQuery";

const NewsProvider = ({ children }) => {
    const { newsData, error, loading } = useNewsQuery();

    return (
        <NewsContext.Provider
            value={{
                newsData,
                error,
                loading,
            }}
        >
            {children}
        </NewsContext.Provider>
    );
};

export default NewsProvider;
