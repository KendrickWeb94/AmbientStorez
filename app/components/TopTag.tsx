import { ChevronDown } from "lucide-react";


const TopTag = () => {

 

  return (
    <div className="w-full bg-black mx-auto dark:bg-white p-2 flex justify-end">
      <ul className="list-none flex mx-auto w-full flex-wrap text-white text-sm dark:text-black gap-3 items-center justify-between max-w-[94%]">
        <li className="opacity-0 ds:hidden md:block">hellooeeooe</li>
        <li className="flex items-center flex-wrap gap-4">
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
          <p className="font-semibold underline cursor-pointer">ShopNow</p>
        </li>
        <li className=" flex items-center gap-5">
            <p>English</p>
            <ChevronDown size="18px" />
        </li>
      </ul>
    </div>
  );
};

export default TopTag;

