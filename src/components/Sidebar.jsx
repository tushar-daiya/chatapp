import React from "react";
import Navbar from "./Navbar";
import SearchPanel from "./SearchPanel";
import { InstantSearch } from "react-instantsearch-hooks";
import { algoliaClient } from "../algolia";
const Sidebar = () => {
  const indexName="ChatApp"
  return (
    <div className="w-1/3 h-full bg-[#EDF2F4] mr-4">
        <Navbar />
      <InstantSearch searchClient={algoliaClient} indexName={indexName}>
        <SearchPanel />
      </InstantSearch>
    </div>
  );
};

export default Sidebar;
