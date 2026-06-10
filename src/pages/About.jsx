import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate()

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      style={{ backgroundColor: '#0a0a0a' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="max-w-2xl w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Back */}
        <button
          onClick={() => navigate('/')}
          className="text-sm tracking-widest uppercase mb-12 hover:opacity-70 transition-opacity"
          style={{ color: '#D6BEA1' }}
        >
          ← Back
        </button>

        {/* Title */}
        <p className="text-sm tracking-[0.4em] uppercase mb-3"
          style={{ color: '#D6BEA1' }}>
          About
        </p>
        <h1 className="text-5xl font-bold text-white mb-6">
          Taylor Swift <br /> Discography App
        </h1>
        <div className="w-16 h-px mb-8" style={{ backgroundColor: '#D6BEA1' }} />

        {/* Content */}
        <div className="space-y-6" style={{ color: '#ffffff88' }}>
          <p className="text-sm leading-relaxed">
            Aplikasi ini dibuat sebagai tugas Individual Challenge dalam program
            MSIB Studi Independen Celerates CAMP Batch 4, dengan fokus pada
            implementasi React Routing dan State Management.
          </p>
          <p className="text-sm leading-relaxed">
            Menampilkan 3 album ikonik Taylor Swift — Reputation (2017),
            Lover (2019), dan 1989 (2014) — lengkap dengan tracklist,
            galeri gambar, dan tautan langsung ke Spotify.
          </p>
          <p className="text-sm leading-relaxed">
            Dibangun menggunakan React, React Router DOM v6, Framer Motion,
            dan Tailwind CSS.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mt-12">
          <p className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: '#D6BEA1' }}>
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-3">
            {['React', 'Vite', 'React Router DOM v6', 'Framer Motion', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-xs"
                style={{
                  backgroundColor: '#ffffff11',
                  border: '1px solid #ffffff22',
                  color: '#ffffff88'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About