import type {NextApiRequest, NextApiResponse} from 'next'
import {hash} from 'bcrypt';
import {OperatingSystemEnum} from "../../core/utils/enums/OperatingSystemEnum";
import prisma from "../../core/db/prisma";


// TODO: Add validation of body
type NextApiRequestWithReservation = NextApiRequest & {
    name: string,
    surname: string,
    email: string,
    password: string,

    address: {
        street: string,
        streetNumber: string,
        zipCode: number,
        city: string,
    },
    rental: {
        startDate: Date,
        endDate: Date,
        additionalHardware: boolean,
        requirements: string,
        software: string,
        operatingSystems: OperatingSystemEnum,
    }
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    switch (req.method) {
        case 'POST':
            console.log("POST REQUEST!")
            try {
                const hashedPassword: string = await new Promise((resolve, reject) => {
                    hash(req.body.password, 10, (err, hash) => {
                        if (err) reject(err);
                        resolve(hash);
                    });
                });

                const reservation = await prisma.kunde.create({
                    data: {
                        name: req.body.name,
                        vorname: req.body.surname,
                        telefonnummer: '0123456789',
                        email: req.body.email,
                        username: 'testUserName',
                        password: hashedPassword,
                        adresse: {
                            create: {
                                strasse: req.body.street,
                                hausnummer: +req.body.streetNumber,
                                plz: +req.body.zipCode,
                                ort: req.body.city,
                                zusatz: 'testZusatz',
                            }
                        },
                        Mietung: {
                            create: {
                                startdatum: new Date(req.body.startDate),
                                enddatum: new Date(req.body.endDate),
                                mitgebrauchterHardware: false,
                                anforderungen: 'Keine',
                                software: 'Keine',
                                betriebssysteme: req.body.operatingSystem,
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