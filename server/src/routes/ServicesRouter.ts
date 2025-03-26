import { Router, Request, Response } from "express";
import type { ServicesStore } from "../stores/ServicesStore";
import type { Service, ServiceStatus } from "../types/ServicesType";

const HTTP_SUCCESS_CODE = 200;

export default function createServicesRouter(
    store: ServicesStore
): Router {
    const router = Router();
    router.get("/", (req: Request, res: Response) => {
        res.json(store.getAll());
    });
    router.post("/", (req: Request, res: Response) => {
        const {
            id,
            name,
            url,
            status,
        }: {
            id: string;
            name: string;
            url: string;
            status: ServiceStatus;
        } = req.body;
        const service: Service = {
            id,
            name,
            url,
            status,
        };

        store.add(service);
        res.sendStatus(HTTP_SUCCESS_CODE);
    });

    return router;
}
