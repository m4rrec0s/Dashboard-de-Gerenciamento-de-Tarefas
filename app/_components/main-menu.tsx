import { ListCheckIcon, ChartColumnBigIcon } from "lucide-react";
import { Menu, MenuContent, MenuHeader, MenuItem } from "./basics/menu";
import Image from "next/image";
import { useAuth } from "../_context/auth-context";
import Link from "next/link";

const MainMenu = () => {
  const { user } = useAuth();

  if (!user) return null;
  
  return (
    <Menu>
      <MenuContent>
        <MenuHeader>
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/icon.jpeg"
              alt="Logo"
              width={100}
              height={100}
              className="rounded-full p-1 border"
              priority
            />
            <div className="text-center">
              <h3 className="text-md font-semibold text-white">{user.name}</h3>
              <span className="text-gray-400 text-sm">{user.email}</span>
            </div>
          </div>
        </MenuHeader>
        <div className="flex flex-col gap-1 w-full">
          <Link href="/" className="flex items-center gap-2 py-2 px-3 hover:opacity-80 text-white">
            <ListCheckIcon size={24} />
            <span>Tarefas</span>
          </Link>
          <Link href="/charts" className="flex items-center gap-2 py-2 px-3 hover:opacity-80 text-white">
            <ChartColumnBigIcon size={24} />
            <span>Gráficos</span>
          </Link>
        </div>
      </MenuContent>
    </Menu>
  );
};

export default MainMenu;