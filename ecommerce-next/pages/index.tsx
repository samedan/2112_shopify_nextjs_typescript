import type { InferGetStaticPropsType } from "next";
import { getAllProducts } from "@framework/product";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";
import { ProductCard } from "@components/product";
import { Grid, Hero, Marquee } from "@components/ui";

export async function getStaticProps() {
  const config = getConfig();

  const products = await getAllProducts(config);

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60, // 4 hours
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        headline="Hero"
        description="Halvah oat cake sweet roll marshmallow muffin halvah. Tootsie roll liquorice dragée chocolate dragée jelly-o. Bear claw chocolate cake chocolate marshmallow candy canes wafer macaroon muffin. Chocolate cake cake tiramisu cheesecake biscuit jelly beans liquorice. Sugar plum topping jujubes apple pie dessert sugar plum apple pie. Brownie halvah lollipop sesame snaps ice cream icing gummies jelly. Dessert macaroon cake caramels cotton candy croissant. Toffee wafer wafer cheesecake tart chocolate cake brownie pie danish. Cotton candy jujubes toffee halvah croissant. Jelly beans apple pie chocolate bar candy canes tiramisu biscuit gummies. Chocolate cake ice cream marshmallow cookie pie powder biscuit gummies. Jelly beans brownie sesame snaps cake bonbon soufflé sesame snaps. Pastry "
      />
      <Marquee>
        {products.slice(0, 3).map((product) => (
          <ProductCard variant="slim" key={product.id} product={product} />
        ))}
      </Marquee>
      <Grid layout="B">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Marquee variant="secondary">
        {products.slice(0, 3).map((product) => (
          <ProductCard variant="slim" key={product.id} product={product} />
        ))}
      </Marquee>
    </>
  );
}

// Provide a Layout to this page
Home.Layout = Layout;
