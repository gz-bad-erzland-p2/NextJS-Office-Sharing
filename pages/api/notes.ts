import {NextApiRequest, NextApiResponse} from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'POST':
            try {
                const result = await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(req.body),
                });
                result.json().then((data) => {
                    res.status(200).json(data);
                });
            } catch (err) {
                res.status(500).end({error: 'Failed to send data', details: err})
            }
            break;
        default:
            res.status(405).end({error: 'Method not allowed'})
    }

}
