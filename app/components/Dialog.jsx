'use client';
import { motion, AnimatePresence } from 'framer-motion';

const Dialog = ({ isOpen, onClose, message, type = 'success' }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-gray-900/95 p-8 rounded-xl shadow-2xl max-w-sm w-full flex flex-col items-center border border-gray-800"
            onClick={e => e.stopPropagation()}
          >
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6 ${
                type === 'success' 
                  ? 'bg-green-500/10 text-green-500 border-2 border-green-500/20' 
                  : 'bg-red-500/10 text-red-500 border-2 border-red-500/20'
              }`}
            >
              {type === 'success' ? '✓' : '✕'}
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-gray-200 text-center mb-8 text-lg"
            >
              {message}
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                type === 'success'
                  ? 'bg-green-500 hover:bg-green-600 text-white'
                  : 'bg-red-500 hover:bg-red-600 text-white'
              }`}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dialog;