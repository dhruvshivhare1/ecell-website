import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { FaYoutube } from 'react-icons/fa'

// Define podcast data type
interface Podcast {
  id: string
  thumbnailUrl: string
  youtubeLink: string
}

// Function to extract YouTube video ID from URL
const extractVideoId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return (match && match[2].length === 11) ? match[2] : null
}

// Function to fetch YouTube video thumbnail
const fetchYoutubeThumbnail = async (videoId: string): Promise<string> => {
  try {
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY

    if (!API_KEY) {
      throw new Error('YouTube API key is not set')
    }

    const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
      params: {
        part: 'snippet',
        id: videoId,
        key: API_KEY
      }
    })

    const videoData = response.data.items[0]
    if (!videoData) {
      throw new Error('Video not found')
    }

    return videoData.snippet.thumbnails.maxres 
      ? videoData.snippet.thumbnails.maxres.url 
      : videoData.snippet.thumbnails.high.url
  } catch (error) {
    console.error('Error fetching YouTube thumbnail:', error)
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  }
}

const PodcastsSection: React.FC = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([
    {
      id: '1',
      youtubeLink: 'https://youtu.be/3rdJBk2sKZc?si=9FLS7d_I4WImbX4q',
      thumbnailUrl: '' // Will be populated dynamically
    },
    {
      id: '2',
      youtubeLink: 'https://youtu.be/fUxl-yTVIfQ?si=a6j85O5SefS6YLfl',
      thumbnailUrl: '' // Will be populated dynamically
    },
    {
      id: '3',
      youtubeLink: 'https://youtu.be/bdbQNryce-c?si=DmtI94X3pKh3hc3I',
      thumbnailUrl: '' // Will be populated dynamically
    },
    {
      id: '4',
      youtubeLink: 'https://youtu.be/HB_S1EKntd8?si=_BujQlPTuly_3Ylm',
      thumbnailUrl: '' // Will be populated dynamically
    }
  ])

  useEffect(() => {
    const fetchThumbnails = async () => {
      const updatedPodcasts = await Promise.all(
        podcasts.map(async (podcast) => {
          const videoId = extractVideoId(podcast.youtubeLink)
          if (videoId) {
            const thumbnailUrl = await fetchYoutubeThumbnail(videoId)
            return { ...podcast, thumbnailUrl }
          }
          return podcast
        })
      )
      setPodcasts(updatedPodcasts)
    }

    fetchThumbnails()
  }, [])

  const handlePodcastClick = (youtubeLink: string) => {
    window.open(youtubeLink, '_blank')
  }

  return (
    <section className="section-padding bg-dark-200">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-primary">Podcasts</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Dive into insightful discussions and entrepreneurial journeys
          </p>
        </div>

        <motion.div 
          className="flex overflow-x-scroll scrollbar-hide space-x-6 pb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {podcasts.map((podcast) => (
            <motion.div
              key={podcast.id}
              className="flex-shrink-0 w-72 bg-dark-100 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              onClick={() => handlePodcastClick(podcast.youtubeLink)}
            >
              <div className="relative">
                {podcast.thumbnailUrl ? (
                  <img 
                    src={podcast.thumbnailUrl} 
                    alt="Podcast Thumbnail" 
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      const imgElement = e.target as HTMLImageElement
                      imgElement.src = '/fallback-podcast-thumbnail.png'
                    }}
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-700 animate-pulse flex items-center justify-center">
                    <span className="text-gray-400">Loading Thumbnail...</span>
                  </div>
                )}
                <div className="absolute top-2 right-2 bg-red-500 rounded-full p-2">
                  <FaYoutube className="text-white text-2xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default PodcastsSection
