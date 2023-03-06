import { FaGithub } from "react-icons/fa";

function About() {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg">
      <p className="text-2xl mb-4">
      {" "}
        <a
          href="https://github.com/yourusername"
          className="underline hover:text-purple-500"
        >
          <FaGithub size={32} className="inline-block mr-2 text-purple-500" />
          eren-eroglu
        </a>
      </p>
      <h1 className="text-6xl mb-4 font-bold tracking-tight">
        Github Explorer <span className="text-purple-500">X</span>
      </h1>
      <p className="text-xl leading-relaxed">
        Welcome to the Cyberpunk universe of Github Explorer{" "}
        <span className="text-purple-500">X</span> - the ultimate tool for
        navigating the dark alleys and neon-lit streets of the GitHub network.
        So put on your cyber-goggles and get ready to explore the cutting-edge
        of the digital frontier with Github Explorer{" "}
        <span className="text-purple-500">X</span>.
        But be warned - in this world, information is power, and there are those
        who will stop at nothing to keep their secrets.
      </p>
    </div>
  );
}

export default About;
