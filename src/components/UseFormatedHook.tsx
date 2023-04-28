import { useState } from "react";

export interface WholeUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  zip: number;
  birthdate: string;
  city: string;
  [key: string]: any;
}

export const useFormattedData = (arr: WholeUser[]) => {
  const [formatted, setFormatted] = useState([...arr]);
  const sortBy = (sortProperty: string) => {
    const sortedResults = formatted.sort((a, b) => {
      const aProperty = a[sortProperty].toUpperCase();
      const bProperty = b[sortProperty].toUpperCase();

      if (aProperty < bProperty) {
        return -1;
      }
      if (aProperty > bProperty) {
        return 1;
      }

      return 0;
    });
    setFormatted([...sortedResults]);
    return sortedResults;
  };
  const filter = (filterLogic: any) => {
    const filteredResults = formatted.filter((user) => filterLogic(user));
    setFormatted([...filteredResults]);
    return filteredResults;
  };

  const search = (searchTerm: string) => {
    const searchResults = formatted.filter((user) => {
      return Object.values(user).some((value) => {
        return typeof value === "string" && value.includes(searchTerm);
      });
    });
    setFormatted([...searchResults]);

    return searchResults;
  };

  return {
    search,
    filter,
    sortBy,
    formatted,
  };
};
