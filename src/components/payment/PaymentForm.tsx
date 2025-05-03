"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { ClipboardCopy } from "lucide-react";

// Create a wrapper component for Paystack
const PaystackPaymentComponent = dynamic(() => import("./PaystackWrapper"), {
  ssr: false,
});

type PaymentFormData = {
  email: string;
  amount: string;
  name: string;
  phone: string;
  category: string;
};

type PaymentMethod = "paystack" | "bank-transfer";

const PaymentForm = () => {
  const [formData, setFormData] = useState<PaymentFormData>({
    email: "",
    amount: "",
    name: "",
    phone: "",
    category: "tithe",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("paystack");
  const [showTransferDetails, setShowTransferDetails] = useState(false);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [showPaystack, setShowPaystack] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentMethodChange = (method: PaymentMethod) => {
    setPaymentMethod(method);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (paymentMethod === "paystack") {
      setIsLoading(true);
      setShowPaystack(true);
    } else if (paymentMethod === "bank-transfer") {
      setShowTransferDetails(true);
    }
  };

  const onPaymentSuccess = (reference: { reference: string }) => {
    setIsLoading(false);
    setShowPaystack(false);
    alert("Payment successful! Reference: " + reference.reference);
    // Reset form
    setFormData({
      email: "",
      amount: "",
      name: "",
      phone: "",
      category: "tithe",
    });
  };

  const onPaymentClose = () => {
    setIsLoading(false);
    setShowPaystack(false);
    alert("Payment cancelled");
  };

  const copyToClipboard = (text: string, field: string) => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(text).then(
        () => {
          setCopySuccess(field);
          setTimeout(() => setCopySuccess(null), 2000);
        },
        () => {
          setCopySuccess("failed");
        }
      );
    }
  };

  // Bank details
  const bankDetails = {
    bank: "United Bank for Africa (UBA)",
    accountName: "Living Spring Christian Assembly",
    accountNumber: "1234567890",
    reference: `${formData.category.toUpperCase()}/${
      formData.name.split(" ")[0]
    }`,
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md">
      <div className="mb-6">
        <div className="flex space-x-4 mb-4">
          <button
            type="button"
            onClick={() => handlePaymentMethodChange("paystack")}
            className={`flex-1 py-2 px-4 rounded-md ${
              paymentMethod === "paystack"
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Pay Online
          </button>
          <button
            type="button"
            onClick={() => handlePaymentMethodChange("bank-transfer")}
            className={`flex-1 py-2 px-4 rounded-md ${
              paymentMethod === "bank-transfer"
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Bank Transfer
          </button>
        </div>
      </div>

      {showPaystack && isMounted && (
        <PaystackPaymentComponent
          email={formData.email}
          amount={parseFloat(formData.amount)}
          name={formData.name}
          phone={formData.phone}
          category={formData.category}
          onSuccess={onPaymentSuccess}
          onClose={onPaymentClose}
        />
      )}

      {showTransferDetails ? (
        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Bank Transfer Details</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-white p-3 rounded-md">
              <div>
                <p className="text-sm text-gray-500">Bank</p>
                <p className="font-medium">{bankDetails.bank}</p>
              </div>
              <button
                onClick={() => copyToClipboard(bankDetails.bank, "bank")}
                className="text-orange-500 hover:text-orange-700"
                aria-label="Copy bank name"
              >
                <ClipboardCopy size={18} />
                {copySuccess === "bank" && (
                  <span className="text-xs text-green-500 ml-1">Copied!</span>
                )}
              </button>
            </div>

            <div className="flex items-center justify-between bg-white p-3 rounded-md">
              <div>
                <p className="text-sm text-gray-500">Account Name</p>
                <p className="font-medium">{bankDetails.accountName}</p>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(bankDetails.accountName, "accountName")
                }
                className="text-orange-500 hover:text-orange-700"
                aria-label="Copy account name"
              >
                <ClipboardCopy size={18} />
                {copySuccess === "accountName" && (
                  <span className="text-xs text-green-500 ml-1">Copied!</span>
                )}
              </button>
            </div>

            <div className="flex items-center justify-between bg-white p-3 rounded-md">
              <div>
                <p className="text-sm text-gray-500">Account Number</p>
                <p className="font-medium text-lg">
                  {bankDetails.accountNumber}
                </p>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(bankDetails.accountNumber, "accountNumber")
                }
                className="text-orange-500 hover:text-orange-700"
                aria-label="Copy account number"
              >
                <ClipboardCopy size={18} />
                {copySuccess === "accountNumber" && (
                  <span className="text-xs text-green-500 ml-1">Copied!</span>
                )}
              </button>
            </div>

            <div className="flex items-center justify-between bg-white p-3 rounded-md">
              <div>
                <p className="text-sm text-gray-500">Amount</p>
                <p className="font-medium">₦{formData.amount}</p>
              </div>
              <button
                onClick={() => copyToClipboard(formData.amount, "amount")}
                className="text-orange-500 hover:text-orange-700"
                aria-label="Copy amount"
              >
                <ClipboardCopy size={18} />
                {copySuccess === "amount" && (
                  <span className="text-xs text-green-500 ml-1">Copied!</span>
                )}
              </button>
            </div>

            <div className="flex items-center justify-between bg-white p-3 rounded-md">
              <div>
                <p className="text-sm text-gray-500">Reference</p>
                <p className="font-medium">{bankDetails.reference}</p>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(bankDetails.reference, "reference")
                }
                className="text-orange-500 hover:text-orange-700"
                aria-label="Copy reference"
              >
                <ClipboardCopy size={18} />
                {copySuccess === "reference" && (
                  <span className="text-xs text-green-500 ml-1">Copied!</span>
                )}
              </button>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-600">
              Please use your name as reference when making the transfer. After
              making the payment, you may send the payment receipt to our email:
              liscajos@gmail.com
            </p>
          </div>
          <Button
            type="button"
            onClick={() => setShowTransferDetails(false)}
            className="mt-6 w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white py-3 rounded-md"
          >
            Back to Form
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Giving Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              <option value="tithe">Tithe</option>
              <option value="offering">Offering</option>
              <option value="project">Building Project</option>
              <option value="missions">Missions</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Amount (₦)
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              min="100"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white py-3 rounded-md"
          >
            {isLoading
              ? "Processing..."
              : paymentMethod === "paystack"
              ? "Give Now"
              : "Continue"}
          </Button>
        </form>
      )}
    </div>
  );
};

export default PaymentForm;
