import { motion, AnimatePresence } from 'framer-motion';

const Dialog = ({ isOpen, onClose, message, type = 'success' }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-900 p-6 rounded-lg shadow-xl max-w-sm w-full"
            onClick={e => e.stopPropagation()}
          >
            <div className={`bg-green-200 rounded-full text-2xl mb-4 ${type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
              {type === 'success' ? '✓' : '✕'}
            </div>
            <p className="text-white mb-6">{message}</p>
            <button
              onClick={onClose}
              className="w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dialog;