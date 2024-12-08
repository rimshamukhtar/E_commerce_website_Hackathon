import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

export default function Sales() {
  return (
    <div className=" min-h-screen p-4">
      <div className="max-w-6xl mx-auto bg-white  rounded-lg">
        {/* Header */}
        <div className="bg-gray-200 px-4 py-2 text-center text-sm">
          Free Delivery applies to orders of ₹ 14,000.00 or more.{" "}
          <Link href="/checkout_page" className="underline">
            View details
          </Link>
        </div>

        {/* Main Content: Bag and Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
          {/* Bag Section (Left) */}
          <div className="lg:col-span-2">
            <h1 className="text-xl font-semibold mb-4">Bag</h1>
            <div className="space-y-4">
              {/* Item 1 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src="/salesman.png"
                    alt="Nike Shirt"
                    width={150}
                    height={150}
                    className="w-48 h-48 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">Nike Dri-FIT ADV TechKnit Ultra</p>
                    <p className="text-sm text-gray-600">
                      Men's Short-Sleeve Running Top
                    </p>
                    <p className="text-sm text-gray-600">Ashen Slate/Cobalt Bliss</p>
                    <p className="text-sm text-gray-600">Size: L | Quantity: 1</p>
                    <div className="flex gap-3 mt-4">
                    <FaRegHeart  className="w-6 h-6"/>
                    <FaTrashCan className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <p className="font-medium">MRP: ₹ 3,895.00</p>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-between pt-24">
                <div className="flex items-center gap-4 ">
                  <img
                    src="/salesshose.png"
                    alt="Nike Shoes"
                    className="w-48 h-48 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">Nike Air Max 97 SE</p>
                    <p className="text-sm text-gray-600">Men's Shoes</p>
                    <p className="text-sm text-gray-600">
                      Flat Pewter/Light Bone/Black/White
                    </p>
                    <p className="text-sm text-gray-600">Size: 8 | Quantity: 1</p>
                    <div className="flex gap-3 mt-4">
                    <FaRegHeart  className="w-6 h-6"/>
                    <FaTrashCan className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <p className="font-medium">MRP: ₹ 16,995.00</p>
               
              </div>
             
            </div>
          </div>

          {/* Summary Section (Right) */}
          <div className=" p-6 rounded-lg ">
            <h2 className="text-xl font-semibold mb-4">Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>₹ 20,890.00</p>
              </div>
              <div className="flex justify-between">
                <p>Estimated Delivery & Handling</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="flex justify-between font-semibold">
                <p>Total</p>
                <p>₹ 20,890.00</p>
              </div>
            </div>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-full">
              Member Checkout
            </button>
          </div>
        </div>

       
      </div>
    </div>
  );
}