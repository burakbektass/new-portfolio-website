import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "python",
  "react",
  "angular",
  "html5",
  "css3",
  "redux",
  "sqlite",
  "mongodb",
  "amazonaws",
  "jsonwebtokens",
  "vercel",
  "docker",
  "git",
  "github",
  "vite", 
  "visualstudiocode",
  "swagger",
  "figma",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
