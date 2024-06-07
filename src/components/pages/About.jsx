import Layout from '../layout/layout'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Strength from '../shared/strengthCard'
import { useEffect, useState } from 'react'
import { fetchUserData } from '../api/api'
import { LoadingImage, LoadingText } from '../shared/projectCard'
import LinkButton from '../shared/linkbutton'
import Codeforum from '/codeforum.png'
import Jobstark from '/cropped-JobStark-Favicon-white-bg.webp'
import Ecoscigen from '/eduscigen_logo.jpeg'
import Fiveseven from '/fiveseven.png'
import Flinoid from '/flinoid.png'
import Hisell from '/HS gradient.jpg'
import Ireserve from '/ireserve.svg'
import Susty from '/SUSTY.png'
import Verited from '/verit.png'
import Xclux from '/xclux.jpeg'
import Marketing from '/marketinglogo.svg'
import Xtension from '/xtension.svg'
import Invoice from '/invoice.svg'
const About = () => {
  const [userDetails, setUserDetails] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserData()
        if (data.error) {
          setError(data.error)
        } else {
          setUserDetails(data)
          console.log(data)
        }
      } catch (error) {
        console.error('Error fetching userData on About page:', error)
        setError('Failed to fetch userData on about page. Please try again later.')
      }
    }

    fetchData()
  }, [])
  const myStrength = [
    {
      header: 'Attention to Detail',
      description:
        'While i am quick at wrapping up projets, i never skip the small stuffs, i have a keen eye for details from color, to size to shape, to curves etc. i make sure everything stands out.'
    },
    {
      header: 'Strong Technical Skills',
      description:
        'With a background in computer science and over 5 years of combined experience in graphic design and UI/UX design I have got the technical chops to handle any front-end challenge.'
    },
    {
      header: 'Problem-Solving Mindset',
      description:
        'I thrive on challenges! When faced with complex issues during development, I stay calm and collected, finding creative solutions to keep projects running smoothly.'
    },
    {
      header: 'Strong Communication and Collaboration',
      description:
        'I excel at communicating clearly and effectively with team members, designers, and stakeholders. making sure everyone is on the same page and pushing projects to success together'
    }
  ]
  return (
    <Layout>
      <div className="flex flex-col w-full items-center justify-center bg-[#fafafa] dark:bg-gray-900 dark:text-gray-100">
        <section>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full flex flex-col justify-center items-center"
          >
            <div className="flex flex-col md:flex-row md:px-[40px] px-[20px] sm:max-h-[664px] md:h-[calc(100vh-160px)] h-full max-w-[1040px] w-full items-center justify-center my-[40px]">
              <div className="flex flex-col md:w-1/2 w-full h-full justify-center items-center p-[16px]">
                <h1 className="sm:text-[48px] text-[28px] xxs:text-[20px] leading-[42px] sm:leading-[64px] text-black dark:text-gray-100 tracking-wider font-bold flex flex-col items-center mb-5">
                  hi! Call Me
                  <TypeAnimation
                    sequence={['Vincent', 5000, 'AlienCode', 5000]}
                    wrapper="span"
                    speed={5}
                    repeat={Infinity}
                  />
                </h1>
                <strong className="flex font-normal mb-4 md:leading-[40px] md:text-[24px] text-[20px] leading-[30px] dark:text-gray-300 tracking-[0.08em] text-black w-full ">
                  I Code The Web And I Enjoy Every Bit Of It ✨
                </strong>
                {userDetails ? (
                  userDetails.map((userData, index) => (
                    <p
                      key={index}
                      className="font-normal md:text-[16px] text-[15px] text-slate-500 dark:text-slate-400 leading-6 tracking-[0.08em]"
                    >
                      {userData.S_Descr}
                    </p>
                  ))
                ) : (
                  <>
                    <LoadingText />
                  </>
                )}
              </div>
              <div className="md:w-1/2 w-full p-[20px] md:p-[24px]">
                {userDetails ? (
                  userDetails.map((userData, index) => (
                    <img
                      key={index}
                      src={`https://sfycdn.speedsize.com/fbaf6506-81e1-43a2-bcc1-80e18c7b0146/https://flinoid.com/ireserve/dashboard/images/${userData.Logo}?v=1705058594&width=1920`}
                      alt="Vincent Chidiebere Okpechi"
                      className="rounded-full border-[16px] border-[#f5f5f5] dark:border-gray-700 aspect-square"
                    />
                  ))
                ) : (
                  <>
                    <LoadingImage />
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </section>
        <section>
          <motion.div
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            className="w-full h-full flex flex-col justify-center items-center"
          >
            <div className="md:px-[40px] px-[20px] flex flex-col justify-center items-center max-w-[1040px]">
              <h2 className="sm:text-[24px] text-[18px] xxs:text-[16px] leading-[34px] text-black tracking-wide font-bold flex flex-col items-center mb-8 dark:text-gray-200">
                Why You Should Work With Me!😉
              </h2>
              <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
                {myStrength.map((strengthInfo, index) => (
                  <Strength header={strengthInfo.header} description={strengthInfo.description} key={index} />
                ))}
              </div>
            </div>
          </motion.div>
        </section>
        <section>
          <motion.div
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            className="w-full h-full flex flex-col justify-center items-center"
          >
            <div className="md:px-[40px] px-[20px] flex flex-col justify-center items-center relative w-full max-w-[1040px]">
              <div className="bg-white dark:bg-gray-900">
                <div className="py-8 md:px-10 lg:py-16 mx-auto px-4">
                  <h2 className="sm:text-[24px] text-[18px] xxs:text-[16px] leading-[34px] text-black tracking-wide font-bold flex flex-col items-center mb-8 dark:text-gray-200">
                    Some business i have worked with
                  </h2>
                  <div className="mb-8 grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                    <a
                      href="https://flinoid.com/blog/codeforum"
                      target="_blank"
                      rel="noopener"
                      className="flex justify-center items-center"
                    >
                      <img
                        className="object-contain object-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                        src={Codeforum}
                        alt="Codeforum"
                      />
                    </a>
                    <a
                      href="https://jobstark.com"
                      target="_blank"
                      rel="noopener"
                      className="flex justify-center items-center"
                    >
                      <img
                        className="object-contain object-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                        src={Jobstark}
                        alt="Jobstark"
                      />
                    </a>
                    <a
                      href="https://ecoscigen.org"
                      rel="noopener"
                      target="_blank"
                      className="flex justify-center items-center"
                    >
                      <img
                        className="object-contain object-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                        src={Ecoscigen}
                        alt="Eco science generation"
                      />
                    </a>
                    <a
                      href="https://fivesevenconstructions.com"
                      rel="noopener"
                      target="_blank"
                      className="flex justify-center items-center"
                    >
                      <img
                        className="object-contain object-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                        src={Fiveseven}
                        alt="Five seven construction"
                      />
                    </a>
                    <a
                      href="https://flinoid.com"
                      rel="noopener"
                      target="_blank"
                      className="flex justify-center items-center"
                    >
                      <img
                        className="object-contain object-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                        src={Flinoid}
                        alt="flinid Texvo"
                      />
                    </a>
                    <a
                      href="https://hisell.shop"
                      rel="noopener"
                      target="_blank"
                      className="flex justify-center items-center"
                    >
                      <img
                        className="object-contain object-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                        src={Hisell}
                        alt="Hisell technologies"
                      />
                    </a>
                    <a
                      href="https://ireserve.shop"
                      rel="noopener"
                      target="_blank"
                      className="flex justify-center items-center"
                    >
                      <img
                        className="object-contain object-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                        src={Ireserve}
                        alt="iReserve shop"
                      />
                    </a>
                    <a
                      href="https://sustyvibes.org"
                      rel="noopener"
                      target="_blank"
                      className="flex justify-center items-center"
                    >
                      <img
                        className="object-contain object-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                        src={Susty}
                        alt="Sustyvibes"
                      />
                    </a>
                    <a href="#" rel="noopener" target="_blank" className="flex justify-center items-center">
                      <img
                        className="object-contain object-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                        src={Verited}
                        alt="Verited"
                      />
                    </a>
                    <a
                      href="https://xcluxdesigners.com"
                      rel="noopener"
                      target="_blank"
                      className="flex justify-center items-center"
                    >
                      <img
                        className="object-contain object-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                        src={Xclux}
                        alt="Xclux designers"
                      />
                    </a>
                    <a
                      href="https://flinoid.com/mymarketing/"
                      rel="noopener"
                      target="_blank"
                      className="flex justify-center items-center"
                    >
                      <img
                        className="object-contain object-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                        src={Marketing}
                        alt="Flinoid Marketing"
                      />
                    </a>
                    <a
                      href="https://flinoid.com/extension/"
                      rel="noopener"
                      target="_blank"
                      className="flex justify-center items-center"
                    >
                      <img
                        className="object-contain object-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                        src={Xtension}
                        alt="Flinoid Xtension"
                      />
                    </a>
                    <a
                      href="https://flinoid.com/invoice/"
                      rel="noopener"
                      target="_blank"
                      className="flex justify-center items-center"
                    >
                      <img
                        className="object-contain object-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                        src={Invoice}
                        alt="Flinoid Invoice Generator"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        <section className="w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            className="w-full h-full flex flex-col justify-center items-center"
          >
            <div className="py-8 lg:py-16 md:px-[40px] px-[20px] flex flex-col w-full justify-center items-center max-w-[1040px]">
              <div
                className="border-gray-200 rounded-lg shadow-sm dark:border-gray-700 bg-white dark:bg-gray-800 w-full dark:bg-opacity-40"
                style={{ backdropFilter: 'blur(20px)' }}
              >
                <h3 className="sm:text-[24px] text-[18px] pt-8 px-6 xxs:text-[16px] leading-[34px] text-black tracking-wide font-bold flex flex-col items-center mb-8 dark:text-gray-200">
                  A little bit more about me!
                </h3>
                <div className="w-full md:px-[40px] px-[20px] pb-[40px]">
                  <details className="py-4 border-b border-grey-lighter">
                    <summary className="flex items-center font-bold text-[16px] md:text-[18px] text-slate-900 dark:text-gray-300">
                      My History
                      <button className="ml-auto">
                        <svg
                          className="fill-current opacity-75 w-4 h-4 -mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                        </svg>
                      </button>
                    </summary>

                    <div className="mt-4 leading-normal text-md text-start gap-2 flex flex-col">
                      <h3 className="text-slate-900 dark:text-white text-[14px] md:text-[16px] font-bold pb-2">
                        My Coding Journey
                      </h3>
                      <p className="text-[14px] md:text-[16px] text-slate-500 dark:text-slate-400">
                        I started coding sometimes in 2012, after a friend showed me an inventory software he built for
                        a company. I became really curious about coding and started learning. Hereafter, I built my
                        first windows software using Visual Basic and microsoft access to make taking orders easier for
                        salespeople in the company where I worked. It felt good to have built something, and haven't
                        stopped ever since.
                      </p>
                      <h3 className="text-slate-900 dark:text-white text-[14px] md:text-[16px] font-bold pb-2">
                        Self-Taught and Eager to Learn
                      </h3>
                      <p className="text-[14px] md:text-[16px] text-slate-500 dark:text-slate-400">
                        I continued to self-learned, i questioned the building blocks of stuff, and enjoyed the
                        manipulation that came with it. Before I got admitted to the university in 2015, I already
                        mastered three programming languages: VB.Net, C#.Net, and Java.
                      </p>
                      <h3 className="text-slate-900 dark:text-white text-[14px] md:text-[16px] font-bold pb-2">
                        Sharing the Knowledge
                      </h3>
                      <p className="text-[14px] md:text-[16px] text-slate-500 dark:text-slate-400">
                        I’m constantly learning new technologies and concepts and enjoy sharing my insight through
                        writting on{' '}
                        <a className="underline" href="https://linkedin.com/in/vincent-okpechi">
                          social media platforms,
                        </a>{' '}
                        blogs, and public speaking engagements.
                      </p>
                      <h3 className="text-slate-900 dark:text-white text-[14px] md:text-[16px] font-bold pb-2">
                        Building and Collaborating
                      </h3>
                      <p className="text-[14px] md:text-[16px] text-slate-500 dark:text-slate-400">
                        In 2016, i met a friend who had same vision as i did and we started an offline{' '}
                        <a className="underline" href="https://flinoid.com/blog/codeforum">
                          code forum
                        </a>{' '}
                        at school where we shared our coding knowledge with fellow students. In 2018, we collaborated on
                        developing a{' '}
                        <a href="https://download.cnet.com/cf-lan-chat/3000-2150_4-77771166.html" className="underline">
                          LAN chatting software,
                        </a>{' '}
                        that will make it easy for groups and teams file sharing at work without incurring network
                        provider costs. In 2019, amidst the pandemic, we launched a{' '}
                        <a href="https://ireserve.shop" className="underline">
                          multi-tenancy e-commerce website builder,
                        </a>{' '}
                        empowering business owners to easily create and manage their online stores.
                      </p>
                      <h3 className="text-slate-900 dark:text-white text-[14px] md:text-[16px] font-bold pb-2">
                        Beyond Code: A Passion for Diversity
                      </h3>
                      <p className="text-[14px] md:text-[16px] text-slate-500 dark:text-slate-400">
                        My dedication extends beyond coding. I'm passionate about sustainable development. I actively{' '}
                        <a href="https://ecoscigen.org" className="underline">
                          volunteer
                        </a>{' '}
                        to support initiatives focused on empowering{' '}
                        <a href="https://ayicc.org" className="underline">
                          African youth
                        </a>{' '}
                        like myself to create a brighter future for them.
                      </p>
                      <h3 className="text-slate-900 dark:text-white text-[14px] md:text-[16px] font-bold pb-2">
                        Looking Forward
                      </h3>
                      <p className="text-[14px] md:text-[16px] text-slate-500 dark:text-slate-400">
                        Currently, I'm laser-focused on expanding my network, personal growth, and embarking on the next
                        exciting chapter in both my career and life journey.
                      </p>
                      <p className="text-[14px] md:text-[16px] text-slate-500 dark:text-slate-400">
                        Thanks for reading! 😁
                      </p>
                    </div>
                  </details>

                  <details className="py-4 border-b border-grey-lighter">
                    <summary className="flex items-center font-bold text-[16px] md:text-[18px] text-slate-900 dark:text-gray-300">
                      My Skills
                      <button className="ml-auto">
                        <svg
                          className="fill-current opacity-75 w-4 h-4 -mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                        </svg>
                      </button>
                    </summary>

                    <div className="mt-4 leading-normal text-md text-start gap-2 flex flex-col">
                      <div className="w-full pb-[2rem] pl-[1rem] border-b border-dashed dark:border-[#264a73] border-gray-600">
                        <h3 className="text-slate-900 dark:text-white text-[14px] md:text-[16px] font-bold pb-2">
                          Language
                        </h3>
                        <ul className="flex flex-wrap m-0 list-disc">
                          <li className="text-[14px] font-semibold my-[0.25rem] ml-[2rem] uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            html
                          </li>
                          <li className="text-[14px] font-semibold my-[0.25rem] ml-[2rem] uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            css
                          </li>
                          <li className="text-[14px] font-semibold my-[0.25rem] ml-[2rem] uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            javascript
                          </li>
                          <li className="text-[14px] font-semibold my-[0.25rem] ml-[2rem] uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            typescript
                          </li>
                          <li className="text-[14px] font-semibold my-[0.25rem] ml-[2rem] uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            php
                          </li>
                        </ul>
                      </div>
                      <div className="w-full  pb-[2rem] pl-[1rem] border-b border-dashed dark:border-[#264a73] border-gray-600">
                        <h3 className="text-slate-900 dark:text-white text-[14px] md:text-[16px] font-bold pb-2">
                          Libraries
                        </h3>
                        <ul className="flex flex-wrap m-0 list-disc">
                          <li className="text-[14px] font-semibold my-[0.25rem] ml-[2rem] uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            react
                          </li>
                          <li className="text-[14px] font-semibold my-[0.25rem] ml-[2rem] uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            alpine
                          </li>
                          <li className="text-[14px] font-semibold my-[0.25rem] ml-[2rem] uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            lodash
                          </li>
                          <li className="text-[14px] font-semibold my-[0.25rem] ml-[2rem] uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            jquery
                          </li>
                          <li className="text-[14px] font-semibold my-[0.25rem] ml-[2rem] uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            vue
                          </li>
                        </ul>
                      </div>
                      <div className="w-full  pb-[2rem] pl-[1rem] border-b border-dashed dark:border-[#264a73] border-gray-600">
                        <h3 className="text-slate-900 dark:text-white text-[14px] md:text-[16px] font-bold pb-2">
                          Frameworks
                        </h3>
                        <ul className="flex flex-wrap m-0 list-disc">
                          <li className="text-[14px] font-semibold my-[0.25rem] ml-[2rem] uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            Angular
                          </li>
                          <li className="text-[14px] font-semibold my-[0.25rem] ml-[2rem] uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            tailwind
                          </li>
                          <li className="text-[14px] font-semibold my-[0.25rem] ml-[2rem] uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            laravel
                          </li>
                        </ul>
                      </div>
                      <div className="w-full  pb-[2rem] pl-[1rem] border-b border-dashed dark:border-[#264a73] border-gray-600">
                        <h3 className="text-slate-900 dark:text-white text-[14px] md:text-[16px] font-bold pb-2">
                          Backend Stack
                        </h3>
                        <ul className="flex flex-wrap m-0 list-disc">
                          <li className="text-[14px] font-semibold my-[0.25rem] ml-[2rem] uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            node.js
                          </li>
                          <li className="text-[14px] font-semibold my-[0.25rem] ml-[2rem] uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            express
                          </li>
                          <li className="text-[14px] font-semibold my-[0.25rem] ml-[2rem] uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            nginx
                          </li>
                          <li className="text-[14px] font-semibold my-[0.25rem] ml-[2rem] uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            Rest Api
                          </li>
                        </ul>
                      </div>
                      <div className="w-full  pb-[2rem] pl-[1rem] border-b border-dashed dark:border-[#264a73] border-gray-600">
                        <h3 className="text-slate-900 dark:text-white text-[14px] md:text-[16px] font-bold pb-2">
                          Tools & Systems
                        </h3>
                        <ul className="flex flex-wrap m-0 list-disc">
                          <li className="text-[14px] font-semibold my-[0.25rem] ml-[2rem] uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            git
                          </li>
                          <li className="text-[14px] font-semibold my-[0.25rem] ml-[2rem] uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            npm
                          </li>
                          <li className="text-[14px] font-semibold my-[0.25rem] ml-[2rem] uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            vscode
                          </li>
                          <li className="text-[14px] font-semibold my-[0.25rem] ml-[2rem] uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            Agile methodology
                          </li>
                        </ul>
                      </div>
                    </div>
                  </details>

                  <details className="question py-4 border-b border-grey-lighter">
                    <summary className="flex items-center font-bold text-[16px] md:text-[18px] text-slate-900 dark:text-gray-300">
                      My Experience
                      <button className="ml-auto">
                        <svg
                          className="fill-current opacity-75 w-4 h-4 -mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                        </svg>
                      </button>
                    </summary>

                    <div className="mt-4 leading-normal text-md text-start gap-2 flex flex-col">
                      <div className="w-full pb-[2rem] pl-[1rem] border-b border-dashed dark:border-[#264a73] border-gray-600">
                        <h3 className="text-slate-900 dark:text-white text-[14px] md:text-[16px] font-bold pb-2">
                          <b>Front End Developer</b> {' — '}{' '}
                          <a
                            className="font-normal text-green-500"
                            href="https://xcluxdesigners.com"
                            target="_blank"
                            rel="noopener"
                          >
                            Xclux Designers
                          </a>
                        </h3>
                        <p className="mt-[0.5rem] text-[0.9rem] text-gray-600 dark:text-gray-200">
                          NOV 2023 - PRESENT | Lagos, Nigeria
                        </p>
                        <ul className="flex flex-wrap m-0 list-disc">
                          <li className="text-[14px] font-medium my-[0.25rem] ml-[2rem] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            Responsible for designing coding and deploying the the e-commerce website as a theme on
                            ireserve for use by business leading to easy access to products and seamless online
                            transaction.
                          </li>
                        </ul>
                      </div>
                      <div className="w-full pb-[2rem] pl-[1rem] border-b border-dashed dark:border-[#264a73] border-gray-600">
                        <h3 className="text-slate-900 dark:text-white text-[14px] md:text-[16px] font-bold pb-2">
                          <b>Front End Developer</b> {' — '}{' '}
                          <a
                            className="font-normal text-green-500"
                            href="https://jobstark.com"
                            target="_blank"
                            rel="noopener"
                          >
                            Job Stark
                          </a>
                        </h3>
                        <p className="mt-[0.5rem] text-[0.9rem] text-gray-600 dark:text-gray-200">
                          OCT 2023 - FEB 2024 | Abuja, Nigeria
                        </p>
                        <ul className="flex flex-wrap m-0 list-disc">
                          <li className="text-[14px] font-medium my-[0.25rem] ml-[2rem] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            Responsible for updating, optimizing and improving user interface leading to improved user
                            experience and improved SEO ranking.
                          </li>
                        </ul>
                      </div>
                      <div className="w-full pb-[2rem] pl-[1rem] border-b border-dashed dark:border-[#264a73] border-gray-600">
                        <h3 className="text-slate-900 dark:text-white text-[14px] md:text-[16px] font-bold pb-2">
                          <b>Full Stack Developer</b> {' — '}{' '}
                          <a
                            className="font-normal text-green-500"
                            href="https://flinoid.com"
                            target="_blank"
                            rel="noopener"
                          >
                            Flinoid Texvo
                          </a>
                        </h3>
                        <p className="mt-[0.5rem] text-[0.9rem] text-gray-600 dark:text-gray-200">
                          JUL 2018 - JAN 2024 | Ibadan, Nigeria
                        </p>
                        <ul className="flex flex-wrap m-0 list-disc">
                          <li className="text-[14px] font-medium my-[0.25rem] ml-[2rem] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            Led the development of websites for clients, collaborating closely with cross-functional
                            teams to ensure timely and precise project delivery.
                          </li>
                        </ul>
                      </div>
                      <div className="w-full pb-[2rem] pl-[1rem] border-b border-dashed dark:border-[#264a73] border-gray-600">
                        <h3 className="text-slate-900 dark:text-white text-[14px] md:text-[16px] font-bold pb-2">
                          <b>Front End Developer</b> {' — '}{' '}
                          <a
                            className="font-normal text-green-500"
                            href="https://verited.com"
                            target="_blank"
                            rel="noopener"
                          >
                            Verited
                          </a>
                        </h3>
                        <p className="mt-[0.5rem] text-[0.9rem] text-gray-600 dark:text-gray-200">
                          AUG 2023 - NOV 2023 | Lagos, Nigeria
                        </p>
                        <ul className="flex flex-wrap m-0 list-disc">
                          <li className="text-[14px] font-medium my-[0.25rem] ml-[2rem] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            Delivered a seamless user experience from login to logout translating figma designs to
                            functional Angular & Tailwind Ui, along side third party intergrations.
                          </li>
                        </ul>
                      </div>
                      <div className="w-full pb-[2rem] pl-[1rem] border-b border-dashed dark:border-[#264a73] border-gray-600">
                        <h3 className="text-slate-900 dark:text-white text-[14px] md:text-[16px] font-bold pb-2">
                          <b>Front End Developer</b> {' — '}{' '}
                          <a
                            className="font-normal text-green-500"
                            href="https://sustyvibes.org"
                            target="_blank"
                            rel="noopener"
                          >
                            SustyVibes
                          </a>
                        </h3>
                        <p className="mt-[0.5rem] text-[0.9rem] text-gray-600 dark:text-gray-200">
                          APR 2023 - MAR 2024 | Lagos, Nigeria
                        </p>
                        <ul className="flex flex-wrap m-0 list-disc">
                          <li className="text-[14px] font-medium my-[0.25rem] ml-[2rem] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            Delivered a several standalone pages, and responsible for updating, optimizing and improving
                            user interface leading to improved user experience and improved SEO ranking.
                          </li>
                        </ul>
                      </div>
                      <div className="md:mt-[24px] mt-[28px] sm:text-[16px] text-[13px] xxs:text-[11px] w-full flex flex-col items-center justify-center">
                        <LinkButton
                          text="Download Resume"
                          link="https://drive.google.com/file/d/1owfOicUnT79Q2Z9Vy4nsAFc-RNUvAflM/view?usp=sharing"
                          bg={true}
                        />
                      </div>
                    </div>
                  </details>

                  <details className="question py-4 border-b border-grey-lighter">
                    <summary className="flex items-center font-bold text-[16px] md:text-[18px] text-slate-900 dark:text-gray-300">
                      Volunteer Experience
                      <button className="ml-auto">
                        <svg
                          className="fill-current opacity-75 w-4 h-4 -mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                        </svg>
                      </button>
                    </summary>

                    <div className="mt-4 leading-normal text-md text-start gap-2 flex flex-col">
                      <div className="w-full pb-[2rem] pl-[1rem] border-b border-dashed dark:border-[#264a73] border-gray-600">
                        <h3 className="text-slate-900 dark:text-white text-[14px] md:text-[16px] font-bold pb-2">
                          <b>Web Developer</b> {' — '}{' '}
                          <a
                            className="font-normal text-green-500"
                            href="https://ecoscigen.org"
                            target="_blank"
                            rel="noopener"
                          >
                            Eco Science Generation
                          </a>
                        </h3>
                        <p className="mt-[0.5rem] text-[0.9rem] text-gray-600 dark:text-gray-200">
                          NOV 2023 - PRESENT | Ibadan, Nigeria
                        </p>
                        <ul className="flex flex-wrap m-0 list-disc">
                          <li className="text-[14px] font-medium my-[0.25rem] ml-[2rem] text-gray-600 dark:text-gray-400 max-w-[65ch] p-0">
                            Responsible for setup, designing, coding, updating, optimizing and improving user interface
                            leading to improved user experience, improved SEO ranking and a proper representation of the
                            organizations ethos online.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </Layout>
  )
}
export default About
