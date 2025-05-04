import Bids from "./Bids";
import CardTrend from "./CardTrend";


export default function TrendingCards(){
    return (
        <>
            <div className="flex w-423 mt-3 p-5 gap-10 ml-29">
                <div className=" w-400">
                    <h3 className="ml-3 font-medium text-2xl text-gray-200 w-260 font-mono">Popular Live Auctions</h3>
                    <CardTrend />
                    <Bids />
                </div>
                <div className="bg-amber-30 w-110 h-180">
                    <h3 className="ml-32">King of Hills</h3>
                </div>
            </div>
        </>
    )
}