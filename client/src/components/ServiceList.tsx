import React from "react";
import { Service } from "../types/ServicesTypes";
import { List } from "@mui/material";
import ServiceListItem from "./ServiceListItem";

interface ServiceListProps {
    services: Service[];
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
    return (
        <List>
            {services.map((service) => (
                <ServiceListItem service={service} />
            ))}
        </List>
    );
};

export default ServiceList;
