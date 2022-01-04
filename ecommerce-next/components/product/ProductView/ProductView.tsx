import cn from "classnames";
import { FC, useState } from "react";
import s from "./ProductView.module.css";
import { Button, Container } from "@components/ui";
import Image from "next/image";
import { Product } from "@common/types/product";
import { ProductSlider, Swatch } from "@components/product";
import { Choices, getVariant } from "../helpers";
import { useUI } from "@components/ui/context";
import useAddItem from "@framework/cart/use-add-item";
import { useApiProvider } from "@common";

interface Props {
  product: Product;
}

const ProductView: FC<Props> = ({ product }) => {
  const [choices, setChoices] = useState<Choices>({});
  const { hooks, fetcher } = useApiProvider();

  // console.log(api);
  const { openSidebar } = useUI();
  const addItem = useAddItem();

  const variant = getVariant(product, choices);

  const addToCart = () => {
    try {
      const item = {
        productId: String(product.id),
        variantId: variant?.id,
        variantOptions: variant?.options,
      };

      const output = addItem(item);
      alert(JSON.stringify(output));
      openSidebar();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <div className={cn(s.root, "fit", "mb-5")}>
        <div className={cn(s.productDisplay, "fit")}>
          <div className={s.nameBox}>
            <h1 className={s.name}>{product.name}</h1>
            <div className={s.price}>
              {product.price.value}
              {` `}
              {product.price.currencyCode}
            </div>
          </div>
          <ProductSlider>
            {product.images.map((image) => (
              <div className={s.imageContainer} key={image.url}>
                <Image
                  className={s.img}
                  src={image.url}
                  alt={image.alt}
                  width={1050}
                  height={1050}
                  quality="85"
                />
              </div>
            ))}
          </ProductSlider>
        </div>
        <div className={s.sidebar}>
          <section>
            {product.options.map((option) => (
              <div className="pb-4" key={`${product.id}-${option.displayName}`}>
                <h2 className="uppercase font-medium">{option.displayName}</h2>
                <div className="flex flex-row py-4">
                  {option.values.map((optValue) => {
                    // small, large, wide, m, s etc
                    const activeChoice =
                      choices[option.displayName.toLowerCase()];

                    return (
                      <Swatch
                        key={`${option.id}-${optValue.label}`}
                        label={optValue.label}
                        color={optValue.hexColor}
                        variant={option.displayName}
                        active={optValue.label.toLowerCase() === activeChoice}
                        onClick={() => {
                          setChoices({
                            ...choices,
                            [option.displayName.toLowerCase()]:
                              optValue.label.toLowerCase(),
                          });
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </section>
          <div className="pb-14 break-words w-full max-w-xl text-lg">
            {product.description}
          </div>
          <div>
            <Button className={s.button} onClick={addToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductView;
