export type Video = {
  productId?: string | undefined;
  userId?: number;
  userUsername?: string | undefined;
  productThumbnail?: string | undefined;
  productTitle?: string | undefined;
  productLikes?: string | undefined;
  productViews?: string | undefined;
  productDescription?: string | undefined;
  productCategory?: string | undefined;
  productPrice?: number | undefined;
  productIsDiscount?: boolean | undefined;
  productDiscount?: number | undefined;
};

export type Data = {
  data: Video[];
  loading: boolean;
  error: string | null;
};
