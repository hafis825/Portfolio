import { data } from '../../contents/header'
const Header = () =>{
    return (
        <div className='flex flex-col gap-2'>
            <div className='text-4xl text-primaryTitle font-bold'>{data.name}</div>
            <div className='text-lg text-primaryContent font-semibold'>{data.title}</div>
            <div className='text-base text-primarySub w-5/6'>{data.caption}</div>
        </div>
    )
}

export default Header; 