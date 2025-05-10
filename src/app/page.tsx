"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type Instruction = {
  step?: string;
  note?: string;
};

type Product = {
  _id: string;
  title: string;
  name: string;
  price: number;
  discount: number;
  inStock: boolean;
  estimatedDelivery: number;
  shippingInformation: string;
  returnPolicy: string;
  images: any[];
  description?: {
    productDescription?: string;
    instruction?: Instruction[];
  };
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "handCraftProduct"]{
        _id,
        title,
        name,
        price,
        discount,
        inStock,
        estimatedDelivery,
        shippingInformation,
        returnPolicy,
        images,
        description {
          productDescription,
          instruction[] {
            step,
            note
          }
        }
      }`;

      try {
        const data = await client.fetch(query);
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="p-4">Loading products...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Handcrafted Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600 mb-2">{product.name}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {product.images?.map((img, idx) => (
                <img
                  key={idx}
                  src={urlFor(img).width(300).height(200).url()}
                  alt={`Product image ${idx + 1}`}
                  className="w-48 h-auto rounded object-cover"
                />
              ))}
            </div>

            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Discount:</strong> {product.discount}%</p>
            <p><strong>In Stock:</strong> {product.inStock ? "Yes" : "No"}</p>
            <p><strong>Estimated Delivery:</strong> {product.estimatedDelivery} days</p>
            <p><strong>Shipping:</strong> {product.shippingInformation}</p>
            <p><strong>Return Policy:</strong> {product.returnPolicy}</p>

            {/* Product Description */}
            {product.description?.productDescription && (
              <div className="mt-4">
                <h3 className="font-semibold text-lg">Product Description</h3>
                <p>{product.description.productDescription}</p>
              </div>
            )}

            {/* Nested Instructions */}
            {product.description?.instruction && product.description.instruction.length > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold text-lg">Instructions</h3>
                <ul className="list-disc list-inside space-y-2">
                  {product.description.instruction.map((ins, i) => (
                    <li key={i}>
                      {ins.step && <p><strong>Step:</strong> {ins.step}</p>}
                      {ins.note && <p className="text-sm text-gray-600"><strong>Note:</strong> {ins.note}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
