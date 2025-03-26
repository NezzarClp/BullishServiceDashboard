import type { Service } from "../types/ServicesType";

export interface ServicesStore {
    add(service: Service): void;
    getAll(): Service[];
}

class InMemoryServiceStore implements ServicesStore {
    servicesLookup: Map<string, Service>;
    constructor() {
        this.servicesLookup = new Map();
    }

    add(service: Service): void {
        const id = service.id;
        if (!this.servicesLookup.has(id)) {
            this.servicesLookup.set(id, service);
        }
    }

    getAll(): Service[] {
        return Array.from(this.servicesLookup.values());
    }
}

export default function createInMemoryServiceStore(): InMemoryServiceStore {
    return new InMemoryServiceStore();
}
