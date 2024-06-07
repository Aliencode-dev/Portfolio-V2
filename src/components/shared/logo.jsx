import { Link } from 'react-router-dom'

function Logo() {
  return (
    <>
      <Link
        to="/"
        className="flex flex-row items-center p-0 w-auto h-[40px] font-bold text-[28px] leading-[38px] tracking-[3px] text-white"
      >
        VINCENT<span className="text-[#696868] dark:text-gray-400">.C.O</span>
      </Link>
    </>
  )
}
export default Logo
