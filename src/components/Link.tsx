import React, {ReactElement, ReactNode} from 'react'
import {LinkProps} from 'next/link';
import { Link, changeLanguage, getCurrentLanguage } from "@/i18n";


interface Props {
    children: ReactNode,
    locale?: string,
    href: LinkProps["href"],
    as?: LinkProps["as"]
}


const LangLink = ({ children, locale = getCurrentLanguage(), href, as} : Props): ReactElement => {
  return (
    <Link href={href} as={as}>
      <a onClick={(e) => { e.preventDefault(); changeLanguage(locale); }}>
        {children}
      </a>
    </Link>
  );
};
export default LangLink;
