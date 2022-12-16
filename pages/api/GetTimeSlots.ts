import type { NextApiRequest, NextApiResponse } from 'next'


export default function GetTimeSlots(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json(
        {
            "timeslots":
            [
                {"start":"2000-01-01T13:30:00.000Z","end":"2000-01-01T15:30:00.000Z"},
                {"start":"2000-01-01T13:45:00.000Z","end":"2000-01-01T19:30:00.000Z"},
                {"start":"2000-01-01T14:00:00.000Z","end":"2000-01-01T15:30:00.000Z"},
                {"start":"2000-01-01T14:15:00.000Z","end":"2000-01-01T18:30:00.000Z"},
            ]
        })
}