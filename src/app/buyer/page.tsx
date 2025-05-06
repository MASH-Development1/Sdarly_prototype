import ProductCard from "./Components/ProductCard"

export default function Buyer() {
    return (
        <div className="w-full min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-50">
            <h1 className="text-2xl font-bold mb-8">Products</h1>
            <div className="bg-blue-500 w-full rounded-2xl h-60 px-8 py-4 mb-4 sm:mb-10">
                <img src="" alt="SDARLY Logo" className="h-8" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProductCard
                    imageUrl="/images/container.png"
                    title="Lorem Ipsum Dolor Sit Amet Consectetur"
                    subtitle="Lorrem asd Lorem ipsum dolor sit amet consectetur"
                    code="1344BPPS"
                    pricePerKg={500}
                    sellerName="Ahmed Omar"
                />
                <ProductCard
                    imageUrl="/images/container.png"
                    title="Lorem Ipsum Dolor Sit Amet Consectetur"
                    subtitle="Lorrem asd Lorem ipsum dolor sit amet consectetur"
                    code="1344BPPS"
                    pricePerKg={500}
                    sellerName="Ahmed Omar"
                />
                <ProductCard
                    imageUrl="/images/container.png"
                    title="Lorem Ipsum Dolor Sit Amet Consectetur"
                    subtitle="Lorrem asd Lorem ipsum dolor sit amet consectetur"
                    code="1344BPPS"
                    pricePerKg={500}
                    sellerName="Ahmed Omar"
                />
                <ProductCard
                    imageUrl="/images/container.png"
                    title="Lorem Ipsum Dolor Sit Amet Consectetur"
                    subtitle="Lorrem asd Lorem ipsum dolor sit amet consectetur"
                    code="1344BPPS"
                    pricePerKg={500}
                    sellerName="Ahmed Omar"
                />            </div>
        </div>
    );
}
