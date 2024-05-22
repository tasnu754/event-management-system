const Gallery = () => {
  return (
    <div className="bg-gradient-to-b from-[#203A43] to-[#2c5364]">
        <div className="text-5xl font-bold flex justify-center p-10 text-yellow-800">Our Gallery</div>
      <div className="grid md:grid-cols-3 gap-4 p-4">
        <div className="relative w-full max-h-[30vh] overflow-hidden">
          <img
            src="./asset//jordan-arnold-Ul07QK2AR-0-unsplash.jpg"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative w-full max-h-[30vh] overflow-hidden">
            <img src="./asset//4f9c462139e7846aff17eec4ea778d99.jpg"
              className="h-full w-full object-cover"/>
           
        </div>
        <div className="relative w-full max-h-[30vh] overflow-hidden">
            <img src="./asset//21343e2fa12d23635561c596b7ffd1c3.jpg"
              className="h-full w-full object-cover"/>
           
        </div>
        <div className="relative w-full max-h-[30vh] overflow-hidden">
            <img src="./asset//foundry_-_tent_canopy_intelligent_lights_circular_chandelier_-_september_13_2019-031.jpg"
              className="h-full w-full object-cover"/>
           
        </div>
        <div className="relative w-full max-h-[30vh] overflow-hidden">
            <img src="./asset///luigi-pozzoli-34Xicn82lY4-unsplash.jpg"
              className="h-full w-full object-cover"/>
           
        </div>
        <div className="relative w-full max-h-[30vh] overflow-hidden">
            <img src="./asset//pexels-wendywei-1190298.jpg"
              className="h-full w-full object-cover"/>
           
        </div>
      </div>
    </div>
  );
};

export default Gallery;
