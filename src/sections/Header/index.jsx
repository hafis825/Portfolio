import { data } from '../../contents/header'
const Header = () => {
    return (
        <div className='flex flex-col gap-2'>
            <h1 className='text-5xl font-bold text-primaryContent'>{data.name}</h1>
            <h2 className='text-xl font-medium text-primaryContent'>{data.title}</h2>
        </div>
    )
}

export default Header; 