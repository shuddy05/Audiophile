import React, { useState } from "react";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";
import { OrderSummary } from "../components/OrderSUmmary";
import { SuccessModal } from "../components/SuccessModal";
import { checkoutSchema } from "../utils/FormValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const CheckoutPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
    context: { paymentMethod },
  });

  const handleCheckout = (data) => {
    setShowSuccessModal(true);

    console.log(data);
  };

  const subtotal = getCartTotal();
  const shipping = 50;
  const vat = subtotal * 0.2;
  const grandTotal = subtotal + shipping;

  const handleBackToHome = () => {
    clearCart();
    setShowSuccessModal(false);
    navigate("/");
  };

  return (
    <div className="bg-[#F1F1F1] min-h-screen">
      <div className="max-w-[1110px] mx-auto px-6 py-8 md:py-16">
        <button
          onClick={() => navigate(-1)}
          className="text-black/50 hover:text-[#D87D4A] mb-6 md:mb-10 text-[15px]"
        >
          Go Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-lg p-6 md:p-12">
            <h1 className="text-2xl md:text-[32px] font-bold mb-8 md:mb-10 tracking-wider"></h1>

            <form onSubmit={handleSubmit(handleCheckout)}>
              <div className="mb-8">
                <h3 className="text-[#D87D4A] text-[13px] font-bold tracking-wider mb-4">
                  BILLING DETAILS
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold mb-2">Name</label>
                    <input
                      type="text"
                      {...register("name")}
                      placeholder="Ibrahim moshood"
                      className={`w-full px-6 py-4 border rounded-lg focus:border-[#D87D4A] outline-none text-sm font-bold ${
                        errors.name ? "border-red-500" : "border-[#CFCFCF]"
                      }`}
                    />
                    {errors.name && (
                      <small className="text-red-500">
                        {errors.name.message}
                      </small>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="ibrahim@mail.com"
                      className={`w-full px-6 py-4 border rounded-lg focus:border-[#D87D4A] outline-none text-sm font-bold ${
                        errors.email ? "border-red-500" : "border-[#CFCFCF]"
                      }`}
                    />

                    <small className="text-[#FC4747]  ">
                      {errors.email?.message}
                    </small>
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      {...register("phoneNumber")}
                      placeholder="+234-555-0136"
                      className={`w-full px-6 py-4 border rounded-lg focus:border-[#D87D4A] outline-none text-sm font-bold ${
                        errors.phone ? "border-red-500" : "border-[#CFCFCF]"
                      }`}
                    />
                    <small className="text-[#FC4747]  ">
                      {errors.phoneNumber?.message}
                    </small>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-[#D87D4A] text-[13px] font-bold tracking-wider mb-4">
                  SHIPPING INFO
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      {...register("address")}
                      placeholder="1137 Williams Avenue"
                      className={`w-full px-6 py-4 border rounded-lg focus:border-[#D87D4A] outline-none text-sm font-bold ${
                        errors.address ? "border-red-500" : "border-[#CFCFCF]"
                      }`}
                    />
                    <small className="text-[#FC4747]  ">
                      {errors.address?.message}
                    </small>
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-2">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      {...register("zipCode")}
                      placeholder="10001"
                      className={`w-full px-6 py-4 border rounded-lg focus:border-[#D87D4A] outline-none text-sm font-bold ${
                        errors.zipCode ? "border-red-500" : "border-[#CFCFCF]"
                      }`}
                    />
                    <small className="text-[#FC4747]  ">
                      {errors.zipCode?.message}
                    </small>
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-2">City</label>
                    <input
                      type="text"
                      {...register("city")}
                      placeholder="New York"
                      className={`w-full px-6 py-4 border rounded-lg focus:border-[#D87D4A] outline-none text-sm font-bold ${
                        errors.city ? "border-red-500" : "border-[#CFCFCF]"
                      }`}
                    />
                    <small className="text-[#FC4747]  ">
                      {errors.city?.message}
                    </small>
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      {...register("country")}
                      placeholder="United States"
                      className={`w-full px-6 py-4 border rounded-lg focus:border-[#D87D4A] outline-none text-sm font-bold ${
                        errors.country ? "border-red-500" : "border-[#CFCFCF]"
                      }`}
                    />
                    <small className="text-[#FC4747]  ">
                      {errors.country?.message}
                    </small>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[#D87D4A] text-[13px] font-bold tracking-wider mb-4">
                  PAYMENT DETAILS
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold mb-2">
                      Payment Method
                    </label>
                  </div>
                  <div className="space-y-4">
                    <label className="flex items-center px-6 py-4 border border-[#CFCFCF] rounded-lg cursor-pointer hover:border-[#D87D4A]">
                      <input
                        type="radio"
                        name="payment"
                        value="e-money"
                        checked={paymentMethod === "e-money"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5 accent-[#D87D4A]"
                      />
                      <span className="ml-4 font-bold text-sm">e-Money</span>
                    </label>

                    <label className="flex items-center px-6 py-4 border border-[#CFCFCF] rounded-lg cursor-pointer hover:border-[#D87D4A]">
                      <input
                        type="radio"
                        name="payment"
                        value="cash"
                        checked={paymentMethod === "cash"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5 accent-[#D87D4A]"
                      />
                      <span className="ml-4 font-bold text-sm">
                        Cash on Delivery
                      </span>
                    </label>
                  </div>

                  {paymentMethod === "e-money" && (
                    <>
                      <div>
                        <label className="block text-xs font-bold mb-2">
                          e-Money Number
                        </label>
                        <input
                          type="text"
                          {...register("eMoneyNumber")}
                          placeholder="238521993"
                          className={`w-full px-6 py-4 border rounded-lg focus:border-[#D87D4A] outline-none text-sm font-bold ${
                            errors.eMoneyNumber
                              ? "border-red-500"
                              : "border-[#CFCFCF]"
                          }`}
                        />
                        <small className="text-[#FC4747]  ">
                          {errors.eMoneyNumber?.message}
                        </small>
                      </div>

                      <div>
                        <label className="block text-xs font-bold mb-2">
                          e-Money PIN
                        </label>
                        <input
                          type="text"
                          name="eMoneyPin"
                          {...register("eMoneyPin")}
                          placeholder="6891"
                          className={`w-full px-6 py-4 border rounded-lg focus:border-[#D87D4A] outline-none text-sm font-bold ${
                            errors.eMoneyPin
                              ? "border-red-500"
                              : "border-[#CFCFCF]"
                          }`}
                        />
                        <small className="text-[#FC4747]  ">
                          {errors.eMoneyPin?.message}
                        </small>
                      </div>
                    </>
                  )}

                  {paymentMethod === "cash" && (
                    <div className="md:col-span-2 flex gap-4 items-start">
                      <p className="text-black/50 text-[15px]">
                        The 'Cash on Delivery' option enables you to pay in cash
                        when our delivery courier arrives at your residence.
                        Just make sure your address is correct so that your
                        order will not be cancelled.
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <button type="submit" id="checkout-submit-btn" className="hidden">
                Submit
              </button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <OrderSummary
              cartItems={cartItems}
              subtotal={subtotal}
              shipping={shipping}
              vat={vat}
              grandTotal={grandTotal}
              onSubmit={() =>
                document.getElementById("checkout-submit-btn").click()
              }
            />
          </div>
        </div>
      </div>

      {showSuccessModal && (
        <SuccessModal
          cartItems={cartItems}
          grandTotal={grandTotal}
          onBackToHome={handleBackToHome}
        />
      )}
    </div>
  );
};

export default CheckoutPage;
