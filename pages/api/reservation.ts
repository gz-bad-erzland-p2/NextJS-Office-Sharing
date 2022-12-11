import type {NextApiRequest, NextApiResponse} from 'next'
import {hash} from 'bcrypt';
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    switch (req.method) {
        case 'POST':
            try {
                // const prisma = new PrismaClient();
                // const reservation = await prisma.kunde.create({
                //     data: {
                //         name: 'Test',
                //
                //         password: req.body.password,
                //     },
                // });
                hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        res.status(500).json({error: 'Failed to hash password', details: err})
                    } else {
                        res.status(200).json({password: hash})
                    }
                });
                res.status(200).json({message: 'POST request received'})
            } catch (err) {
                res.status(500).json({error: 'Failed to send data', details: err})
            }
            break;
        default:
            // eslint-disable-next-line no-case-declarations
            res.status(500).json({error: 'Failed to send data'})
    }
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1mb',
        }
    }
}