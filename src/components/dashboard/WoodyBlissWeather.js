import ReactWeather, { useOpenWeather } from 'react-open-weather';
import React from 'react';

const customStyles = {
  gradientStart: '#41794E',
  gradientMid: '#41494E',
  gradientEnd: '#41394E',
  locationFontColor: '#FFF',
  todayTempFontColor: '#FFF',
  todayDateFontColor: '#B5DEF4',
  todayRangeFontColor: '#B5DEF4',
  todayDescFontColor: '#B5DEF4',
  todayInfoFontColor: '#B5DEF4',
  todayIconColor: '#FFF',
  forecastBackgroundColor: '#FFF',
  forecastSeparatorColor: '#DDD',
  forecastDateColor: '#777',
  forecastDescColor: '#777',
  forecastRangeColor: '#777',
  forecastIconColor: '#4BC4F7',
};

const WoodyBlissWeather = () => {
  console.log('are we even in here??????');
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '26cbec222b7d39a3fea83bbcea0e18a7',
    lat: '39.21314720821112',
    lon: '-120.09008364444685',
    lang: 'en',
    unit: 'imperial', // values are (metric, standard, imperial)
  });
  console.log('is loading', isLoading);
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Woody Bliss"
      unitsLabels={{ temperature: 'F', windSpeed: 'Km/h' }}
      showForecast
      theme={customStyles}
    />
  );
};

export default WoodyBlissWeather;
