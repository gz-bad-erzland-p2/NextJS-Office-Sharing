import type {NextApiRequest, NextApiResponse} from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case 'POST':
            try {
                res.status(200).json({message: 'POST request received'})
            } catch (err) {
                res.status(500).end({error: 'Failed to send data', details: err})
            }
            break;
        default:
            res.status(405).end({error: 'Method not allowed'})
    }
}
