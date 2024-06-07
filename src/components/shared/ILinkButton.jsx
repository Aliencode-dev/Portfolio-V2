import { Link } from 'react-router-dom'

const ILinksButton = (Props) => {
  return (
    <Link
      to={Props.link ?? '/'}
      className={
        Props.bg
          ? 'text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
          : 'py-2.5 px-5 me-2 mb-2 font-medium text-gray-900 focus:outline-none bg-white rounded-full border-[1.5px] border-gray-400 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
      }
      style={Props.myStyle ?? ''}
    >
      {Props.text ?? 'Button 1'}
    </Link>
  )
}
export default ILinksButton
