import Page from "./Page";
import { CategoryProvider, NewsProvider } from "./provider";
import SearchProvider from "./provider/SearchProvider";

export default function App() {
    return (
        <SearchProvider>
            <CategoryProvider>
                <NewsProvider>
                    <Page />
                </NewsProvider>
            </CategoryProvider>
        </SearchProvider>
    );
}
