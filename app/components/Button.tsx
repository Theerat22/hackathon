// import Image, { StaticImageData } from "next/image";
import Link from "next/link";
interface SoundCard {
    name: string;
    // imageUrl: StaticImageData;
    slug: string;
  }
const SoundCard: React.FC<SoundCard> = ({ name, slug}) => {
    return (
        <Link href={`/sound/${slug}`}>
        <div className="absolute bg-white p-20 rounded-xl shadow-lg z-10 flex flex-col items-center justify-center transform hover:scale-110 transition duration-300 lg:mt-20">
            <h1 className="text-customGreen font-bold text-3xl">{name}</h1>
        </div>
    </Link>
    );
  };
  
  export default SoundCard;
  