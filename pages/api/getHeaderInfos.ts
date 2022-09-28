import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { HeaderInfos } from "../../typepings";

const query = groq`
    *[_type == "header"]
`;

type Data = {
    headerInfos: HeaderInfos
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const headerInfos: HeaderInfos = await sanityClient.fetch(`*[_type == "header"][0]`);
    
    res.status(200).json({ headerInfos });
}