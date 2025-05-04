import nft1 from '../assets/images/nft6.webp'
import nft7 from '../assets/images/nft7.webp'



export default function CardTrend(){
    return (
        <>
            <div className='flex gap-4 m-3'>
                <div className=" w-160 h-80 rounded-2xl p-3 ...">
                    <img src={nft1} className='h-73 rounded-2xl w-full' alt="" />
                    <div className="backdrop-grayscale ..."></div>
                </div>
                <div className=" w-160 h-80 rounded-2xl p-3 ...">
                    <img src={nft7} className='h-73 rounded-2xl w-full' alt="" />
                    <div className="backdrop-blur-xs ..."></div>
                </div>
            </div>
        </>
    )
}