import { useContext } from "react";
import { NewsContext } from "../../context";
import TopHeadlines from "./HeadlinesSection";
import News from "./NewsSection";
export default function NewsBoard() {
    const { newsData } = useContext(NewsContext);
    let newsForTopHeadlines = [];

    if (newsData.length === 0) {
        return (
            <div className="flex bg-gray-200 rounded-md p-8 w-96 mt-14 mx-auto">
                <p className="text-center text-3xl text-black ">
                    No results found.
                </p>
            </div>
        );
    } else if (newsData.length > 15) {
        newsForTopHeadlines = newsData.splice(newsData.length - 7, 7);
    } else if (newsData.length > 9) {
        newsForTopHeadlines = newsData.splice(newsData.length - 5, 5);
    } else {
        newsForTopHeadlines = newsData.splice(newsData.length - 2, 2);
    }

    return (
        <>
            {newsData.length > 0 && <News news={newsData} />}
            {newsForTopHeadlines.length > 0 && (
                <TopHeadlines news={newsForTopHeadlines} />
            )}
        </>
    );
}
