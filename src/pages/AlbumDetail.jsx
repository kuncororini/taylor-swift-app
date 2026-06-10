import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { albums } from '../data/albums'

function AlbumDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const album = albums.find((a) => a.slug === slug)
  const [activeImage, setActiveImage] = useState(0)

  if (!album) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-2xl">Album not found.</p>
      </div>
    )
  }

  return (
    <motion.div
      className="min-h-screen px-6 py-12 md:px-16"
      style={{ backgroundColor: album.colors.bg }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back Button */}
      <motion.button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-sm tracking-widest uppercase mb-12 hover:opacity-70 transition-opacity"
        style={{ color: album.colors.primary }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        ← Back
      </motion.button>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-6xl mx-auto">

        {/* Left — Gallery */}
        <motion.div
          className="flex-shrink-0 w-72 md:w-96"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Main Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImage}
              src={album.images[activeImage]}
              alt={album.title}
              className="w-full aspect-square object-cover rounded-2xl shadow-2xl mb-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          {/* Thumbnails */}
          <div className="flex gap-3 justify-center">
            {album.images.map((img, i) => (
              <motion.div
                key={i}
                onClick={() => setActiveImage(i)}
                className="cursor-pointer rounded-lg overflow-hidden"
                style={{
                  width: '72px',
                  height: '72px',
                  border: activeImage === i
                    ? `2px solid ${album.colors.primary}`
                    : '2px solid transparent',
                  opacity: activeImage === i ? 1 : 0.5,
                }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={img}
                  alt={`${album.title} ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Info */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          {/* Year */}
          <p
            className="text-sm tracking-[0.4em] uppercase mb-2"
            style={{ color: album.colors.primary }}
          >
            {album.year}
          </p>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">
            {album.title}
          </h1>
          <p className="text-lg mb-6" style={{ color: album.colors.primary }}>
            Taylor Swift
          </p>

          {/* Divider */}
          <div
            className="w-16 h-px mb-6"
            style={{ backgroundColor: album.colors.primary }}
          />

          {/* Description */}
          <p
            className="text-sm leading-relaxed mb-8 max-w-lg"
            style={{ color: '#ffffff99' }}
          >
            {album.description}
          </p>

        

          {/* Spotify Button */}
          <motion.a
            href={album.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm tracking-widest uppercase"
            style={{
              backgroundColor: album.colors.primary,
              color: album.colors.bg,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            animate={{
              boxShadow: [
                `0 0 0px ${album.colors.primary}00`,
                `0 0 20px ${album.colors.primary}88`,
                `0 0 0px ${album.colors.primary}00`,
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🎵 Listening Now on Spotify
          </motion.a>

          {/* Tracklist */}
          <div className="mt-12">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: album.colors.primary }}
            >
              Tracklist
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {album.tracklist.map((track, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 text-sm py-2 border-b border-white/5"
                  style={{ color: '#ffffff88' }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.04 }}
                >
                  <span
                    className="text-xs w-5 text-right flex-shrink-0"
                    style={{ color: album.colors.primary + '88' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {track}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AlbumDetail