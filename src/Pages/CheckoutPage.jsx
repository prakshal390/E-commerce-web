import React, { useContext, useMemo, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { CartContext } from "../Context/CartContext";
import { products } from "../assets/asset/assets";
import {
  FaMapMarkerAlt,
  FaMobileAlt,
  FaMoneyBillWave,
  FaCreditCard,
  FaUniversity,
  FaCheckCircle,
} from "react-icons/fa";

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);

  // ================= FORM STATE =================
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    alternatePhone: "",
    address: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
  });

  const [paymentMethod, setPaymentMethod] = useState("upi");

  // UPI / Card / NetBanking ke liye alag state
  const [upiId, setUpiId] = useState("");
  const [cardData, setCardData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [bankName, setBankName] = useState("");

  // ================= HANDLE INPUTS =================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // ================= CART SUMMARY CALCULATION =================
  const checkoutData = useMemo(() => {
    let summaryItems = [];
    let totalPrice = 0;

    for (let i = 0; i < cartItems.length; i++) {
      const cartProduct = cartItems[i];

      const singleProduct = products.find(
        (item) =>
          item._id === cartProduct.productId || item.id === cartProduct.productId
      );

      if (!singleProduct) continue;

      const productTitle = singleProduct.name || singleProduct.title || "No Title";

      let productImage = "";
      if (Array.isArray(singleProduct.image)) {
        productImage = singleProduct.image[0];
      } else {
        productImage = singleProduct.image;
      }

      if (!productImage) {
        productImage = "https://via.placeholder.com/150";
      }

      const productPrice = singleProduct.price || 0;

      for (let j = 0; j < cartProduct.sizes.length; j++) {
        const sizeItem = cartProduct.sizes[j];
        const subTotal = productPrice * sizeItem.qty;
        totalPrice += subTotal;

        summaryItems.push({
          id: `${cartProduct.productId}-${sizeItem.size}-${j}`,
          title: productTitle,
          image: productImage,
          price: productPrice,
          size: sizeItem.size,
          qty: sizeItem.qty,
          subtotal: subTotal,
        });
      }
    }

    const shippingCharge = totalPrice > 999 ? 0 : 49;
    const platformFee = totalPrice > 0 ? 9 : 0;
    const discount = totalPrice > 1500 ? 150 : 0;
    const finalTotal = totalPrice + shippingCharge + platformFee - discount;

    return {
      summaryItems,
      totalPrice,
      shippingCharge,
      platformFee,
      discount,
      finalTotal,
    };
  }, [cartItems]);

  // ================= PLACE ORDER =================
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // basic validation
    if (checkoutData.summaryItems.length === 0) {
      alert("Cart empty hai. Pehle products add karo.");
      return;
    }

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.pincode
    ) {
      alert("Please saari required address details fill karo.");
      return;
    }

    if (paymentMethod === "upi" && !upiId) {
      alert("Please UPI ID enter karo.");
      return;
    }

    if (paymentMethod === "card") {
      if (
        !cardData.cardName ||
        !cardData.cardNumber ||
        !cardData.expiry ||
        !cardData.cvv
      ) {
        alert("Please card details complete fill karo.");
        return;
      }
    }

    if (paymentMethod === "netbanking" && !bankName) {
      alert("Please bank select karo.");
      return;
    }

    alert("Order placed successfully 🎉");
  };

  // ================= EMPTY CART UI =================
  if (checkoutData.summaryItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />

        <div className="max-w-6xl mx-auto w-full px-4 py-8 flex-1">
          <div className="bg-white rounded-3xl border shadow-sm p-8 md:p-12 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <FaCheckCircle className="text-3xl text-gray-400" />
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Checkout Page
            </h1>

            <p className="text-gray-500 mt-3">
              Aapka cart empty hai. Pehle products cart me add karo, phir checkout
              yaha show hoga.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 flex flex-col">
      <Header />

      <div className="max-w-7xl mx-auto w-full px-4 py-6 md:py-8 flex-1">
        {/* PAGE HEADING */}
        <div className="mb-8">
          <p className="text-sm font-medium text-orange-600 mb-2">
            Secure Checkout
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Complete Your Order
          </h1>
          <p className="text-gray-500 mt-2">
            Address details fill karo, payment method select karo aur order place
            karo.
          </p>
        </div>

        {/* MAIN GRID */}
        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* ================= LEFT SIDE ================= */}
            <div className="xl:col-span-2 space-y-6">
              {/* ADDRESS CARD */}
              <div className="bg-white/90 backdrop-blur rounded-3xl border shadow-sm overflow-hidden">
                <div className="p-5 md:p-6 border-b bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                  <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                    <FaMapMarkerAlt />
                    Address Details
                  </h2>
                  <p className="text-sm text-white/90 mt-1">
                    Delivery ke liye complete address details enter karein.
                  </p>
                </div>

                <div className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email"
                      className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-2">
                      Alternate Phone
                    </label>
                    <input
                      type="text"
                      name="alternatePhone"
                      value={formData.alternatePhone}
                      onChange={handleChange}
                      placeholder="Enter alternate number"
                      className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-sm font-semibold text-gray-700 block mb-2">
                      Full Address *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="House no, street, area..."
                      rows="4"
                      className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-2">
                      Landmark
                    </label>
                    <input
                      type="text"
                      name="landmark"
                      value={formData.landmark}
                      onChange={handleChange}
                      placeholder="Nearby landmark"
                      className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter city"
                      className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Enter state"
                      className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-2">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="Enter pincode"
                      className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-sm font-semibold text-gray-700 block mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="Enter country"
                      className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                </div>
              </div>

              {/* PAYMENT CARD */}
              <div className="bg-white/90 backdrop-blur rounded-3xl border shadow-sm overflow-hidden">
                <div className="p-5 md:p-6 border-b bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white">
                  <h2 className="text-xl md:text-2xl font-bold">
                    Payment Method
                  </h2>
                  <p className="text-sm text-white/90 mt-1">
                    Apna preferred payment option select karein.
                  </p>
                </div>

                <div className="p-5 md:p-6 space-y-4">
                  {/* PAYMENT OPTIONS */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label
                      className={`border rounded-2xl p-4 cursor-pointer transition ${
                        paymentMethod === "upi"
                          ? "border-orange-500 bg-orange-50"
                          : "border-gray-200 hover:border-orange-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="paymentMethod"
                          checked={paymentMethod === "upi"}
                          onChange={() => setPaymentMethod("upi")}
                        />
                        <FaMobileAlt className="text-xl text-orange-500" />
                        <div>
                          <p className="font-semibold text-gray-800">UPI</p>
                          <p className="text-sm text-gray-500">
                            Paytm / PhonePe / GPay
                          </p>
                        </div>
                      </div>
                    </label>

                    <label
                      className={`border rounded-2xl p-4 cursor-pointer transition ${
                        paymentMethod === "card"
                          ? "border-orange-500 bg-orange-50"
                          : "border-gray-200 hover:border-orange-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="paymentMethod"
                          checked={paymentMethod === "card"}
                          onChange={() => setPaymentMethod("card")}
                        />
                        <FaCreditCard className="text-xl text-orange-500" />
                        <div>
                          <p className="font-semibold text-gray-800">
                            Credit / Debit Card
                          </p>
                          <p className="text-sm text-gray-500">
                            Visa / Mastercard / RuPay
                          </p>
                        </div>
                      </div>
                    </label>

                    <label
                      className={`border rounded-2xl p-4 cursor-pointer transition ${
                        paymentMethod === "cod"
                          ? "border-orange-500 bg-orange-50"
                          : "border-gray-200 hover:border-orange-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="paymentMethod"
                          checked={paymentMethod === "cod"}
                          onChange={() => setPaymentMethod("cod")}
                        />
                        <FaMoneyBillWave className="text-xl text-orange-500" />
                        <div>
                          <p className="font-semibold text-gray-800">
                            Cash on Delivery
                          </p>
                          <p className="text-sm text-gray-500">
                            Pay when order arrives
                          </p>
                        </div>
                      </div>
                    </label>

                    <label
                      className={`border rounded-2xl p-4 cursor-pointer transition ${
                        paymentMethod === "netbanking"
                          ? "border-orange-500 bg-orange-50"
                          : "border-gray-200 hover:border-orange-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="paymentMethod"
                          checked={paymentMethod === "netbanking"}
                          onChange={() => setPaymentMethod("netbanking")}
                        />
                        <FaUniversity className="text-xl text-orange-500" />
                        <div>
                          <p className="font-semibold text-gray-800">
                            Net Banking
                          </p>
                          <p className="text-sm text-gray-500">
                            Select your bank
                          </p>
                        </div>
                      </div>
                    </label>
                  </div>

                  {/* CONDITIONAL PAYMENT FIELDS */}
                  {paymentMethod === "upi" && (
                    <div className="border border-orange-100 bg-orange-50 rounded-2xl p-4">
                      <label className="text-sm font-semibold text-gray-700 block mb-2">
                        Enter UPI ID *
                      </label>
                      <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="example@upi"
                        className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                      />
                    </div>
                  )}

                  {paymentMethod === "card" && (
                    <div className="border border-orange-100 bg-orange-50 rounded-2xl p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="text-sm font-semibold text-gray-700 block mb-2">
                          Name on Card *
                        </label>
                        <input
                          type="text"
                          value={cardData.cardName}
                          onChange={(e) =>
                            setCardData({ ...cardData, cardName: e.target.value })
                          }
                          placeholder="Enter card holder name"
                          className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="text-sm font-semibold text-gray-700 block mb-2">
                          Card Number *
                        </label>
                        <input
                          type="text"
                          value={cardData.cardNumber}
                          onChange={(e) =>
                            setCardData({
                              ...cardData,
                              cardNumber: e.target.value,
                            })
                          }
                          placeholder="1234 5678 9012 3456"
                          className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-semibold text-gray-700 block mb-2">
                          Expiry *
                        </label>
                        <input
                          type="text"
                          value={cardData.expiry}
                          onChange={(e) =>
                            setCardData({ ...cardData, expiry: e.target.value })
                          }
                          placeholder="MM/YY"
                          className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-semibold text-gray-700 block mb-2">
                          CVV *
                        </label>
                        <input
                          type="password"
                          value={cardData.cvv}
                          onChange={(e) =>
                            setCardData({ ...cardData, cvv: e.target.value })
                          }
                          placeholder="***"
                          className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                        />
                      </div>
                    </div>
                  )}

                  {paymentMethod === "netbanking" && (
                    <div className="border border-orange-100 bg-orange-50 rounded-2xl p-4">
                      <label className="text-sm font-semibold text-gray-700 block mb-2">
                        Select Bank *
                      </label>
                      <select
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                      >
                        <option value="">Choose your bank</option>
                        <option value="sbi">State Bank of India</option>
                        <option value="hdfc">HDFC Bank</option>
                        <option value="icici">ICICI Bank</option>
                        <option value="axis">Axis Bank</option>
                        <option value="pnb">Punjab National Bank</option>
                      </select>
                    </div>
                  )}

                  {paymentMethod === "cod" && (
                    <div className="border border-green-100 bg-green-50 rounded-2xl p-4">
                      <p className="text-green-700 font-medium">
                        Cash on Delivery selected. Aap delivery ke time payment kar
                        sakte ho.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ================= RIGHT SIDE / ORDER SUMMARY ================= */}
            <div className="xl:col-span-1">
              <div className="sticky top-24 bg-white rounded-3xl border shadow-sm overflow-hidden">
                <div className="p-5 md:p-6 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
                  <h2 className="text-xl md:text-2xl font-bold">Order Summary</h2>
                  <p className="text-sm text-white/80 mt-1">
                    Total items: {checkoutData.summaryItems.length}
                  </p>
                </div>

                <div className="p-5 md:p-6">
                  {/* PRODUCT LIST */}
                  <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1">
                    {checkoutData.summaryItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-3 border-b border-gray-100 pb-4"
                      >
                        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-100 border shrink-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            Size: {item.size}
                          </p>
                          <p className="text-sm text-gray-500">
                            Qty: {item.qty}
                          </p>
                          <p className="text-sm font-semibold text-green-600 mt-1">
                            ₹ {item.subtotal}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* PRICE DETAILS */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>₹ {checkoutData.totalPrice}</span>
                    </div>

                    <div className="flex items-center justify-between text-gray-600">
                      <span>Shipping</span>
                      <span>
                        {checkoutData.shippingCharge === 0
                          ? "Free"
                          : `₹ ${checkoutData.shippingCharge}`}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-gray-600">
                      <span>Platform Fee</span>
                      <span>₹ {checkoutData.platformFee}</span>
                    </div>

                    <div className="flex items-center justify-between text-green-600">
                      <span>Discount</span>
                      <span>- ₹ {checkoutData.discount}</span>
                    </div>

                    <div className="border-t pt-4 flex items-center justify-between text-lg font-bold text-gray-900">
                      <span>Total</span>
                      <span>₹ {checkoutData.finalTotal}</span>
                    </div>
                  </div>

                  {/* DELIVERY INFO */}
                  <div className="mt-5 bg-orange-50 border border-orange-100 rounded-2xl p-4">
                    <p className="text-sm text-gray-700 font-medium">
                      🎉 Estimated delivery in 3-5 business days
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Free shipping on orders above ₹ 999
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Discount of ₹ 150 on or above order of ₹ 1500
                    </p>
                  </div>

                  {/* PLACE ORDER BUTTON */}
                  <button
                    type="submit"
                    className="w-full mt-6 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white py-3.5 rounded-2xl font-bold text-base shadow-lg hover:scale-[1.01] transition"
                  >
                    Place Order
                  </button>

                  <p className="text-xs text-center text-gray-500 mt-3">
                    By placing your order, you agree to our terms and conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default CheckoutPage;












