import { motion } from 'framer-motion'
export const ProjectCard = (Props) => {
  return (
    <>
      <a
        href={Props.link ?? '/'}
        className="flex float-start xs:w-1/2 sm:w-[calc(100%/3)] w-full p-[10px] decoration-transparent"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full flex flex-col justify-center items-center"
        >
          <div className="flex flex-row justify-center items-center p-[10px] gap-[10px] w-full  bg-gray-300 dark:bg-gray-700 dark:border-gray-700 border border-gray-200 shadow rounded transition-transform duration-300 ease-in-out">
            <div className="flex flex-col items-start p-0 w-full aspect-square">
              <div className="flex items-center justify-center mb-4 bg-gray-300 rounded dark:bg-gray-700 flex-col p-0 w-full h-[75%]">
                <img
                  className="rounded h-full w-full object-cover object-top"
                  src={Props.image ?? '/default.jpg'}
                  alt={`${Props.name ?? ''} image`}
                />
              </div>
              <div className="flex flex-col items-start p-[10px] gap-[8px] w-full h-auto">
                <h3 className="sm:text-[18px] text-[16px] xxs:text-[14px] font-medium text-gray-600 dark:text-gray-200">
                  {Props.name ?? 'Item Name'}
                </h3>
                <p className="sm:text-[14px] text-[12px] dark:text-gray-400 xxs:text-[10px] font-normal text-gray-400 m-0 p-0 leading-3">
                  {Props.description ?? 'here is your description'}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </a>
    </>
  )
}

export const LoadingProjectCard = () => {
  return (
    <div className="flex float-start xs:w-1/2 sm:w-[calc(100%/3)] w-full p-[10px] decoration-transparent">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full flex flex-col justify-center items-center"
      >
        <div
          role="status"
          className="w-full p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
        >
          <div className="flex items-center justify-center min-h-[75%] h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          <span className="sr-only">Loading...</span>
        </div>
      </motion.div>
    </div>
  )
}

export const LoadingImage = () => {
  return (
    <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
      <svg
        className="w-10 h-10 text-gray-200 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 18"
      >
        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
      </svg>
    </div>
  )
}

export const LoadingText = () => {
  return (
    <div role="status" className="max-w-sm animate-pulse">
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}
