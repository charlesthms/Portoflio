import { HeaderInfos } from '../typepings';


export const fetchHeader = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getHeaderInfos`);    
    const data = await res.json();
    const headerInfos: HeaderInfos = data.headerInfos;

    return headerInfos;
};