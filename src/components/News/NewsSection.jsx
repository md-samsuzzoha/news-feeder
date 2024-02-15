/* eslint-disable react/prop-types */
import { dateConverter } from "../../utils/dateConverter";

export default function NewsSection({ news }) {
    if (news.length === 0) {
        return <div>No news found.</div>;
    }
    const topNews = news.splice(0, 2);
    return (
        <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
            <div className="col-span-12 grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-4">
                    <a href="#">
                        <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                            {topNews[0].title}
                        </h3>
                    </a>
                    <p className="text-base text-[#5C5955]">
                        {topNews[0].description}
                    </p>
                    <p className="mt-5 text-base text-[#5C5955]">
                        {dateConverter(topNews[0].publishedAt)}
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-8">
                    <img
                        className="w-full"
                        src={topNews[0].urlToImage}
                        alt="thumb"
                    />
                    <p className="mt-5 text-base text-[#5C5955]">
                        Illustration: Karolis Strautniekas
                    </p>
                </div>
            </div>
            <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
                <div className="col-span-12 md:col-span-6">
                    <a href="">
                        <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                            {topNews[1].title}
                        </h3>
                    </a>
                    <p className="text-base text-[#292219]">
                        {topNews[1].description}
                    </p>
                    <p className="mt-5 text-base text-[#5C5955]">
                        {dateConverter(topNews[1].publishedAt)}
                    </p>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <img
                        className="w-full"
                        src={topNews[1].urlToImage}
                        alt="thumb"
                    />
                </div>
            </div>

            {news.map((item) => (
                <div
                    key={`${item.source.id}-${item.source.name}-${item.author}-${item.publishedAt}`}
                    className="col-span-12 md:col-span-6 lg:col-span-4"
                >
                    <div className="col-span-12 md:col-span-4">
                        <a href="#">
                            <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                                {item.title}
                            </h3>
                        </a>
                        <p className="text-base text-[#292219]">
                            {item.description}
                        </p>
                        <p className="mt-5 text-base text-[#94908C]">
                            {dateConverter(item.publishedAt)}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
