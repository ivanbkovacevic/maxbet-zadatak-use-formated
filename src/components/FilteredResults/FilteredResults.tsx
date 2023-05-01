import React from "react";
import style from "./FilteredResults.module.scss";
import { WholeUser } from "../UseFormatedHook";

interface FilteredResultsProps {
  list: WholeUser[];
}

const FilteredResults: React.FC<FilteredResultsProps> = ({ list }) => {
  return (
    <div className={style.wrapper}>
      {list.length > 0
        ? list.map(
            (
              { id, firstName, lastName, birthdate, gender }: WholeUser,
              idx
            ) => (
              <div className={style.item} key={id}>
                {idx + 1}
                <div>
                  {firstName} {lastName} {gender}
                </div>
                <div>{birthdate}</div>
              </div>
            )
          )
        : "No result for this search"}
    </div>
  );
};

export default FilteredResults;
