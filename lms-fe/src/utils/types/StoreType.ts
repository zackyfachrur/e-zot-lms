export type Video = {
  product_id?: string | undefined;
  user_id?: number | undefined;
  product_thumbnail?: string | undefined;
  product_title?: string | undefined;
  product_likes?: string | undefined;
  product_views?: string | undefined;
  product_description?: string | undefined;
  product_category?: string | undefined;
  product_price?: number | undefined;
  product_isdiscount?: boolean | undefined;
  product_discount?: number | undefined;
};

export type Data = {
  data: Video[];
  loading: boolean;
  error: string | null;
};
