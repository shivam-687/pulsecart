
import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import { getStore } from "@/actions/get-store";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async ({
  params
}: {
  params: {
    slug: string
  }
}) => {
  const store = await getStore(params.slug)
  const products = await getProducts(store.id, { isFeatured: true });
  const billboard = await getBillboards(store.id);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        {
          billboard[0] && <Billboard
            data={billboard[0]}
          />
        }
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;
