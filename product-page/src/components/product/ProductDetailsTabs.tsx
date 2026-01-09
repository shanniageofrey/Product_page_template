"use client";

import { useState } from "react";

type TabType = "details" | "shipping" | "returns";

export default function ProductDetailsTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("details");

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 border-t border-gray-200">
      {/* This is my Tabs */}
      <div className="flex border-b border-gray-200 mb-8">
        <button
          onClick={() => setActiveTab("details")}
          className={`px-6 py-4 font-medium transition ${
            activeTab === "details"
              ? "border-b-2 border-black text-gray-900"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Product Details
        </button>
        <button
          onClick={() => setActiveTab("shipping")}
          className={`px-6 py-4 font-medium transition ${
            activeTab === "shipping"
              ? "border-b-2 border-black text-gray-900"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Shipping & Delivery
        </button>
        <button
          onClick={() => setActiveTab("returns")}
          className={`px-6 py-4 font-medium transition ${
            activeTab === "returns"
              ? "border-b-2 border-black text-gray-900"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Returns & Exchanges
        </button>
      </div>

      {/* Tab Content */}
      <div className="prose max-w-none">
        {activeTab === "details" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Material & Care
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 100% Cotton</li>
                <li>• Machine washable at 30°C</li>
                <li>• Do not tumble dry</li>
                <li>• Iron on low heat</li>
                <li>• Do not bleach</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Features
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Relaxed, oversized fit for comfortable layering</li>
                <li>• Button-front closure</li>
                <li>• Two front patch pockets</li>
                <li>• Long sleeves with button cuffs</li>
                <li>• Versatile style suitable for casual occasions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Size & Fit
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Model is 5/9 and wears size 8</li>
                <li>• Relaxed fit - consider sizing down for a closer fit</li>
                <li>• Length: 68cm (size 8)</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "shipping" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Standard Delivery
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                £3.95 - Delivered within 3-5 working days
              </p>
              <p className="text-sm text-gray-600">
                Free standard delivery on orders over £50
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Express Delivery
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                £7.95 - Next working day delivery when ordered before 8pm
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Click & Collect
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                Free - Collect from your nearest John Lewis store within 2 hours
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                All delivery times are estimates. Orders placed on weekends or bank holidays will be processed on the next working day.
              </p>
            </div>
          </div>
        )}

        {activeTab === "returns" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                35-Day Returns
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Changed your mind? No problem. Return your item within 35 days for a full refund or exchange.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Items must be unworn, unwashed and in original condition</li>
                <li>• Keep all tags attached</li>
                <li>• Include original packaging</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How to Return
              </h3>
              <ol className="space-y-3 text-sm text-gray-700">
                <li>1. Log into your account and select the items to return</li>
                <li>2. Print your free returns label</li>
                <li>3. Pack your items securely</li>
                <li>4. Drop off at your nearest post office or John Lewis store</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Exchanges
              </h3>
              <p className="text-sm text-gray-700">
                For exchanges, simply return your original item and place a new order. This ensures you get your preferred item as quickly as possible.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}