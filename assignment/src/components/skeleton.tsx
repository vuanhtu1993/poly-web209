import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingSkeleton = ({ count = 5 }: { count?: number }) => {
    return <div className='grid grid-cols-3 gap-4'>
        <Skeleton count={5} />
        <Skeleton count={5} />
        <Skeleton count={5} />
    </div>
}

export default LoadingSkeleton