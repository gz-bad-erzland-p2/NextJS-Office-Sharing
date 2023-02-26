import type {NextApiRequest, NextApiResponse} from 'next'
import {hash} from 'bcrypt';
import prisma from "../../core/db/prisma";


// TODO: Add validation of body


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    switch (req.method) {
        case 'POST':
            try {
                const hashedPassword: string = await new Promise((resolve, reject) => {
                    hash(req.body.password, 10, (err, hash) => {
                        if (err) reject(err);
                        resolve(hash);
                    });
                });

                const reservation = await prisma.customer.create({
                    data: {
                        name: req.body.name,
                        surname: req.body.surname,
                        email: req.body.email,
                        gender: req.body.gender,
                        password: hashedPassword,
                        address: {
                            create: {
                                street: req.body.street,
                                streetNumber: +req.body.streetNumber,
                                zipCode: +req.body.zipCode,
                                city: req.body.city,
                            }
                        },
                        booking: {
                            create: {
                                uuid: req.body.uuid,
                                startDate: new Date(req.body.startDate),
                                endDate: new Date(req.body.endDate),
                                hardware: {
                                    create: [
                                        {
                                            typ: req.body.hardware,
                                            operatingSystem: req.body.operatingSystem,
                                        },
                                        {
                                            typ: req.body.hardware2,
                                            operatingSystem: req.body.operatingSystem2,
                                        }
                                    ]
                                },
                                briefing: req.body.briefing,
                                specification: req.body.specification,
                                totalHours: req.body.totalHours,
                                totalCosts: req.body.totalCosts,
                            }
                        }
                    },
                });
                res.status(200).json({
                    message: 'POST request received',
                    body: reservation
                });
            } catch (err) {
                console.log(err);
                res.status(500).json(err);
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