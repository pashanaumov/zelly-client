import React, { useEffect } from 'react';
import db from '../firebase.config';
import { ElectricityCountry } from '../types/FetchedData/Electricity/ElectricityCountry';

const firestoreCountriesData: ElectricityCountry[] = require('../data/firestoreCountriesData.json');
const dbCollectionPath = 'electricity_countries';

export const FirestoreComp = () => {
  async function fetchCountries() {
    const response = db.collection(dbCollectionPath);
    const data = await response.get();
    data.docs.forEach((snapshot) => {
      console.log(snapshot.data());
    });
  }

  async function jsonFetcher() {
    firestoreCountriesData.forEach((dataNode) => {
      db.collection(dbCollectionPath)
        .doc(dataNode.country)
        .set({ intensity: dataNode.intensity })
        .then((res) => {
          return res;
        });
    });
  }

  useEffect(() => {
    fetchCountries().then();
  }, []);

  return <></>;
};
