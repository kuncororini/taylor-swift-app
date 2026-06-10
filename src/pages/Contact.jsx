import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Contact() {
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
          Contact
        </p>
        <h1 className="text-5xl font-bold text-white mb-6">
          Get in Touch
        </h1>
        <div className="w-16 h-px mb-8" style={{ backgroundColor: '#D6BEA1' }} />

        {/* Contact Items */}
        <div className="space-y-6">
          {[
            { label: 'Developer', value: 'Lintang Kuncororini' },
            { label: 'Student ID', value: '1152700002' },
            { label: 'Program', value: 'MSIB Studi Independen — Celerates CAMP Batch 4' },
            { label: 'Institution', value: 'Institut Teknologi Indonesia' },
            { label: 'Major', value: 'Teknik Informatika — Semester 6' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col gap-1 pb-4 border-b"
              style={{ borderColor: '#ffffff11' }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <span className="text-xs tracking-widest uppercase"
                style={{ color: '#D6BEA1' }}>
                {item.label}
              </span>
              <span className="text-sm" style={{ color: '#ffffff88' }}>
                {item.value}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Contact