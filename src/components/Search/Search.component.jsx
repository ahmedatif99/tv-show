import React, { useState, useContext } from "react";

import Alert from "../Alert/alert.component";

import { SearchBar, Input, Button } from "./search.styles";

import ShowsContext from "../../context/Shows/showsContext";
import AlertsContext from "../../context/Alert/alertContext";

function Search() {
  const [search, setSearch] = useState("");

  const { searchShows } = useContext(ShowsContext);
  const { alert, setAlert } = useContext(AlertsContext);

  const onSearch = (e) => {
    e.preventDefault();
    if (search === "") {
      setAlert("Please enter something", "danger");
    } else if (searchShows(search).length === 0) {
      setAlert("There is no show with name " + search, "warning");
    } else {
      setAlert("This is the shows you search about", "info");
      searchShows(search);
    }
  };
  return (
    <SearchBar>
      {alert ? <Alert message={alert.message} type={alert.type} /> : null}
      <form>
        <Input
          type="text"
          placeholder="Search For TV Show"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button type="button" onClick={onSearch}>
          SEARCH
        </Button>
      </form>
    </SearchBar>
  );
}

export default Search;
