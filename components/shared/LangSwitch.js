import Link from 'next/link';
import { useState } from 'react';
import LeftAccentedH2Text from './LeftAccentedH2Text';
import { Languages } from '../../data';

export default function LangSwitch() {
  const [isOn, setIsON] = useState(false);
  return (
    <>
      <div className="relative">
        <div
          onClick={() => setIsON(!isOn)}
          className="relative text-gray-400 uppercase font-semibold text-xs cursor-pointer"
        >
          {!isOn ? '+ select language' : 'close'}
        </div>
      </div>
      {isOn && (
        <div className="py-5 px-10 align-center w-[60vw] md:w-[30vw] overflow-y-auto absolute right-0 bottom-0 h-[90vh] bg-white text-black mb-10 border border-gray-200">
          <h5 className="uppercase text-3xl font-extrabold mb-3">
            Other <br /> Editions
          </h5>
          {Languages.map((lang) => (
            <ul
              key={lang}
              className="border-t border-gray-200 py-3 hover:font-bold"
            >
              <Link href={lang.code}>{lang.name}</Link>
            </ul>
          ))}
        </div>
      )}
    </>
  );
}
