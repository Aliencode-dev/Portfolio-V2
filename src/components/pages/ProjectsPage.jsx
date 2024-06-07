import Layout from '../layout/layout'
import LinkButton from '../shared/linkbutton'
import { ProjectCard, LoadingProjectCard } from '../shared/projectCard'
import React, { useState, useEffect } from 'react'
import { fetchProjects } from '../api/api'

const ProjectsPage = () => {
  const [projects, setProjects] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProjects()
        if (data.error) {
          setError(data.error)
        } else {
          setProjects(data)
        }
      } catch (error) {
        console.error('Error fetching userData on Project page:', error)
        setError('Failed to fetch userData on project page. Please try again later.')
      }
    }

    fetchData()
  }, [])

  return (
    <Layout>
      <div className="flex flex-col w-full px-5 items-center justify-center bg-[#fafafa] dark:bg-gray-900 dark:text-gray-100">
        <div className="flex flex-col max-w-[1040px] w-full items-center justify-center self-center">
          <div className="w-full h-[30%] mt-[20px] flex flex-col justify-center items-center gap-10 py-[60px]">
            <div className="flex flex-col justify-center relative items-center gap-1 md:w-2/3 w-4/5">
              <h1 className="font-bold md:text-[48px] text-[36px]">My Projects</h1>
              <p className="md:text-[20px] text-[18px] mt-[10px] font-light dark:text-gray-400">
                Here are some of my projects that have gone live or currently in development
              </p>
            </div>
            <LinkButton
              text="Start a Project"
              link="mailto:chidiebereokpechi@gmail.com?subject=Inquiry%&body=Dear%20Chidiebere,%0D%0A%0D%0AHow%20are%20you%3F%20I%20hope%20this%20email%20finds%20you%20well.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20name]"
              bg={true}
            />
          </div>
          <div className="w-full pb-[60px]">
            <>
              {projects && projects.length !== 0 ? (
                projects.map((project) => (
                  <ProjectCard
                    key={project.ID}
                    name={project.L_Name}
                    link={project.L_Link}
                    description={project.L_Descr}
                    image={`https://flinoid.com/ireserve/dashboard/images/${project.L_Image}`}
                    {...project}
                  />
                ))
              ) : (
                <>
                  <LoadingProjectCard />
                  <LoadingProjectCard />
                  <LoadingProjectCard />
                </>
              )}
            </>
          </div>

          <div className="flex flex-col justify-center items-center w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mb-[60px]">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
              You scrolled all the way down here!😉
            </h5>
            <p className="mb-5 md:w-[80%] text-base text-gray-500 sm:text-lg dark:text-gray-400">
              I really appriciate that. I hope you liked my work so far and i hope that we can start working together
              soonest.
            </p>
            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
              <a
                href="mailto:chidiebereokpechi@gmail.com?subject=Inquiry%&body=Dear%20Chidiebere,%0D%0A%0D%0AHow%20are%20you%3F%20I%20hope%20this%20email%20finds%20you%20well.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20name]"
                className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              >
                <svg
                  className="me-3 w-7 h-7"
                  width="28px"
                  height="28px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <g id="style=fill">
                      {' '}
                      <g id="email">
                        {' '}
                        <path
                          id="Subtract"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7 2.75C5.38503 2.75 3.92465 3.15363 2.86466 4.1379C1.79462 5.13152 1.25 6.60705 1.25 8.5V15.5C1.25 17.393 1.79462 18.8685 2.86466 19.8621C3.92465 20.8464 5.38503 21.25 7 21.25H17C18.615 21.25 20.0754 20.8464 21.1353 19.8621C22.2054 18.8685 22.75 17.393 22.75 15.5V8.5C22.75 6.60705 22.2054 5.13152 21.1353 4.1379C20.0754 3.15363 18.615 2.75 17 2.75H7ZM19.2285 8.3623C19.5562 8.10904 19.6166 7.63802 19.3633 7.31026C19.1101 6.98249 18.6391 6.9221 18.3113 7.17537L12.7642 11.4616C12.3141 11.8095 11.6858 11.8095 11.2356 11.4616L5.6886 7.17537C5.36083 6.9221 4.88982 6.98249 4.63655 7.31026C4.38328 7.63802 4.44367 8.10904 4.77144 8.3623L10.3185 12.6486C11.3089 13.4138 12.691 13.4138 13.6814 12.6486L19.2285 8.3623Z"
                          fill="#ffffff"
                        ></path>{' '}
                      </g>{' '}
                    </g>{' '}
                  </g>
                </svg>
                <div className="text-left rtl:text-right">
                  <div className="-mt-1 font-sans text-sm font-semibold">Send An E-mail</div>
                </div>
              </a>
              <a
                href="https://wa.me/2348109694608?text=Dear%20Chidiebere,%0D%0A%0D%0AHow%20are%20you%3F%20I%20hope%20this%20message%20finds%20you%20well.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20name]"
                className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              >
                <svg
                  className="me-3 w-7 h-7"
                  width="28px"
                  height="28px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"
                      fill="#ffffff"
                    ></path>
                  </g>
                </svg>

                <div className="text-left rtl:text-right">
                  <div className="-mt-1 font-sans text-sm font-semibold">Chat Instead</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default ProjectsPage
