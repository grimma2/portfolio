"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink } from "react-icons/fi";

interface ProjectPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectUrl: string;
  projectName: string;
}

export function ProjectPreviewModal({
  isOpen,
  onClose,
  projectUrl,
  projectName,
}: ProjectPreviewModalProps) {
  const [loading, setLoading] = useState(true);

  // Блокируем прокрутку страницы, когда модальное окно открыто
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative w-full max-w-5xl h-[80vh] bg-white dark:bg-gray-800 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold">{projectName}</h3>
              <div className="flex items-center space-x-2">
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors p-2"
                  aria-label="Открыть внешнюю ссылку"
                >
                  <FiExternalLink size={20} />
                </a>
                <button
                  onClick={onClose}
                  className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors p-2"
                  aria-label="Закрыть"
                >
                  <FiX size={20} />
                </button>
              </div>
            </div>

            <div className="relative w-full h-[calc(100%-4rem)]">
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
                </div>
              )}
              <iframe
                src={projectUrl}
                title={`Preview: ${projectName}`}
                className="w-full h-full"
                sandbox="allow-scripts allow-same-origin allow-forms"
                onLoad={() => setLoading(false)}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 