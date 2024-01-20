const SRC =
  "https://www.tiktok.com/@iselavillasana/video/7215310094232259883?is_from_webapp=1&sender_device=pc";
export default function VideoPlayer() {
  return <video src={SRC} controls={false} />;
}
