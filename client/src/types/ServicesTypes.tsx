// Enum for Service Status
export enum ServiceStatus {
    UP = "UP",
    DOWN = "DOWN",
}

// Interface for Service
export type Service = {
    id: string;
    name: string;
    url: string;
    status: ServiceStatus;
}
