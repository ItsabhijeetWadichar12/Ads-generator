"use client";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import React from 'react'

function Provider({ children }) {
    const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

    // Get PayPal client ID from environment variables or use a placeholder for development
    const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "sb"; // "sb" is the sandbox client ID

    console.log("PayPal Client ID:", paypalClientId); // Debug log

    return (
        <ConvexProvider client={convex}>
            <PayPalScriptProvider options={{
                clientId: paypalClientId,
                currency: "USD"
            }}>
                <div>{children}</div>
            </PayPalScriptProvider>
        </ConvexProvider>
    )
}

export default Provider