import React from "react";
import { Service } from "../types/ServicesTypes";

import { ListItem, Typography, Box } from "@mui/material";

interface ServiceListItemProps {
    service: Service;
}

const ServiceListItem: React.FC<ServiceListItemProps> = ({
    service,
}) => {
    const getStatusColor = (status: "UP" | "DOWN"): string => {
        return status === "UP" ? "green" : "red";
    };

    return (
        <ListItem
            key={service.id}
            style={{
                display: "flex",
                flexDirection: "column", // Arrange items vertically
                alignItems: "flex-start", // Align items to the left
                border: "1px solid black", // Black border around the ListItem
                marginBottom: "8px", // Add spacing between items
                borderRadius: "4px", // Optional: for rounded corners
                padding: "10px", // Optional: for inner padding
                backgroundColor: "#f9f9f9", // Optional: Add a subtle background color
            }}
        >
            <Box
                display="flex"
                alignItems="center"
                sx={{ marginBottom: "4px" }}
            >
                <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginRight: "8px" }}
                >
                    ID: {service.id}
                </Typography>
                <Box
                    style={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        backgroundColor: getStatusColor(
                            service.status
                        ),
                    }}
                />
            </Box>
            <Typography
                variant="body1"
                sx={{ fontWeight: "bold", marginBottom: "4px" }}
            >
                Name: {service.name}
            </Typography>
            <Typography
                variant="body2"
                color="textSecondary"
                sx={{ marginBottom: "8px" }}
            >
                URL:
                <a
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: "#1976d2", // Material-UI link color (blue)
                        textDecoration: "none", // Remove underline
                    }}
                >
                    {service.url}
                </a>
            </Typography>
        </ListItem>
    );
};

export default ServiceListItem;
