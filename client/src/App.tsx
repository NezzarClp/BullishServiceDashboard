import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import { Service } from './types/ServicesTypes';
import ServiceList from './components/ServiceList';
import AddServiceForm from './components/AddServiceForm';

const POLL_PERIOD = 5000;

const App: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  // Fetch the list of services from the API
  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:4001/api/services');
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  // Fetch services on component mount and set up polling
  useEffect(() => {
    fetchServices();
    const intervalId = setInterval(fetchServices, POLL_PERIOD);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  // Add a new service to the list
  const handleServiceAdded = () => {
    fetchServices();
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Service Monitoring Dashboard
      </Typography>
      
      <ServiceList services={services} />

      <Typography variant="h6" gutterBottom sx={{ marginTop: 4 }}>
          Add New Service
      </Typography>
      <AddServiceForm onServiceAdded={handleServiceAdded} />
    </Container>
  );
};

export default App;