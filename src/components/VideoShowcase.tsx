
import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface VideoProject {
  name: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
  duration: string;
}

const VideoShowcase = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);

  const videoProjects: VideoProject[] = [
    {
      name: "HyGear Fashion Platform",
      thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Complete e-commerce solution with advanced features",
      duration: "2:30"
    },
    {
      name: "Oxygen4India Emergency Platform",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Life-saving healthcare platform demonstration",
      duration: "1:45"
    },
    {
      name: "Roadies Koffe Houz Experience",
      thumbnail: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Modern coffee house digital experience",
      duration: "3:15"
    },
    {
      name: "Vidflyy Streaming Platform",
      thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Advanced video streaming and interaction features",
      duration: "4:20"
    }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-syne mb-4">
            Project Video Showcases
          </h2>
          <p className="text-lg text-gray-300 font-kanit">
            See our projects in action through detailed video demonstrations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {videoProjects.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative overflow-hidden rounded-lg bg-black">
                <img 
                  src={video.thumbnail} 
                  alt={video.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold mb-2">{video.name}</h3>
                  <p className="text-sm text-gray-300 mb-2">{video.description}</p>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">{video.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-lg overflow-hidden max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-black">{selectedVideo.name}</h3>
                  <button 
                    onClick={() => setSelectedVideo(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default VideoShowcase;
