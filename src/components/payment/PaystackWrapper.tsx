"use client";

import React, { useEffect } from "react";
import { usePaystackPayment } from "react-paystack";

// Define types for the component props
interface PaystackWrapperProps {
  email: string;
  amount: number;
  name: string;
  phone: string;
  category: string;
  onSuccess: (reference: { reference: string }) => void;
  onClose: () => void;
}

// Define the type for the Paystack config
interface PaystackConfig {
  reference: string;
  email: string;
  amount: number;
  publicKey: string;
  metadata: {
    custom_fields: Array<{
      display_name: string;
      variable_name: string;
      value: string;
    }>;
  };
}

const PaystackWrapper: React.FC<PaystackWrapperProps> = ({
  email,
  amount,
  name,
  phone,
  category,
  onSuccess,
  onClose,
}) => {
  const config: PaystackConfig = {
    reference: new Date().getTime().toString(),
    email,
    amount: amount * 100, // Paystack amount is in kobo
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "",
    metadata: {
      custom_fields: [
        {
          display_name: "Name",
          variable_name: "name",
          value: name,
        },
        {
          display_name: "Phone",
          variable_name: "phone",
          value: phone,
        },
        {
          display_name: "Category",
          variable_name: "category",
          value: category,
        },
      ],
    },
  };

  const initializePayment = usePaystackPayment(config);

  // Auto-trigger payment once the component is mounted
  useEffect(() => {
    // @ts-expect-error - TypeScript doesn't recognize the onSuccess and onClose callbacks
    initializePayment(onSuccess, onClose);
  }, [initializePayment, onSuccess, onClose]);

  // This component doesn't render anything visible
  return null;
};

export default PaystackWrapper;
