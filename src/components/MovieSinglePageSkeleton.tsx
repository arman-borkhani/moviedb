import { Skeleton, Flex } from 'antd'

const MovieSinglePageSkeleton = () => {
  return (
    <div className="container">
      <div className="grid md:grid-cols-12 gap-4 lg:gap-10">
        <div className="md:col-span-3">
          <Skeleton.Image active className="w-full! h-110!" />
        </div>

        <div className="md:col-span-9">
          <Flex vertical>
            <Skeleton.Node active className="w-full! h-8! max-w-96 mb-2" />
            <Skeleton.Node active className="w-full! h-5! max-w-72 mb-8" />

            <Skeleton.Node active className="w-full! h-6! max-w-16 mb-5" />
            <Skeleton title={false} active className="mb-8" />

            <Skeleton.Node active className="w-full! h-6! max-w-16 mb-5" />
            <div className="grid grid-cols-2 gap-5">
              <Skeleton.Node active className="w-full! h-5! max-w-40" />
              <Skeleton.Node active className="w-full! h-5! max-w-40" />
              <Skeleton.Node active className="w-full! h-5! max-w-40" />
              <Skeleton.Node active className="w-full! h-5! max-w-40" />
            </div>
          </Flex>
        </div>
      </div>
    </div>
  )
}

export default MovieSinglePageSkeleton
