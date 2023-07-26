import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingSkeleton = ({ count = 5 }: { count?: number }) => {
    return <div className='grid grid-cols-4 gap-3'>
        <Skeleton count={count} />
        <Skeleton count={count} />
        <Skeleton count={count} />
        <Skeleton count={count} />
    </div>
}

export default LoadingSkeleton