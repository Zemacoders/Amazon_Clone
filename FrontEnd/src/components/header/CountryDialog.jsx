import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const CountryDialog = ({ setSelectedCountry, handleClose, open }) => {
    const [countries, setCountries] = useState([]);
    const [selectedCountryLocal, setSelectedCountryLocal] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault()
        if (selectedCountryLocal) {
            setSelectedCountry(selectedCountryLocal);
            handleClose();
        }
    };

    const handleCountryChange = (e) => {
        setSelectedCountryLocal(e.target.value);
    };

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                const countryList = data.map(country => ({
                    value: country.cca2,
                    label: country.name.common,
                }));
                setCountries(countryList);
            });
    }, []);

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        component: 'form',
                        onSubmit: handleSubmit,
                    },
                }}
            >
                <DialogTitle sx={{ paddingY: '20px', paddingX: '10px', backgroundColor: '#aaa', fontWeight: 'bold' }}>Choose your location</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ padding: '10px', marginTop: '10px' }}>
                        Delivery options and delivery speeds may vary for different locations
                    </DialogContentText>
                    <select
                        className="w-[90%] mx-auto p-3 border border-gray-300 rounded mt-12"
                        value={selectedCountryLocal}
                        onChange={handleCountryChange}
                        required
                    >
                        <option value="">Select a country</option>
                        {countries.map((country) => (
                            <option key={country.value} value={country.label}>
                                {country.label}
                            </option>
                        ))}
                    </select>
                </DialogContent>
                <DialogActions>
                    <Button className='text-primary' type="submit">Done</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

export default CountryDialog;
