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
    <div className="flex items-start justify-center  overflow-hidden">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
