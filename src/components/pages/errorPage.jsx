import Layout from '../layout/layout'
import ILinksButton from '../shared/ILinkButton'

const ErrorPage = () => {
  return (
    <Layout>
      <div className="w-full h-[80vh] flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col justify-center relative items-center gap-1">
          <h1 className="font-bold text-[28px] md:text-[48px]">Page Not Found😵‍💫😩</h1>
          <p className="md:text-[24px] text-[18px] font-light">You must have missed your way!</p>
        </div>
        <ILinksButton text="Go Back Home" bg={true} myStyle={{ fontSize: '14px' }} />
      </div>
    </Layout>
  )
}
export default ErrorPage
