/* eslint-disable react/prop-types */
import { dateConverter } from "../../utils/dateConverter";

export default function HeadlinesSection({ news }) {
    if (news.length === 0) {
        return <div>No news found.</div>;
    }
    return (
        <div className="col-span-12 self-start xl:col-span-4">
            <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
                {news.map((item, i) => (
                    <div
                        key={`${item.source.id}-${item.source.name}-${item.author}-${item.publishedAt}`}
                        className="col-span-12 mb-6 md:col-span-8"
                    >
                        {i == 0 && (
                            <img
                                className="w-full"
                                src={item.urlToImage}
                                alt="thumb"
                            />
                        )}
                        <div className="col-span-12 mt-6 md:col-span-4">
                            <a href="#">
                                <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
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
        </div>
    );
}
