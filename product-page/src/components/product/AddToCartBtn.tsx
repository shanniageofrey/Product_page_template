interface Props {
  disabled: boolean;
}

export default function AddToCartButton({ disabled }: Props) {
  return (
    <button
      disabled={disabled}
      className={`w-full py-4 text-sm font-semibold rounded-lg transition ${
        disabled
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-black text-white hover:bg-gray-800"
      }`}
      onClick={() => {
        // a placeholder for real cart logic would go here
        console.log("Added to cart");
      }}
    >
      Add To Cart
    </button>
  );
}