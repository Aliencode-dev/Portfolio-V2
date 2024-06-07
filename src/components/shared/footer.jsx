import NavList from './navList'
function Footer() {
  return (
    <>
      <footer className="flex flex-col justify-center shadow-section items-center py-[24px] px-[38px] gap-[10px] w-full h-[80px] relative bottom-0 bg-[#f5f5f5] dark:bg-gray-900">
        <div className="flex flex-row justify-between items-center gap-[10px] w-full relative text-[16px] font-medium text-[#757575] dark:text-gray-200 max-w-[1040px] self-center">
          <div className="sm:text-[16px] text-[14px] xxs:text-[12px] w-full flex flex-row gap-[4px] sm:text-left text-center items-center justify-center sm:justify-start">
            © <span id="year">{new Date().getFullYear()}</span> Vincent Chidiebere Okpechi
          </div>
          <div className="hidden sm:flex flex-row gap-[20px] w-full items-center justify-end">
            <NavList />
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
