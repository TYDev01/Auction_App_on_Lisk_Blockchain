import nft6 from '../assets/images/nft6.webp';
import nft7 from '../assets/images/nft7.webp';
import nft1 from '../assets/images/nft1.jpeg'
import nft2 from '../assets/images/nft2.jpg'
import nft3 from '../assets/images/nft3.png'

// Type definition for NFT objects
interface NFT {
  id: number;
  image: string;
  price: number;
  name: string;
}

// NFT data array with type annotation
const nftCollection: NFT[] = [
  { id: 6, image: nft6, price: 1500, name: "NFT 6" },
  { id: 7, image: nft7, price: 1800, name: "NFT 7" },
  { id: 3, image: nft1, price: 200, name: "NFT 1"}
];

const CardTrend: React.FC = () => {
  // Filter NFTs with price >= $1000 and take the two most recent
  const trendingNfts = nftCollection
    .filter((nft) => nft.price >= 1000)
    .sort((a, b) => b.id - a.id) // Sort by newest first (higher ID)
    .slice(0, 2); // Take only two most recent

  return (
    <div className='flex gap-4 m-3'>
      {trendingNfts.map((nft) => (
        <div key={nft.id} className="w-160 h-80 rounded-2xl p-3 relative group">
          <img 
            src={nft.image} 
            className='h-73 rounded-2xl w-full object-cover transition-transform group-hover:scale-105' 
            alt={nft.name} 
          />
          <div className={`absolute inset-0 ${nft.id % 2 === 0 ? 'backdrop-blur-none cursor-pointer' : 'backdrop-grayscale-0 hover:backdrop-grayscale cursor-pointer'}`}></div>
          <div className="absolute bottom-4 left-4 bg-white/80 px-3 py-1 rounded-lg font-medium">
            ${nft.price.toLocaleString()}
          </div>
          <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-sm">
            #{nft.id}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardTrend;