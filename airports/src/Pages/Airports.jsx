import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';

function Airports() {
  const AirportList = useSelector((state) => state.airports.Airports);
  const currentCountry = useSelector((state) => state.countries.currentCountry);
  const navigate = useNavigate();
  const [filtertxt, setfiltertxt] = useState('');

  const filteredAirports = AirportList.filter(
    (item) => item.name.toLowerCase().includes(filtertxt.toLowerCase())
  );

  return (
    <div id="AirportsPage">
      <motion.h3
        initial={{ opacity: 0, y: -100 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        onClick={() => navigate('/choose')}
        id="Goback"
      >
        <i className="fa-solid fa-caret-left"></i> Go Back
      </motion.h3>
      {AirportList.length === 0 ? null : (
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Airports of {currentCountry}
        </motion.h1>
      )}
      <div className="airports_list">
      {AirportList.length === 0 ? null : (
                <input
                type="text"
                placeholder="Search Airport"
                value={filtertxt}
                onChange={(e) => setfiltertxt(e.target.value)}
              />
      
      )}
        {filteredAirports.map((item) => (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * filteredAirports.indexOf(item), duration: 1 }}
            id="Airport_box"
            key={item.icao}
          >
            <motion.div className="location">
              <motion.h2>{item.name}</motion.h2>
              <motion.h3>
                <motion.i className="fa-solid fa-location-dot" style={{ color: '#f20202' }}></motion.i>
                {item.city !== '' ? item.city + ' / ' + item.country : 'not infoed'}
              </motion.h3>
            </motion.div>
            <p>{item.icao}</p>
          </motion.div>
        ))}
        {AirportList.length === 0 ? (
          <motion.h5
            style={{ y: -300 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {currentCountry} there is no Data
          </motion.h5>
        ) : null}
      </div>
    </div>
  );
}

export default Airports;