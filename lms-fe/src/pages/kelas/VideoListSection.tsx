import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/Hooks";
import { fetchVideos } from "@store/VideoAsyncThunk";
// import { LocalStorage } from "@type/PageType";
import { Video } from "@type/StoreType";
// import { Link } from "react-router-dom";
import ImageWithFallbacks from "@components/img/ImageWithFallback";

const VideoListSection = () => {
  // const [category, setCategory] = useState("");
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.videos);

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  // const handleCategoryClick = (selectedCategory: string) => {
  //   setCategory(selectedCategory);
  // };

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-8 p-8 text-start">
        <div className="xl:grid-cols-3 sm:grid-cols-2 fr grid gap-4">
          {data.map((content: Video) => {
            const isDiscount = content.product_isdiscount == true;
            const discount =
              (content.product_price ?? 0) * (content.product_discount ?? 0);
            return (
              <div className="flex flex-col bg-white w-[455px]">
                <div className="cursor-pointer hover:opacity-80">
                  <span className="select-none absolute my-3 text-sm mx-3 bg-amber-300 px-2 text-white font-bold py-1">
                    {content.product_category}
                  </span>
                  {/* Images */}
                  <ImageWithFallbacks
                    source={content.product_thumbnail}
                    width={455}
                    className="h-[250px] object-cover"
                  />
                </div>
                <div className="px-3 py-4">
                  <h2 className="font-bold text-xl">{content.product_title}</h2>
                  <p className="text-sm font-semibold">
                    {content.product_description}
                  </p>
                </div>

                {/* Price, Likes and Views */}
                <div className="flex justify-between flex-row px-3">
                  <span>
                    <ul className="flex flex-row gap-1 font-semibold">
                      <li>
                        <i className="ri-eye-line text-gray-400"></i> {content.product_views}
                      </li>
                      <li>
                        <i className="ri-heart-fill text-red-700"></i>{" "}
                        {content.product_likes}
                      </li>
                    </ul>
                  </span>
                  {isDiscount ? (
                    <ul className="flex flex-row gap-1 font-semibold">
                      <p>Rp.</p>
                      <li className="line-through">{content.product_price} </li>
                      <li className="underline-none">{discount}</li>
                    </ul>
                  ) : (
                    <span className="font-semibold">
                      Rp. {content.product_price}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default VideoListSection;
