import { Skeleton, Flex } from 'antd'

const PageSkeleton = () => {
  return (
    <div className="container">
      <div className="grid sm:grid-cols-12 gap-4 lg:gap-10">
        <div className="sm:col-span-6 md:col-span-5 xl:col-span-3">
          <Skeleton.Image active className="w-full! h-110!" />
        </div>

        <div className="sm:col-span-6 md:col-span-7 xl:col-span-9">
          <Flex vertical>
            <Skeleton.Node active className="w-full! h-8! max-w-96 mb-2" />
            <Skeleton.Node active className="w-full! h-5! max-w-72 mb-8" />

            <Skeleton.Node active className="w-full! h-6! max-w-16 mb-5" />
            <Skeleton title={false} active className="mb-8" />

            <Skeleton.Node active className="w-full! h-6! max-w-16 mb-5" />
            <div className="grid grid-cols-2 gap-5">
              {[...Array(4)].map((_, index) => (
                <Skeleton.Node key={index} active className="w-full! h-5! max-w-40" />
              ))}
            </div>
          </Flex>
        </div>
      </div>
    </div>
  )
}

export default PageSkeleton
