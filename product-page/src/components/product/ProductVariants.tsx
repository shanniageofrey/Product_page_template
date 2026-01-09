import { Color } from "@/app/interfaces/product";

interface Props {
  colors: Color[];
  sizes: number[];
  selectedColor: Color;
  onColorChange: (color: Color) => void;
  selectedSize: number | null;
  onSizeChange: (size: number) => void;
}

export default function ProductVariants({
  colors = [],
  sizes = [],
  selectedColor,
  onColorChange,
  selectedSize,
  onSizeChange,
}: Props) {
  return (
    <div className="space-y-6">
      {/* Color selection */}
      <div>
        <p className="text-sm font-medium text-gray-900 mb-3">
          Color:{" "}
          <span className="font-semibold">
            {selectedColor?.name || "Royal Brown"}
          </span>
        </p>

        <div className="flex flex-wrap gap-3">
          {colors && colors.length > 0 ? (
            colors.map((color) => (
              <button
                key={color.name}
                onClick={() => onColorChange(color)}
                className={`w-12 h-12 rounded-lg border-2 transition ${
                  selectedColor?.name === color.name
                    ? "border-gray-900"
                    : "border-gray-200 hover:border-gray-400"
                }`}
                style={{ backgroundColor: color.name }}
                aria-label={`Select color ${color.name}`}
              />
            ))
          ) : (
            <>
              <button
                className="w-12 h-12 rounded-lg border-2 border-gray-900 bg-[#6B5444]"
                aria-label="Select Royal Brown color"
              />
              <button
                className="w-12 h-12 rounded-lg border-2 border-gray-200 bg-gray-200 hover:border-gray-400"
                aria-label="Select Light Gray color"
              />
              <button
                className="w-12 h-12 rounded-lg border-2 border-gray-200 bg-[#3C5A6E] hover:border-gray-400"
                aria-label="Select Teal Blue color"
              />
              <button
                className="w-12 h-12 rounded-lg border-2 border-gray-200 bg-black hover:border-gray-400"
                aria-label="Select Black color"
              />
            </>
          )}
        </div>
      </div>

      {/* Size selection */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium text-gray-900">
            Size: <span className="font-semibold">{selectedSize || "8"}</span>
          </p>
          <button className="text-sm text-gray-600 hover:text-gray-900 underline">
            View Size Chart
          </button>
        </div>

        <div className="flex flex-wrap gap-3">
          {sizes && sizes.length > 0 ? (
            sizes.map((size) => (
              <button
                key={size}
                onClick={() => onSizeChange(size)}
                className={`px-6 py-3 text-sm font-medium rounded-lg border-2 transition ${
                  selectedSize === size
                    ? "border-gray-900 bg-white text-gray-900"
                    : "border-gray-200 bg-white text-gray-900 hover:border-gray-400"
                }`}
              >
                {size}
              </button>
            ))
          ) : (
            <>
              {[6, 8, 10, 14, 18, 20].map((size) => (
                <button
                  key={size}
                  onClick={() => onSizeChange(size)}
                  className={`px-6 py-3 text-sm font-medium rounded-lg border-2 transition ${
                    selectedSize === size
                      ? "border-gray-900 bg-white text-gray-900"
                      : "border-gray-200 bg-white text-gray-900 hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
