import Card from '@/components/Card';
import { ImageField, KeyTextField } from '@prismicio/client';
import React from 'react'

type Project = {
    tags: string[]
    data: {
      hover_image: ImageField
      title: KeyTextField
      meta_description: KeyTextField
    }
    uid: string
}

interface WorkListProps {
    projects: Project[]
}

const WorkList = ({
    projects
}: WorkListProps) => {
  return (
    <div className="mt-5 grid grid-cols-1 grid-flow-row md:grid-cols-2 lg:grid-cols-3 p-10 place-items-center gap-8">
        {projects
          .filter((item) => (item.tags.includes("Special") || item.tags.includes("SPECIAL") || item.tags.includes("special")))
          .map((project, index) => (
              <Card 
                key={index}
                link={project.uid}
                image= {project.data.hover_image}
                title= {project.data.title}
                description= {project.data.meta_description}
                tags= {project.tags}
              />
          ))}
      </div>
  )
}

export default WorkList