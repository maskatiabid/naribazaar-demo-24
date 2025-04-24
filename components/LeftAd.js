// components/LeftAd.js
const LeftAd = () => {
  return (
    <div className="fixed left-0 top-1/4 w-64 h-96">
      <img
        src="/ads/left-ad.jpg"  // Corrected path
        alt="Left Ad"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default LeftAd;
