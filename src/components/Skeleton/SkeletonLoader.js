const SkeletonLoader = () => {
    return (
        <div className="flex flex-col space-y-3">
            <div className="w-full h-10 rounded-xl bg-gray-200 animate-pulse"></div>
            <div className="w-full h-60 rounded-xl bg-gray-200 animate-pulse"></div>
            <div className="w-full h-60 rounded-xl bg-gray-200 animate-pulse"></div>
            <div className="w-full h-60 rounded-xl bg-gray-200 animate-pulse"></div>
        </div>
    )
}

export default SkeletonLoader
