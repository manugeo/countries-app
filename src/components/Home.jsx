import React, { useEffect, useState } from 'react';

const colors = {
  primary: '#3d3d3d'
};

const COUNTRIES = [
  {
    name: "Afghanistan",
    region: "Asia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
    independent: false
  },
  {
    name: "Åland Islands",
    region: "Europe",
    flag: "https://flagcdn.com/ax.svg",
    independent: false
  },
  {
    name: "Albania",
    region: "Europe",
    flag: "https://flagcdn.com/al.svg",
    independent: false
  }
];

const CountryTile = ({ country, index }) => {
  const { name, region, flag } = country;
  const countryStyles = {
    container: {
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: colors.primary,
      padding: 8,
      display: 'flex',
    },
    flagImage: {},
    nameWrapper: {
      marginLeft: 8
    },
    nameText: {
      margin: 0
    },
    regionText: {
      margin: 0
    }
  };
  return (
    <div style={{ ...countryStyles.container, marginTop: ((index === 0) ? 50 : 10) }}>
      <img src={flag} alt={`${name} flag`} width="50" height="50" />
      <div style={countryStyles.nameWrapper}>
        <h2 style={countryStyles.nameText}>{name}</h2>
        <p style={countryStyles.regionText}>{region}</p>
      </div>
    </div>
  );
};

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all?fields=name,region,flag')
      .then(response => response.json())
      .then(data => setCountries(data));
  }, []);

  const styles = {
    container: {
      height: '100%',
      padding: 16,
      display: 'flex',
      flexDirection: 'column'
    },
    countriesText: {
      margin: 0,
      fontSize: 20,
      color: '#3d3d3d'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.countriesText}>Countries</h2>
      {countries.map((country, i) => <CountryTile key={i} country={country} index={i} />)}
    </div>
  );
};

export default Home;