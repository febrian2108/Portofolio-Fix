import { motion, useMotionValue, useAnimationFrame } from 'framer-motion'
import { useRef, useState } from 'react'

const CompanyLogos = () => {
  const x = useMotionValue(0)
  const containerRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const companies = [
    { name: 'Dicoding', logo: '/company-logos/Logo_dicoding.png' },
    { name: 'Kampus Merdeka', logo: '/company-logos/Logo_Kampus_Merdeka.png' },
    { name: 'Ruang Guru', logo: '/company-logos/Logo_Ruangguru.png' },
    { name: 'Kampus Merdeka', logo: '/company-logos/Logo_Kampus_Merdeka.png' },
    { name: 'Protek', logo: '/company-logos/Logo_Protek.png' },
    { name: 'Delampoeng Coffee', logo: '/company-logos/Logo_Delampoeng.png' },
    { name: 'Travel Buddies', logo: '/company-logos/Logo_TravelBuddies.png' },
  ]

  // Animasi frame-by-frame (manual control)
  useAnimationFrame((t, delta) => {
    if (!isHovered) {
      const moveBy = (delta / 1000) * 100 // kecepatan pixel per detik
      x.set(x.get() - moveBy)
    }
  })

  return (
    <div className="w-full py-8">
      <p className="text-gray-400 text-sm uppercase tracking-wider text-center mb-6">
        Trusted by companies
      </p>
      <div
        ref={containerRef}
        className="overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          style={{ x }}
          className="flex space-x-12 whitespace-nowrap"
        >
          {[...companies, ...companies, ...companies].map((company, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={company.logo}
                alt={company.name}
                className="h-25 w-auto opacity-70 hover:opacity-100 transition duration-300 filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default CompanyLogos
