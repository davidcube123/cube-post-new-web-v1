import React,{createContext,useContext} from 'react';
export const RouteContext=createContext('/');
export const usePathname=()=>useContext(RouteContext);
export function Link({href,children,...props}:React.AnchorHTMLAttributes<HTMLAnchorElement> & {href:string}){return <a {...props} href={href.startsWith('/')?'#'+href:href}>{children}</a>}
export default Link;
