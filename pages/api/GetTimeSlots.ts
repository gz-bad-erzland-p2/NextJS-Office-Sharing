import type { NextApiRequest, NextApiResponse } from 'next'


export default function GetTimeSlots(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json(
        {
            "timeslots":
            [
                {"start":"13:30","end":"15:30"},
                {"start":"13:45","end":"19:30"},
                {"start":"14:00","end":"15:30"},
                {"start":"14:15","end":"18:30"}
            ]
        })
}