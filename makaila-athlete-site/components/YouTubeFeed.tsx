"use client";
import { useEffect, useState } from "react";

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const YOUTUBE_PLAYLIST_ID = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ID;

interface Video {
  snippet: {
    title: string;
    resourceId: { videoId: string };
    thumbnails: { medium: { url: string } };
    channelId: string;
  };
}

const YouTubeFeed = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        if (!YOUTUBE_API_KEY || !YOUTUBE_PLAYLIST_ID) {
          console.log('Missing API key or playlist ID', { YOUTUBE_API_KEY, YOUTUBE_PLAYLIST_ID });
          setError('Missing YouTube API configuration');
          return;
        }
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=3&playlistId=${YOUTUBE_PLAYLIST_ID}&key=${YOUTUBE_API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log('YouTube API response:', data);
        
        if (data.error) {
          console.error('YouTube API error:', data.error);
          setError(`YouTube API Error: ${data.error.message || 'Unknown error'}`);
          return;
        }
        
        setVideos(data.items || []);
        setError(null);
      } catch (err) {
        console.error('Error fetching videos:', err);
        setError('Failed to load videos');
      }
    };
    fetchVideos();
  }, []);

  // Load YouTube subscribe button script
  useEffect(() => {
    if (document.getElementById("youtube-platform-js")) return;
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js";
    script.id = "youtube-platform-js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-bruin-navy mb-8 text-center">Latest Videos</h2>
      
      {error && (
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-lg">
            <span className="text-red-600">⚠️</span>
            <span className="text-red-700 font-medium">{error}</span>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
        {videos.map((video, idx) => (
          <div key={video.snippet.resourceId.videoId + idx} className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        ))}
      </div>
      
      {/* YouTube Subscribe Button - only show if we have videos */}
      {videos.length > 0 && (
        <div className="flex justify-center">
          <div
            className="g-ytsubscribe"
            data-channelid={videos[0]?.snippet?.channelId || ""}
            data-layout="default"
            data-count="default"
          ></div>
        </div>
      )}
    </section>
  );
};

export default YouTubeFeed; 