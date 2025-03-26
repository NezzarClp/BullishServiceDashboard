import React, { useState } from "react";
import {
    TextField,
    Button,
    Box,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    FormHelperText,
} from "@mui/material";
import { Service, ServiceStatus } from "../types/ServicesTypes";
import axios from "axios";

interface AddServiceFormProps {
    onServiceAdded: () => void;
}

const AddServiceForm: React.FC<AddServiceFormProps> = ({
    onServiceAdded,
}) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [status, setStatus] = useState<ServiceStatus>(
        ServiceStatus.UP
    );

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const service: Service = {
                id,
                name,
                url,
                status,
            };
            await axios.post(
                "http://localhost:4001/api/services",
                service
            );

            onServiceAdded(); // Notify parent component with the new service
            setName("");
            setUrl("");
        } catch (error) {
            console.error("Error adding service:", error);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ marginBottom: 3 }}
        >
            <TextField
                label="Service ID"
                fullWidth
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
                margin="normal"
            />
            <TextField
                label="Service Name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                margin="normal"
            />
            <TextField
                label="Service URL"
                fullWidth
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                margin="normal"
            />

            <FormControl fullWidth required margin="normal">
                <InputLabel>Status</InputLabel>
                <Select
                    value={status}
                    onChange={(e) =>
                        setStatus(e.target.value as ServiceStatus)
                    }
                    label="Status"
                >
                    <MenuItem value="UP">UP</MenuItem>
                    <MenuItem value="DOWN">DOWN</MenuItem>
                </Select>
                <FormHelperText>
                    Select the status of the service
                </FormHelperText>
            </FormControl>
            <Box marginY={2}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    {"Add Service"}
                </Button>
            </Box>
        </Box>
    );
};

export default AddServiceForm;
