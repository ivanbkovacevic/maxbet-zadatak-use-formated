import React, { useEffect } from "react";
import users from "./users.json";
import { WholeUser, useFormattedData } from "./components/UseFormatedHook";
import "./globals.scss";
import style from "./App.module.scss";
import FilteredResults from "./components/FilteredResults/FilteredResults";

export const App = () => {
  const usersString = JSON.stringify(users);
  const usersParsed = JSON.parse(usersString);
  const { formatted, sortBy, filter, search } = useFormattedData(usersParsed);

  useEffect(() => {
    sortBy("gender");
    filter(({ zip }: WholeUser) => zip > 408);
    search("Rickie");
  }, []);

  return (
    <div className={style.wrapper}>
      <FilteredResults list={formatted} />
    </div>
  );
};
