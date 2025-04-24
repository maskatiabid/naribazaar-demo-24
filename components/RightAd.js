// components/RightAd.js
const RightAd = () => {
  return (
    <div className="fixed right-0 top-1/4 w-64 h-96">
      <img
        src="/ads/right-ad.jpg"  // Corrected path
        alt="Right Ad"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default RightAd;
