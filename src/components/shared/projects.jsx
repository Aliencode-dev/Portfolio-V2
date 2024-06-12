import { ProjectCard, LoadingProjectCard } from './projectCard'
import ILinksButton from './ILinkButton'
import React, { useState, useEffect } from 'react'
import { fetchProjects } from '../api/api'

function Projects() {
  const [projects, setProjects] = useState(null)
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await fetchProjects()
        if (data.error) {
          setError(data.error)
        } else {
          setProjects(data)
        }
      } catch (error) {
        console.error('Error fetching projects:', error)
        setError('Failed to fetch projects. Please try again later.')
      }
    }
    fetchdata()
  }, [])
  return (
    <>
      <div className="flex flex-col items-center w-full h-auto bg-[#fafafa] dark:bg-gray-900 shadow-section self-center px-0 py-[24px]">
        <div className="flex flex-col w-full relative items-center h-auto max-w-[1040px] pt-[28px] sm:px-[24px] px-[20px] pb-[10px] gap-[10px]">
          <div className="flex flex-row items-center w-full h-auto justify-center overflow-hidden">
            <span className="hidden sm:block w-full h-[2px] border-b-[1px] border-white bg-[#dddddd]"></span>
            <div className="w-auto h-auto sm:px-[20px]">
              <h3 className="m-0 w-auto font-semibold xxs:text-[10px] xxs:leading-4 sm:text-[18px] text-[13px] leading-6 lg:leading-[34px] text-center sm:tracking-[4px] tracking-[2px] xxs:tracking-[1px] text-gray-500 uppercase sm:whitespace-nowrap">
                check out some of my latest work
                <span className="disp-mobi">on full web projects and lots more</span>
              </h3>
            </div>
            <span className="hidden sm:block w-full h-[2px] border-b-[1px] border-white bg-[#dddddd]"></span>
          </div>

          <div className="inline sm:px-[24px] pt-[20px] pb-0 w-full h-auto">
            <>
              {projects && projects.length !== 0 ? (
                projects.map((project, index) =>
                  index < 3 ? (
                    <ProjectCard
                      key={project.ID}
                      name={project.L_Name}
                      link={project.L_Link}
                      description={project.L_Descr}
                      image={`https://flinoid.com/ireserve/dashboard/images/${project.L_Image}`}
                      {...project}
                    />
                  ) : null
                )
              ) : (
                <>
                  <LoadingProjectCard />
                  <LoadingProjectCard />
                  <LoadingProjectCard />
                </>
              )}
            </>
          </div>
          {projects && (
            <div className="md:mt-[46px] mt-[28px] sm:text-[16px] text-[13px] xxs:text-[11px]">
              <ILinksButton text="View More Projects" link="/projects" myStyle={{}} bg={true} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
export default Projects
