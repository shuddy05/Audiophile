import React, { useState } from "react";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";
// import SuccessModal from "../components/SuccessModal";
import { CheckCircle } from "lucide-react";

const CheckoutPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const subtotal = getCartTotal();
  const shipping = 50;
  const vat = subtotal * 0.2;
  const grandTotal = subtotal + shipping;

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessModal(true);
  };

  const handleBackToHome = () => {
    clearCart();
    setShowSuccessModal(false);
    navigate("/");
  };
  const SuccessModal = () => (
    <section>
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-[540px]  w-full p-8 md:p-12">
          <div className="w-16 h-16 bg-[#D87D4A] rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-2xl md:text-[32px] font-bold mb-4 ">
            THANK YOU
            <br />
            FOR YOUR ORDER
          </h2>

          <p className="text-black/50 text-[15px] mb-6">
            You will receive an email confirmation shortly.
          </p>

          <div className="mb-8 rounded-lg overflow-hidden">
            <div className="bg-[#F1F1F1] p-6">
              {cartItems.length > 0 && (
                <div className="flex items-center gap-4 pb-3 border-b border-black/10">
                  <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
                    <img
                      src={cartItems[0].image}
                      alt={cartItems[0].name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div className="">
                    <h4 className="font-bold text-[15px]">
                      {cartItems[0].name}
                    </h4>
                    <p className="text-black/50 text-sm">
                      $ {cartItems[0].price?.toLocaleString()}
                    </p>
                  </div>
                  <span className="text-black/50 font-bold text-[15px]">
                    x{cartItems[0].quantity}
                  </span>
                </div>
              )}

              {cartItems.length > 1 && (
                <p className="text-black/50 text-xs text-center pt-3">
                  and {cartItems.length - 1} other item(s)
                </p>
              )}
            </div>

            <div className="bg-black p-6">
              <p className="text-white/50 text-[15px] mb-2">GRAND TOTAL</p>
              <p className="text-white text-lg font-bold">
                $ {grandTotal.toLocaleString()}
              </p>
            </div>
          </div>
          <button
            onClick={handleBackToHome}
            className="w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-4 font-bold text-[13px] tracking-wider transition-colors"
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </section>
  );

  return (
    <div className="bg-[#F1F1F1] min-h-screen">
      <div className="max-w-[1110px] mx-auto px-6 py-8 md:py-16">
        <button
          onClick={() => navigate(-1)}
          className="text-black/50 hover:text-[#D87D4A] cursor-pointer mb-6 md:mb-10 text-[15px]"
        >
          Go Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-lg p-6 md:p-12">
            <h1 className="text-2xl md:text-[32px] font-bold mb-8 md:mb-10 tracking-wider">
              CHECKOUT
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <h3 className="text-[#D87D4A] text-[13px] font-bold tracking-wider mb-4">
                  BILLING DETAILS
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ibrahim moshood"
                      className="w-full px-6 py-4 border border-[#CFCFCF] rounded-lg focus:border-[#D87D4A] outline-none text-sm "
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ibrahim1@mail.com"
                      className="w-full px-6 py-4 border border-[#CFCFCF] rounded-lg focus:border-[#D87D4A] outline-none text-sm "
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+2348108879508"
                      className="w-full px-6 py-4 border border-[#CFCFCF] rounded-lg focus:border-[#D87D4A] outline-none text-sm"
                      required
                    />
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
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your address"
                      className="w-full px-6 py-4 border border-[#CFCFCF] rounded-lg focus:border-[#D87D4A] outline-none text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-2">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      placeholder="10001"
                      className="w-full px-6 py-4 border border-[#CFCFCF] rounded-lg focus:border-[#D87D4A] outline-none text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Enter address"
                      className="w-full px-6 py-4 border border-[#CFCFCF] rounded-lg focus:border-[#D87D4A] outline-none text-sm "
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="enter country"
                      className="w-full px-6 py-4 border border-[#CFCFCF] rounded-lg focus:border-[#D87D4A] outline-none text-sm "
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[#D87D4A] text-[13px] font-bold  mb-4">
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
                          name="eMoneyNumber"
                          value={formData.eMoneyNumber}
                          onChange={handleInputChange}
                          placeholder="238521993"
                          className="w-full px-6 py-4 border border-[#CFCFCF] rounded-lg focus:border-[#D87D4A] outline-none text-sm "
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold mb-2">
                          e-Money PIN
                        </label>
                        <input
                          type="text"
                          name="eMoneyPin"
                          value={formData.eMoneyPin}
                          onChange={handleInputChange}
                          placeholder="6891"
                          className="w-full px-6 py-4 border border-[#CFCFCF] rounded-lg focus:border-[#D87D4A] outline-none text-sm "
                        />
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
            </form>
          </div>

          <div className="lg:col-span-1">
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
                    <div className="">
                      <h4 className="font-bold text-[15px]">{item.name}</h4>
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
                  <span className="text-black/50 text-[15px]">
                    VAT (INCLUDED)
                  </span>
                  <span className="font-bold text-lg">
                    $ {vat.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex justify-between mb-8">
                <span className="text-black/50 text-[15px]">GRAND TOTAL</span>
                <span className="font-bold text-lg text-[#D87D4A]">
                  $ {grandTotal.toLocaleString()}
                </span>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#D87D4A] cursor-pointer hover:bg-[#FBAF85] text-white py-4 font-bold text-[13px] tracking-wider transition-colors"
              >
                CONTINUE & PAY
              </button>
            </div>
          </div>
        </div>
      </div>

      {showSuccessModal && <SuccessModal />}
    </div>
  );
};

export default CheckoutPage;
