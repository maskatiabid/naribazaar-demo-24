// components/RightAd.js

export default function RightAd() {
  return (
    <div className="fixed top-1/4 right-0 w-32 h-48 bg-gray-200">
      {/* Placeholder ad */}
      <img
        src="https://via.placeholder.com/200x300?text=Right+Ad"
        alt="Right Ad"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
