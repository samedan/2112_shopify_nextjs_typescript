import { ImageEdge, MoneyV2, Product as ShopifyProduct } from "../schema";
import { Product } from "@common/types/product";

const normalizeProductImages = ({ edges }: { edges: Array<ImageEdge> }) =>
  edges.map(({ node: { originalSrc: url, ...rest } }) => ({
    url: `/images/${url}`,
    ...rest,
  }));

const normalizeProductPrice = ({ currencyCode, amount }: MoneyV2) => ({
  // transform string to number
  value: +amount,
  currencyCode,
});

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    images: imageConnection,
    priceRange,
    description,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    vendor,
    description,
    images: normalizeProductImages(imageConnection),
    // (Title) Cool Hat -> cool-hat (Handle)
    path: `/${handle}`,
    // replace beggining and ending slashes with ""
    slug: handle.replace(/^\/+|\/+$/g, ""),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    ...rest,
  };

  return product;
}
