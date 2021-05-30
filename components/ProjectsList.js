import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'project 1',
    description: 'this is project 1 description',
    image: '/project-1.jpg',
    tech: ['django', 'html', 'css']
  },
  {
    title: 'project 2',
    description: 'this is project 1 description',
    image: '/project-2.png',
    tech: ['django', 'html', 'css']
  },
  {
    title: 'project 3',
    description: 'this is project 1 description',
    image: '/project-3.jpg',
    tech: ['django', 'html', 'css']
  },
  {
    title: 'project 4',
    description: 'this is project 1 description',
    image: '/project-4.png',
    tech: ['django', 'html', 'css']
  }
]

const ProjectsList = () => {
  return (
    <div className="flex flex-wrap justify-around gap-10">
      {projects.map((project) => {
        return (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            tech={project.tech}
          />
        )
      })}
    </div>
  )
}

export default ProjectsList
