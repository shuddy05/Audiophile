import React from "react";

export const OrderSummary = ({
  cartItems,
  subtotal,
  shipping,
  vat,
  grandTotal,
  onSubmit,
}) => {
  return (
    <div className="bg-white rounded-lg p-6 md:p-8 sticky top-8">
      <h2 className="text-lg font-bold tracking-wider mb-8">SUMMARY</h2>

      <div className="space-y-6 mb-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#F1F1F1] rounded flex items-center justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="flex-grow">
              <h4 className="font-bold text-[15px]">
                {item.name
                  ?.replace(/headphones|wireless|earphones|speaker/gi, "")
                  .trim()}
              </h4>
              <p className="text-black/50 text-sm">
                $ {item.price?.toLocaleString()}
              </p>
            </div>
            <span className="text-black/50 font-bold text-[15px]">
              x{item.quantity}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex justify-between">
          <span className="text-black/50 text-[15px]">TOTAL</span>
          <span className="font-bold text-lg">
            $ {subtotal.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-black/50 text-[15px]">SHIPPING</span>
          <span className="font-bold text-lg">$ {shipping}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-black/50 text-[15px]">VAT (INCLUDED)</span>
          <span className="font-bold text-lg">$ {vat.toLocaleString()}</span>
        </div>
      </div>

      <div className="flex justify-between mb-8">
        <span className="text-black/50 text-[15px]">GRAND TOTAL</span>
        <span className="font-bold text-lg text-[#D87D4A]">
          $ {grandTotal.toLocaleString()}
        </span>
      </div>

      <button
        onClick={onSubmit}
        className="w-full bg-[#D87D4A] cursor-pointer hover:bg-[#FBAF85] text-white py-4 font-bold text-[13px] tracking-wider transition-colors"
      >
        CONTINUE & PAY
      </button>
    </div>
  );
};
