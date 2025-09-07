"use client";
import { useEffect, useState } from "react";

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const YOUTUBE_PLAYLIST_ID = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ID;
const YOUTUBE_CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

interface Video {
  snippet: {
    title: string;
    resourceId: { videoId: string };
    thumbnails: { medium: { url: string } };
    channelId: string;
  };
}

interface ChannelInfo {
  snippet: {
    title: string;
    thumbnails: {
      default: { url: string };
      medium: { url: string };
      high: { url: string };
    };
  };
}

const YouTubeFeed = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [channelInfo, setChannelInfo] = useState<ChannelInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!YOUTUBE_API_KEY) {
          setError('Missing YouTube API key');
          return;
        }

        let fetchedVideos: Video[] = [];
        let primaryError: string | null = null;

        // 1) Try playlist first if provided
        if (YOUTUBE_PLAYLIST_ID) {
          try {
            const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=3&playlistId=${YOUTUBE_PLAYLIST_ID}&key=${YOUTUBE_API_KEY}`;
            const res = await fetch(playlistUrl);
            const data = await res.json();
            if (!data.error && Array.isArray(data.items) && data.items.length > 0) {
              fetchedVideos = data.items;
            } else {
              primaryError = data?.error?.message || 'Playlist returned no items';
            }
          } catch (e: any) {
            primaryError = e?.message || 'Playlist request failed';
          }
        }

        // 2) Fallback to channel search if no videos from playlist
        if (fetchedVideos.length === 0 && YOUTUBE_CHANNEL_ID) {
          try {
            const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${encodeURIComponent(
              YOUTUBE_CHANNEL_ID
            )}&order=date&maxResults=3&type=video&key=${YOUTUBE_API_KEY}`;
            const res = await fetch(searchUrl);
            const data = await res.json();
            if (!data.error && Array.isArray(data.items) && data.items.length > 0) {
              // Normalize to Video shape with resourceId.videoId
              fetchedVideos = data.items.map((item: any) => ({
                snippet: {
                  title: item.snippet.title,
                  resourceId: { videoId: item.id.videoId },
                  thumbnails: { medium: { url: item.snippet?.thumbnails?.medium?.url } },
                  channelId: item.snippet.channelId,
                },
              }));
            } else if (!primaryError) {
              primaryError = data?.error?.message || 'Channel search returned no items';
            }
          } catch (e: any) {
            if (!primaryError) primaryError = e?.message || 'Channel search request failed';
          }
        }

        if (fetchedVideos.length === 0) {
          setError(primaryError || 'No videos found. Check playlist/channel settings.');
          setVideos([]);
          return;
        }

        setVideos(fetchedVideos);

        // Fetch channel info using explicit env first, else from first video
        const channelIdForInfo = YOUTUBE_CHANNEL_ID || fetchedVideos[0]?.snippet?.channelId;
        if (channelIdForInfo) {
          const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIdForInfo}&key=${YOUTUBE_API_KEY}`;
          const channelRes = await fetch(channelUrl);
          const channelData = await channelRes.json();
          if (channelData.items && channelData.items.length > 0) {
            setChannelInfo(channelData.items[0]);
          }
        }

        setError(null);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load videos');
      }
    };
    fetchData();
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
    <section id="videos" className="w-full max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-bruin-navy mb-4">Game Highlights & Skills</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Watch Makaila's latest game highlights, skills demonstrations, and athletic development. 
          Subscribe to stay updated with new content automatically.
        </p>
      </div>
      
      {error && (
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-lg">
            <span className="text-red-600">⚠️</span>
            <span className="text-red-700 font-medium">{error}</span>
          </div>
        </div>
      )}
      
      {/* Featured Video - Larger display for the first video */}
      {videos.length > 0 && (
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videos[0].snippet.resourceId.videoId}?rel=0`}
                title={videos[0].snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-bruin-navy mb-2">{videos[0].snippet.title}</h3>
              <p className="text-gray-600">Latest highlight reel</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Additional Videos Grid */}
      {videos.length > 1 && (
        <div className="mb-12">
          <h3 className="text-2xl font-heading font-bold text-bruin-navy mb-6 text-center">More Highlights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {videos.slice(1).map((video, idx) => (
              <div key={video.snippet.resourceId.videoId + idx} className="group cursor-pointer">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}?rel=0`}
                    title={video.snippet.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="mt-3">
                  <h4 className="font-medium text-bruin-navy text-sm line-clamp-2">{video.snippet.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Enhanced Subscribe Section */}
      {videos.length > 0 && (
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-2xl p-8 text-center shadow-xl">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Stay Updated with Makaila's Journey
            </h3>
            <p className="text-white mb-6 text-lg opacity-95">
              Subscribe to get notified when new highlights, skills videos, and game footage are posted. 
              Perfect for coaches tracking athletic development.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div
                className="g-ytsubscribe"
                data-channelid={(YOUTUBE_CHANNEL_ID as string) || videos[0]?.snippet?.channelId || ""}
                data-layout="full"
                data-count="default"
                data-theme="dark"
              ></div>
              <div className="text-white text-sm opacity-90">
                <p className="mb-1">✓ Get instant notifications</p>
                <p className="mb-1">✓ Never miss new content</p>
                <p>✓ Track progress over time</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Call to Action Section */}
      {videos.length > 0 && (
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-bruin-navy mr-4">
                <img 
                  src={channelInfo?.snippet?.thumbnails?.high?.url || "/assets/makaila-headshot.webp"} 
                  alt="Makaila Schneider" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-heading font-bold text-bruin-navy">
                  Watch More of Makaila's Highlights
                </h3>
                <p className="text-gray-600">Softball Player & Student Athlete</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Explore Makaila's complete collection of game highlights, skills demonstrations, and training videos. 
              See her athletic development and performance across different games and seasons.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://www.youtube.com/channel/${encodeURIComponent(((YOUTUBE_CHANNEL_ID as string) || videos[0]?.snippet?.channelId) || '').replace('%E2%80%91','-')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Visit Makaila's YouTube Channel
              </a>
              <a
                href={`https://www.youtube.com/playlist?list=${YOUTUBE_PLAYLIST_ID ?? ''}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-bruin-navy text-white font-semibold rounded-lg transition-colors duration-200 opacity-100 visible"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                View All Game Highlights
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default YouTubeFeed; 