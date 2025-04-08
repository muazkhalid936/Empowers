import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className=" font_inter py-2">
        <div className=" flex justify-between md:items-center mx-10 lg:mx-16">
          <div className="h-1/2 sm:h-auto">
            <Link href="/">
              <Image
                alt="Hero image"
                src={"/empowerer_logo_re_bg.png"}
                className="sm:h-auto  h-1/2 w-auto"
                width={200}
                height={150}
                priority
              />
            </Link>
          </div>

          <div className="navbar_size lg:flex  list-none justify-center items-center flex-wrap gap-5 md:font-semibold">
          <Link href="/" className="bg-[#29ab87] text-white px-6 py-2 rounded border border-transparent  hover:text-[#29ab87] hover:bg-transparent hover:border-[#29ab87] transition">Join Now
          </Link>
        
          </div>
  
        </div>

      </div>
    );
  }
  