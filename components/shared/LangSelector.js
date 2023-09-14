import { Languages } from "../../data";
import { useRouter } from 'next/router';

export default function LangSelector() {
  const router = useRouter();

  // Extract the current locale from the URL (e.g., /en, /es, /fr)
  const currentLocale = router.query.lang;
  console.log(currentLocale);

  const handleLangChange = (event) => {
    const selectedLocale = event.target.value;

    const newUrl = `/${selectedLocale}`;

    router.push(newUrl);
  };

  return (
    <>
      <div className="lang-selector">
        <select
          className="p-3 font-bold text-black"
          value={currentLocale}
          onChange={handleLangChange}
        >
          {Languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.code.toLocaleUpperCase()}
            </option>
          ))}

          <option>FR</option>
        </select>
      </div>
    </>
  );
}
