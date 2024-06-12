import React, { useEffect } from 'react'
import { fetchUserData } from '../api/api'

const FaviconUpdater = () => {
  useEffect(() => {
    const fetchFavicon = async () => {
      try {
        const response = await fetchUserData()
        response.map((data) => {
          const favicon = document.querySelector('link[rel="icon"]')
          const faviconLink = document.querySelector('link[rel="shortcut icon"]')
          const ogImageMetaTag = document.querySelector('meta[property="og:image"]')
          const twitterImageMetaTag = document.querySelector('meta[name="twitter:image"]')
          if (favicon) {
            favicon.href = `https://flinoid.com/ireserve/dashboard/images/${data.Logo}`
            faviconLink.href = `https://flinoid.com/ireserve/dashboard/images/${data.Logo}`
            ogImageMetaTag.setAttribute('content', `https://flinoid.com/ireserve/dashboard/images/${data.Logo}`)
            twitterImageMetaTag.setAttribute('content', `https://flinoid.com/ireserve/dashboard/images/${data.Logo}`)
          } else {
            const newFavicon = document.createElement('link')
            newFavicon.rel = 'icon'
            newFavicon.href = `https://flinoid.com/ireserve/dashboard/images/${data.Logo}`
            document.head.appendChild(newFavicon)
          }
        })
      } catch (error) {
        console.error('Error fetching favicon:', error)
      }
    }
    fetchFavicon()
    return () => {
      //Clean up the code
    }
  }, [])
}
export default FaviconUpdater
