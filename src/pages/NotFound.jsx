import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ backgroundColor: '#0a0a0a' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm tracking-[0.4em] uppercase mb-4"
          style={{ color: '#D6BEA1' }}>
          404
        </p>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
          Not Found
        </h1>
        <div className="w-16 h-px mx-auto mb-8" style={{ backgroundColor: '#D6BEA1' }} />
        <p className="text-sm mb-12" style={{ color: '#ffffff44' }}>
          Halaman yang kamu cari tidak ada.
        </p>
        <motion.button
          onClick={() => navigate('/')}
          className="px-8 py-4 rounded-full text-sm tracking-widest uppercase font-semibold"
          style={{
            backgroundColor: '#D6BEA1',
            color: '#0a0a0a',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          ← Kembali ke Home
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default NotFound