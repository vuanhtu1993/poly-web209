import Skeleton from 'react-loading-skeleton'

type Props = {
    children?: React.ReactNode
}

const LoadingSkeleton = (props: Props) => {
    return <div className='grid grid-cols-3 gap-4'>
        <Skeleton count={5} />
        <Skeleton count={5} />
        <Skeleton count={5} />
    </div>
}

export default LoadingSkeleton