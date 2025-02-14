import { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  console.log(rating, hover);

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-700">
      <div className="flex gap-2 ">
        {[...Array(10)].map((_, index) => {
          index += 1;
          return (
            <div
              key={index}
              onClick={() => setRating(index)}
              onMouseMove={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
              className={`text-6xl hover:cursor-pointer ${
                index <= (hover || rating) ? "bg-amber-300" : null
              }`}
            >
              ☆
            </div>
          );
        })}
      </div>
    </div>
  );
}
