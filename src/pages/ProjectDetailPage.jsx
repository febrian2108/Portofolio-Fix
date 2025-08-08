import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ExternalLink, Github, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '../data/Data'

const ProjectDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Find project by ID
    const foundProject = projects.find(p => p.id === parseInt(id))
    setProject(foundProject)
    setLoading(false)
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/projects')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>
    )
  }

  // Mock multiple images for demonstration - in real app, this would come from project data
  const projectImages = [
      project.image1,
      project.image2,
      project.image3,
      project.image4,
      project.image5,
      project.image6,
      project.image7,
      project.image8,
      project.image9,
      project.image10,
    ].filter(Boolean)

  // Mock skills used in project - in real app, this would come from project data
  const projectSkills = project.technologies?.map(tech => ({
    name: tech,
    icon: getSkillIcon(tech),
    category: getSkillCategory(tech)
  })) || []

  function getSkillIcon(skillName) {
    const iconMap = {
      'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg',
      'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
      'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Dart': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
      'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg',
      'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'Stripe': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg',
      'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
      'Expo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg',
      'OpenAI API': 'https://via.placeholder.com/32x32?text=AI',
      'Solidity': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg',
      'Web3.js': 'https://via.placeholder.com/32x32?text=W3',
      'Ethereum': 'https://via.placeholder.com/32x32?text=ETH',
      'MetaMask': 'https://via.placeholder.com/32x32?text=MM',
      'Framer Motion': 'https://via.placeholder.com/32x32?text=FM',
      'Vite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg',
      'Vuetify': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg',
      'PWA': 'https://via.placeholder.com/32x32?text=PWA',
      'OpenWeather API': 'https://via.placeholder.com/32x32?text=API',
      'Chart.js': 'https://via.placeholder.com/32x32?text=CJS',
      'D3.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg',
      'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
      'Streamlit': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg',
      'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
      'Hapi.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hapi/hapi-original.svg',
      'NLP': 'https://via.placeholder.com/32x32?text=NLP',
      'Vercel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
      'Scikit-learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
      'Surprise': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/surprise/surprise-original.svg',
      'Jupyter Notebook': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
      'ESLint': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg',
      'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
      'Apache': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg',
      'Tensorflow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      'Matplotlib': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg',
    }
    return iconMap[skillName] || 'https://via.placeholder.com/32x32?text=' + skillName.charAt(0)
  }

  function getSkillCategory(skillName) {
    const categoryMap = {
      'JavaScript': 'Frontend',
      'TypeScript': 'Frontend',
      'React': 'Frontend',
      'Vue.js': 'Frontend',
      'Angular': 'Frontend',
      'HTML5': 'Frontend',
      'CSS3': 'Frontend',
      'Tailwind CSS': 'Frontend',
      'Bootstrap': 'Frontend',
      'Framer Motion': 'Frontend',
      'Node.js': 'Backend',
      'Express': 'Backend',
      'Python': 'Backend',
      'Django': 'Backend',
      'Flask': 'Backend',
      'Java': 'Backend',
      'Flutter': 'Mobile',
      'React Native': 'Mobile',
      'Dart': 'Mobile',
      'Expo': 'Mobile',
      'MySQL': 'Database',
      'PostgreSQL': 'Database',
      'MongoDB': 'Database',
      'Firebase': 'Database',
      'Docker': 'DevOps',
      'Git': 'DevOps',
      'Vite': 'Tools',
      'Redux': 'State Management',
      'Stripe': 'Payment',
      'TensorFlow': 'AI/ML',
      'OpenAI API': 'AI/ML',
      'NLP': 'AI/ML',
      'Pandas': 'Data Science',
      'Streamlit': 'Tools',
      'NumPy': 'Data Science',
      'D3.js': 'Data Visualization',
      'Chart.js': 'Data Visualization',
      'Solidity': 'Blockchain',
      'Web3.js': 'Blockchain',
      'Ethereum': 'Blockchain',
      'MetaMask': 'Blockchain',
      'Vuetify': 'UI Framework',
      'PWA': 'Web Technology',
      'OpenWeather API': 'API',
      'Vercel': 'Tools',
      'Scikit-learn': 'AI/ML',
      'Surprise': 'AI/ML',
      'Matplotlib': 'AI/ML',
      'Jupyter Notebook': 'Data Science',
      'Hapi.js': 'Backend',
      'ESLint': 'Tools',
      'PHP': 'Backend',
      'Laravel': 'Backend',
      'Apache': 'Tools',
    }
    return categoryMap[skillName] || 'Other'
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length)
  }

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  }

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  }

  const imageVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Button
            variant="outline"
            onClick={() => navigate('/projects')}
            className="hover:shadow-md transition-shadow"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          <div className="flex justify-center items-center gap-4 mb-6">
            <Badge variant="secondary" className="text-sm">
              {project.category}
            </Badge>
            <Badge variant={project.status === 'Completed' ? 'default' : 'outline'} className="text-sm">
              {project.status}
            </Badge>
            <span className="text-gray-500 text-sm">
              Created: {new Date(project.created_at).toLocaleDateString()}
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Main Image */}
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gray-100">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={projectImages[currentImageIndex]}
                      alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                      variants={imageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                      onError={(e) => {
                        e.target.src = '/project-image/default.png'
                      }}
                    />
                  </AnimatePresence>
                  
                  {/* Navigation Arrows */}
                  {projectImages.length > 1 && (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                        onClick={prevImage}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                        onClick={nextImage}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                  
                  {/* Image Counter */}
                  {projectImages.length > 1 && (
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {projectImages.length}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Thumbnail Navigation */}
            {projectImages.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {projectImages.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-blue-500 ring-2 ring-blue-200'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/project-image/default.png'
                      }}
                    />
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right Column - Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-8"
          >
            {/* Project Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">About This Project</h2>
              <p className="text-gray-600 leading-relaxed text-lg text-justify">
                {project.description || 'No description available for this project.'}
              </p>
              {project.long_description && (
                <p className="text-gray-600 leading-relaxed">
                  {project.long_description}
                </p>
              )}
            </div>

            {/* Project Links */}
            <div className="flex flex-wrap gap-4">
              {project.github_url && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" asChild>
                    <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5 mr-2" />
                      View Source Code
                    </a>
                  </Button>
                </motion.div>
              )}
              {project.Link_url && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" asChild>
                    <a href={project.Link_url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Technologies Used Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 space-y-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            🛠️ Technologies Used
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {projectSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className="hover:shadow-lg transition-all duration-300 group-hover:border-blue-300">
                  <CardContent className="p-4 flex flex-col items-center space-y-3 text-center">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg hidden">
                        {skill.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        {skill.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {skill.category}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProjectDetailPage

