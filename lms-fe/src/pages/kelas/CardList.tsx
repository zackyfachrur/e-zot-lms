import { Video } from "@type/StoreType";
import { useAppDispatch, useAppSelector } from "@store/Hooks";
import { fetchVideos } from "@store/VideoAsyncThunk";
import { useEffect } from "react";
import ImageWithFallbacks from "@components/fallback/ImageWithFallback";

export default function CardList() {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.videos);

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  return (
    <div className="xl:grid-cols-3 sm:grid-cols-2 fr grid gap-4">
      {data.map((content: Video, index) => {
        const isDiscount = content.productIsDiscount === true;
        const price = content.productPrice ?? 0;
        const discountRate = content.productDiscount ?? 0;
        const discount = price * discountRate;

        const title = content.productTitle || "Tanpa Judul";
        const displayedTitle = title.length < 26 ? title.slice(0, 23) : title.slice(0, 20) + "...";

        return (
          <div key={content.productId || index} className="flex flex-col bg-white w-[460px] rounded-2xl overflow-clip">
            <div className={`cursor-pointer bg-white`}>
              <span className="select-none absolute my-3 text-sm mx-3 bg-amber-300 px-2 text-white font-bold py-1">
                {content.productCategory}
              </span>
              {/* Images */}
              <ImageWithFallbacks
                source={content.productThumbnail || "/fallback-image.jpg"}
                width={460}
                className="h-[240px] object-cover w-full hover:scale-105 rounded-t-2xl hover:grayscale"
              />
              {/* View and Likes */}
              <div className="flex flex-row justify-between px-4 absolute z-10 w-[49%] -mt-8 text-white">
                <p className="text-white font-semibold text-sm">12 Menit yang lalu</p>
                <ul className="flex flex-row gap-1 font-semibold text-sm">
                  <li>
                    <i className="ri-eye-line text-white"></i> {content.productViews}
                  </li>
                  <li>
                    <i className="ri-heart-fill text-red-700"></i> {content.productLikes}
                  </li>
                </ul>
              </div>
              {/* End View and Likes */}
            </div>

            {/* Profile */}
            <div className="flex flex-col justify-between px-4 py-4">
              <div className="flex flex-row mt-2 gap-2">
                <img
                  src="/thumbnail/profile-1.png"
                  width={70}
                  alt="Profile Icon"
                  className="rounded-full h-[70px]"
                />
                <div className="flex-col">
                  <h2 className="font-bold text-lg">E-book {displayedTitle}</h2>
                  <h3 className="font-semibold text-sm">Mochamed Said bin Abdul Aziz</h3>
                  {/* Pricing and Upload Time */}
                  <div>
                    {isDiscount ? (
                      <ul className="flex flex-row gap-1 font-semibold italic text-sm">
                        <li className="line-through">Rp. {price}</li>
                        <li className="underline-none">Rp. {discount}</li>
                      </ul>
                    ) : (
                      <span className="font-semibold text-sm">Rp. {price}</span>
                    )}
                  </div>
                  {/* End Pricing and Upload Time */}
                </div>
              </div>
              {/* End Profile */}
              <div className="flex flex-row justify-between gap-2 mt-2">
                <button className="w-full bg-amber-300 hover:bg-amber-400 text-white font-semibold py-2 cursor-pointer flex justify-between px-4 rounded-md">
                  Bookmark <i className="ri-bookmark-line"></i>
                </button>
                <button className="flex justify-between px-4 w-full bg-gray-800 text-white font-semibold py-2 cursor-pointer hover:bg-gray-900 rounded-md">
                  Lihat Course <i className="ri-arrow-right-long-line"></i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}