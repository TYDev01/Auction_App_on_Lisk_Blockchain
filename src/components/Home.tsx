import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TrendingCards from "./TrendingCards";




export default function Home(){
    return (
        <>
            <div className="header">
                <Navbar />
            </div>
            <div className="container">
                <div className="contents">
                        <TrendingCards />
                    </div>
                <div className="flexm">
                    <div className="sidebar">
                        <Sidebar />
                    </div>
                </div>

            </div>
        </>
    )
}