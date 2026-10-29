import Image from "next/image";
import { Video } from "lucide-react";
import "./video-block.css";

export type VideoSource = { src: string | null; poster: string; title: string };

// Shows the video when `src` is set (e.g. "/videos/perle-preziose.mp4"); otherwise a clearly marked placeholder.
export function VideoBlock({ video }: { video: VideoSource }) {
  return (
    <figure className="video-block">
      {video.src ? (
        <video controls playsInline preload="metadata" poster={video.poster} aria-label={video.title}>
          <source src={video.src} />
        </video>
      ) : (
        <div className="video-block-poster">
          <Image src={video.poster} alt="" fill sizes="(max-width: 900px) calc(100vw - 48px), 600px" />
        </div>
      )}
      <figcaption>
        {video.src ? video.title : <><Video size={18} aria-hidden="true" /><span><strong>Segnaposto video.</strong> Qui verrà pubblicato il video: {video.title.toLowerCase()}.</span></>}
      </figcaption>
    </figure>
  );
}
