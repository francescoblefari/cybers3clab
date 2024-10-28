import { PlatformAccessCard } from "@/components/PlatformAccessCard";
import { platforms } from "./platforms";

export default function Studiare(){
    return (
        <div className='px-6 flex flex-row flex-wrap justify-evenly'>
            
            {platforms.map( platform => (
                <div key={platform.id} className="flex px-6 pt-6">
                    <PlatformAccessCard platform={platform}/>
                </div>
            ))}
                
            
        </div>
    )
}