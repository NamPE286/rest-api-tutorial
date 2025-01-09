import type { Request, Response, NextFunction } from "express";

export default async function (req: Request, res: Response, next: NextFunction) {
    if (!req.headers.authorization?.startsWith("Bearer ")) {
        res.status(401).send();
        return;
    }

    if (req.headers.authorization.split(" ")[1] == "imadmin") {
        res.locals.user = {
            name: "tachi",
            uid: "uiduid",
        };
    } else {
        res.locals.user = {
            name: "NamPE",
            uid: "uiduid1",
        };
    }

    next();
}
