import { MainMenu } from '../../data';
import NextLink from 'next/link';

export default function NavMenu() {
  return (
    <div className="relative w-full py-5 bg-transparent hidden sm:block">
      <nav className="relative flex-col items-center container mx-auto">
        <div className="w-full flex justify-evenly flex-col md:flex-row">

          {MainMenu.map((menu, i) => (
            <div
              className={`flex text-center justify-center items-center`}
              key={i}
            >
              <NextLink prefetch={false} href={`${menu?.path || ''}`}>
                <div className=" text-black uppercase text-sm font-bold hover:text-accent-color">
                  {menu?.label}
                </div>
              </NextLink>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
