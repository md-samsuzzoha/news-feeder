import { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import NewsBoard from "./components/News/NewsBoard";
import { NewsContext } from "./context";

export default function Page() {
    const { loading } = useContext(NewsContext);

    return (
        <div>
            <Header />
            <main className="my-10 lg:my-14">
                <div className="container mx-auto grid grid-cols-12 gap-8">
                    {loading.state ? (
                        <div className="flex bg-gray-200 rounded-md p-8 w-96 mt-14 mx-auto">
                            <p className="text-center text-3xl text-black ">
                                {loading.message}
                            </p>
                        </div>
                    ) : (
                        <NewsBoard />
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
