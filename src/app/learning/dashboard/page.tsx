import {CardDemo} from '@/components/Card';
export default function dashboard(){
    return (
        <div className='px-6 flex flex-row flex-wrap justify-evenly grid-cols-4 justify-items-center'>
            <div className='flex pb-6 px-6'>
                <CardDemo />
            </div>
            <div className='flex pb-6 px-6'>
                <CardDemo />
            </div>
            <div className='flex pb-6 px-6'>
                <CardDemo />
            </div>
            <div className='flex pb-6 px-6'>
                <CardDemo />
            </div>
        </div>
        
    )
}