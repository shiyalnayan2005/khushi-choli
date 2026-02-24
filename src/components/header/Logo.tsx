import { Link } from "react-router-dom";

export const Logo: React.FC = () => {
  return (
    <Link
      to="/"
      aria-label="Khushi Choli Collection"
      className=" inline-block group font-fredoka hover:scale-105 transition-transform"
    >
      <div className="text-3xl font-bold tracking-wide">
        <span className="text-pink-500">Khushi</span>
        <span className=" dark:text-white">Choli</span>
      </div>
      <div className="flex justify-between w-full uppercase text-xs leading-loose border-t border-t-pink-500 dark:text-white">
        <span className=" text-pink-500">✦</span>
        {" collection ".split("").map((char) => (
          <span>{char}</span>
        ))}
        <span className=" text-pink-500">✦</span>
      </div>
    </Link>
  );
};
