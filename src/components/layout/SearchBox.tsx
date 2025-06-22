import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { useQueryProduct } from "../../queryContext";
import { useEffect, useState } from "react";

export default function SearchBox() {
  const [searchText, setSearchText] = useState("");
  const {queryData, updateQuery } = useQueryProduct();

  const handleSearch = () => {
    updateQuery({ search: searchText });
  };

  useEffect(()=>{
    const { search } = queryData
    setSearchText(search)
  },[queryData] )

  return (
    <Stack
      direction="row"
      p="3px"
      pl={2}
      border={1}
      borderRadius={2}
      bgcolor="#efefef"
      borderColor="primary.light">
      <InputBase
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}></InputBase>
      <IconButton onClick={handleSearch}>
        <SearchOutlinedIcon />
      </IconButton>
    </Stack>
  );
}
