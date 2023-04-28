/*
	Potrebno je napraviti React hook za filtriranje, sortiranje i pretrazivanje podataka.
	Hook treba da prima array objekata odredjene strukture. U ovom slucaju koristimo array user-a iz users.json fajla.
	Hook treba da vraca formatirane podatke kao i funkcije za sortiranje, pretrazivanje i filtriranje.
  Omoguciti ulancano pozivanje implementiranih funkcija.
	
	Funkcija za pretrazivanje prima string i pretrazuje sve propertije na user objektu.
	Funkcija za filtriranje prima funkciju koju poziva za svaki entry u array-u.
	Funkcija za sortiranje moze da primi string (property name) po kojem treba da odradi standardni sort
	ili da primi funkciju za sortiranje (slicno kao i filter funkcija).

	Za zadatak kreirati poseban projekat gdje ce sadrzaj App.tsx fajla biti ovaj fajl.
	
	Koristiti React i TypeScript.

	Puno srece ;-)
*/

import React, { useEffect } from "react";
import users from "./users.json";
import { WholeUser, useFormattedData } from "./components/UseFormatedHook";
import './globals.scss';
import style from './App.module.scss'

export const App = () => {
  const usersString = JSON.stringify(users);
  const usersParsed = JSON.parse(usersString);
  const { formatted, sortBy, filter, search } = useFormattedData(usersParsed);

  /**
   * Unutar ovog useEffect poziva bice proizvoljnim redom pozivane implementirane funkcije za
   * search, filter i sort da bi testirali tvoju implementaciju.
   */
  useEffect(() => {
    sortBy("gender");
    filter(({ gender }: WholeUser) => gender === "Male");
    //search("Rickie");
  }, []);


  return (
    <div className={style.wrapper}>
      {formatted.length > 0
        ? formatted.map(({ id, firstName, lastName, birthdate, gender }: WholeUser, idx) => (
            <div className={style.item} key={id}>
              {idx+1}
              <div>
                 {firstName} {lastName} {gender}
              </div>
              <div>{birthdate}</div>
            </div>
          ))
        : "No result for this search"}
    </div>
  );
};
