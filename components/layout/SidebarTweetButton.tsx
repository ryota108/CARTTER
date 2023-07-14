import useLoginModal from "@/hooks/useLoginModal";
import { useCallback } from "react";
import { BsSendFill } from "react-icons/bs";


const SidebarTweetButton = () => {
  const loginModal = useLoginModal();

  const onClick = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);

  return (
    <div onClick={onClick}>
      <div className="mt-6 lg:hidden rounded-full md:h-14 md:w-14 md:bottom-0 h-12 w-12 relative bottom-3 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
      <BsSendFill color="white" size={28}/>
      </div>
      <div className="mt-6 hidden lg:block px-4 py-2 rounded-full bg-sky-500 hover:bg-opacity-90 cursor-pointer transition">
        <p className="hidden lg:block text-center font-semibold text-white text-[20px]">
          Tweet
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
