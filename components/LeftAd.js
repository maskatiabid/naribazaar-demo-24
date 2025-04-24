// components/LeftAd.js

export default function LeftAd() {
  return (
    <div className="fixed top-1/4 left-0 w-32 h-48 bg-gray-200">
      {/* Placeholder ad */}
      <img
        src="https://via.placeholder.com/200x300?text=Left+Ad"
        alt="Left Ad"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
