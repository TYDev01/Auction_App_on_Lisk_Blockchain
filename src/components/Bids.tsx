import { FcFlashOn } from "react-icons/fc";
import { useEffect, useState } from "react";
import nft1 from '../assets/images/nft1.jpeg';
import nft2 from '../assets/images/nft2.jpg';
import nft3 from '../assets/images/nft3.png';
import nft4 from '../assets/images/nft4.jpg';
import nft5 from '../assets/images/nft5.webp';
import nft6 from '../assets/images/nft6.webp';

interface NFT {
  id: number;
  image: string;
  price: number;
  name: string;
  endTime: Date; // Changed from string to Date for countdown
}

const nftCollection: NFT[] = [
  { id: 1, image: nft1, price: 600, name: "Heroic", endTime: new Date(Date.now() + 8 * 60 * 60 * 1000) }, // 8 hours from now
  { id: 2, image: nft2, price: 450, name: "Mystic", endTime: new Date(Date.now() + 5 * 60 * 60 * 1000) },
  { id: 3, image: nft3, price: 750, name: "Legend", endTime: new Date(Date.now() + 12 * 60 * 60 * 1000) },
  { id: 4, image: nft4, price: 550, name: "Epic", endTime: new Date(Date.now() + 6 * 60 * 60 * 1000) },
  { id: 5, image: nft5, price: 1550, name: "Grand", endTime: new Date(Date.now() + 24 * 60 * 60 * 1000) },
  { id: 6, image: nft6, price: 2550, name: "Manny", endTime: new Date(Date.now() + 3 * 60 * 60 * 1000) },
];

const formatTime = (time: number) => {
  return time.toString().padStart(2, '0');
};

const CountdownTimer = ({ endTime }: { endTime: Date }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = endTime.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <span>
      {formatTime(timeLeft.hours)}:
      {formatTime(timeLeft.minutes)}:
      {formatTime(timeLeft.seconds)}
    </span>
  );
};

const Bids = () => {
  // Get top 5 highest value NFTs (price >= $500)
  const hotBids = [...nftCollection]
    .filter(nft => nft.price >= 500)
    .sort((a, b) => b.price - a.price) // Sort by highest price first
    .slice(0, 5); // Take top 5

  return (
    <div className="mt-4">
      <h2 className="font-mono text-gray-400 flex items-center gap-1">
        <FcFlashOn className="text-2xl" /> Hot Bids
      </h2>
      
      <div className="flex gap-6 p-3 overflow-x-auto">
        {hotBids.map((nft) => (
          <div key={nft.id} className="w-60 flex-shrink-0 flex flex-col">
            <div className="flex justify-between items-center pt-3 bg-gradient-to-t from-sky-500 to-indigo-500 px-3 rounded-t-xl bg-amber-950 h-10">
              <p className="text-xs font-mono">Name: {nft.name}</p>
              <p className="text-xs font-mono">
                Ends: <CountdownTimer endTime={nft.endTime} />
              </p>
            </div>
            
            <div className="flex-1 overflow-hidden relative">
              <img 
                src={nft.image} 
                className="w-full h-full object-cover rounded-b-xl"
                alt={nft.name}
              />
              <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                ${nft.price.toLocaleString()}
              </div>
            </div>
            
            <button className="bg-gradient-to-t from-sky-500 to-indigo-500 w-full p-3 cursor-pointer hover:opacity-90 transition-opacity">
              Bid
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bids;