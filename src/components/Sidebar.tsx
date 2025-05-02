import { FcDam, FcComboChart } from "react-icons/fc";


export default function Sidebar(){
    return (
        <>
        <div className="flex flex-col w-20 h-200 p-5 rounded-2xl border border-[#2b2e4f] bg-[#151945]/30 backdrop-blur-sm ...">
            <div>
                <FcDam  className="text-[2rem] mb-15 cursor-pointer"/>
            </div>
            <div>
                <FcComboChart className="text-[2rem] cursor-pointer" />
            </div>
        </div>
        </>
    )
}

