"use client";

import { Star } from "lucide-react";

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    author: "Sarah M.",
    rating: 5,
    date: "2 days ago",
    comment: "Absolutely love this overshirt! The quality is exceptional and the fit is perfect. The royal brown color is even better in person. Highly recommend!",
    verified: true,
  },
  {
    id: 2,
    author: "James L.",
    rating: 4,
    date: "1 week ago",
    comment: "Great quality and comfortable. Runs slightly large so consider sizing down. Overall very happy with the purchase.",
    verified: true,
  },
  {
    id: 3,
    author: "Emma K.",
    rating: 5,
    date: "2 weeks ago",
    comment: "Perfect layering piece for autumn. The material is sturdy yet comfortable. I've received so many compliments!",
    verified: true,
  },
];

export default function ReviewsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Customer Reviews
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              4.5 out of 5 based on 1,238 reviews
            </span>
          </div>
        </div>

        <button className="px-6 py-3 border-2 border-black text-black font-medium rounded-lg hover:bg-gray-50 transition">
          Write a Review
        </button>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-gray-900">{review.author}</h3>
                  {review.verified && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Verified Purchase
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed">
              {review.comment}
            </p>
          </div>
        ))}
      </div>

      {/* Load More  Section*/}
      <div className="mt-8 text-center">
        <button className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition">
          Load More Reviews
        </button>
      </div>
    </section>
  );
}