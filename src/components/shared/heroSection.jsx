import SocialList from './socialList'
import LinkButton from './linkbutton'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import BackgroundAnimation from './background'
import { useEffect, useState } from 'react'
import { fetchUserData } from '../api/api'

function HeroSection() {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserData()
        if (data.error) {
          setError(data.error)
        } else {
          setUserData(data)
          console.log(data)
        }
      } catch (error) {
        console.error('Error fetching projects:', error)
        setError('Failed to fetch projects. Please try again later.')
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <div className="bg-white dark:bg-gray-900 w-full shadow-section flex flex-col sm:max-h-[664px] md:h-[100vh] h-[calc(100vh-80px)] relative object-cover overflow-hidden">
        <div className="flex sm:flex-row flex-col justify-center items-center order-1 absolute w-full h-full">
          <BackgroundAnimation />
        </div>
        <div className="item-center justify-center p-0 sm:max-h-[664px] h-[100vh] sm:mb-0 w-full relative items-center flex flex-col max-w-[1040px] self-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full absolute flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center sm:w-[80%] w-full px-[16px] h-full justify-center text-black gap-2">
              <span className="font-semibold xxs:text-[12px] sm:text-[16px] text-[13px] rounded-full border border-gray-400 px-[20px] py-[12px] xxs:px-[16px] xxs:py-[10px] sm:mb-0 mb-6 dark:text-white">
                I'm Open To Work 💫
              </span>
              <div className="font-bold sm:text-[48px] text-[28px] xxs:text-[20px] text-black flex lg:flex-row justify-center flex-col items-center sm:gap-[8px] gap-[4px] mb-4 dark:text-white">
                <h1>Hire Me For</h1>
                <TypeAnimation
                  sequence={[
                    'Front-End Development',
                    5000,
                    'UX Research',
                    3000,
                    'No-Code Development',
                    3000,
                    'Digital Marketing',
                    3000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
              <p className="xxs:text-[12px] xxs:leading-5 sm:text-[18px] sm:leading-7 text-[14px] leading-6 font-medium text-gray-500 w-[90%] dark:text-gray-400">
                I build the best modern UIs with <b className="uppercase">React</b>,{' '}
                <b className="uppercase">Angular</b>, and <b className="uppercase">Tailwind CSS.</b> I'm adaptable and
                experienced in both <b className="uppercase text-green-500">contract</b> and{' '}
                <b className="uppercase text-green-500">full-time</b> roles.
              </p>
              <div className="sm:mt-4 mt-6 flex flex-row gap-3 sm:text-[16px] text-[13px] xxs:flex-col xxs:text-[11px]">
                <LinkButton
                  text="Download Resume"
                  link="https://drive.google.com/file/d/1owfOicUnT79Q2Z9Vy4nsAFc-RNUvAflM/view?usp=sharing"
                  bg={true}
                />
                <LinkButton
                  text="Send Me a Mail"
                  link="mailto:chidiebereokpechi@gmail.com?subject=Inquiry%&body=Dear%20Chidiebere,%0D%0A%0D%0AHow%20are%20you%3F%20I%20hope%20this%20email%20finds%20you%20well.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20name]"
                  bg={false}
                />
              </div>
              <div className="sm:hidden h-[70px] px-[20px] py-[16px] w-full gap-4 flex flex-row justify-center items-center">
                <SocialList />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
export default HeroSection
