import { useRouter } from "next/router";
import { GiOpenTreasureChest } from "react-icons/gi";

const SidebarLogo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push("/");
      }}
      className="rounded-full h-14 w-14 p-4 hidden md:block flex items-center justify-center hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer transition"
    >
       <GiOpenTreasureChest size={28} color="white" />
    </div>
  );
};

export default SidebarLogo;
