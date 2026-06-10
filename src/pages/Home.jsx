import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { albums } from '../data/albums'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

function Home() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const filtered = albums.filter((album) =>
    album.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16"
      style={{ backgroundColor: '#0a0a0a' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm tracking-[0.4em] uppercase mb-3"
          style={{ color: '#D6BEA1' }}>
          Discography
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
          Taylor Swift
        </h1>
        <div className="w-24 h-px mx-auto mt-6" style={{ backgroundColor: '#D6BEA1' }} />
      </motion.div>

      {/* Search Bar — State Management */}
      <motion.div
        className="w-full max-w-md mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <input
          type="text"
          placeholder="Search album..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-6 py-3 rounded-full text-sm text-white outline-none"
          style={{
            backgroundColor: '#ffffff11',
            border: '1px solid #ffffff22',
            caretColor: '#D6BEA1',
          }}
        />
        {search && (
          <motion.p
            className="text-xs text-center mt-3"
            style={{ color: '#ffffff44' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {filtered.length} album ditemukan untuk "{search}"
          </motion.p>
        )}
      </motion.div>

      {/* Album Cards */}
      {filtered.length > 0 ? (
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filtered.map((album) => (
            <motion.div
              key={album.id}
              variants={cardVariants}
              whileHover={{ scale: 1.04, y: -8 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate(`/album/${album.slug}`)}
              className="cursor-pointer rounded-2xl overflow-hidden relative group"
              style={{
                backgroundColor: album.colors.bg,
                border: `1px solid ${album.colors.primary}33`
              }}
            >
              {/* Album Art */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={album.cover}
                  alt={album.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to top, ${album.colors.primary}, transparent)` }}
                />
              </div>

              {/* Card Info */}
              <div className="p-4">
                <p className="text-xs tracking-[0.3em] uppercase mb-1"
                  style={{ color: album.colors.primary }}>
                  {album.year}
                </p>
                <h2 className="text-lg font-bold text-white mb-2">
                  {album.title}
                </h2>
                <div className="flex items-center gap-2 text-sm"
                  style={{ color: album.colors.primary }}>
                  <span>Explore Album</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.p
          className="text-white text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Album "{search}" tidak ditemukan.
        </motion.p>
      )}

      {/* Nav Links */}
      <motion.div
        className="flex gap-8 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {[
          { label: 'About', path: '/about' },
          { label: 'Contact', path: '/contact' },
        ].map((link) => (
          <motion.button
            key={link.path}
            onClick={() => navigate(link.path)}
            className="text-xs tracking-widest uppercase hover:opacity-70 transition-opacity"
            style={{ color: '#ffffff44' }}
            whileHover={{ color: '#ffffff' }}
          >
            {link.label}
          </motion.button>
        ))}
      </motion.div>

      <motion.p
        className="mt-6 text-xs tracking-widest uppercase"
        style={{ color: '#ffffff22' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Select an album to explore
      </motion.p>
    </motion.div>
  )
}

export default Home