import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const videos = [
  {
    title: "2024 SLCC Bruins Highlight Reel",
    src: "https://www.youtube.com/embed/VIDEO_ID1",
    description: "Makaila's top plays and key moments from the 2024 season.",
    views: "2,300+ views"
  },
  {
    title: "Full Game: SLCC vs. South Mountain CC Cougars",
    src: "https://www.youtube.com/embed/VIDEO_ID2",
    description: "Full game footage featuring Makaila's defensive and offensive highlights.",
    views: "1,100+ views"
  },
];

const Videos = () => (
  <section id="videos" className="max-w-5xl mx-auto py-20 px-4">
    <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2 text-bruin-navy text-center">Video Highlights</h2>
    <div className="w-16 h-1 bg-bruin-gold mx-auto mb-8 rounded-full" />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {videos.map((video, i) => (
        <Card key={i} className="bg-white border-2 border-bruin-gold shadow-md">
          <CardHeader>
            <CardTitle className="text-bruin-navy text-lg font-heading font-bold mb-2">{video.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full mb-2 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-bruin-navy text-sm mb-1 font-body">{video.description}</div>
            <div className="text-bruin-gold text-xs font-semibold font-body">{video.views}</div>
          </CardContent>
        </Card>
      ))}
    </div>
    <div className="flex justify-center mt-8">
      <a href="#" className="text-bruin-navy hover:text-bruin-gold font-bold underline font-body transition">More Videos</a>
    </div>
  </section>
);

export default Videos; 