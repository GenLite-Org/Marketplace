import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
    Button,
    Select,
    Box,
    Grid,
    MenuItem,
    FormControl,
    InputLabel,
    SelectChangeEvent,

} from "@mui/material";

interface Item {
    id: number;
    name: string;
    category: string;
    price: number;
    type: "buying" | "selling";
}

function App() {
    const [data, setData] = useState<Item[]>([]);
    const [searchText, setSearchText] = useState<string>("");
    const [filterText, setFilterText] = useState<string>("All");
    const [minPrice, setMinPrice] = useState<string>("0");
    const [maxPrice, setMaxPrice] = useState<string>("99999999");
    const [showBuying] = useState<boolean>(true);
    const [showSelling] = useState<boolean>(true);

    useEffect(() => {
        axios.get<Item[]>("/api/data").then((response) => {
            setData(response.data);
        });
    }, []);

    const handleSearchTextChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSearchText(event.target.value);
    };

    const handleFilterTextChange = (event: SelectChangeEvent<string>) => {
        setFilterText(event.target.value);
    };


    const handleMinPriceChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setMinPrice(event.target.value);
    };

    const handleMaxPriceChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setMaxPrice(event.target.value);
    };

    const filteredData = data.filter((item) => {
        return (
            item.name.toLowerCase().includes(searchText.toLowerCase()) &&
            item.category.toLowerCase().includes(filterText.toLowerCase()) &&
            (!minPrice || item.price >= Number(minPrice)) &&
            (!maxPrice || item.price <= Number(maxPrice)) &&
            ((showBuying && item.type === "buying") ||
                (showSelling && item.type === "selling"))
        );
    });

    const handleAddListing = () => {
        // TODO: implement add listing functionality
    };

    return (
        <Grid container>
            <Grid item container justifyContent={"center"} xs={2}>
                <Grid>
                    <Grid item>
                        <h1>Filters</h1>
                    </Grid>
                    <Grid item>
                        <FormControl fullWidth>
                            <InputLabel>Type</InputLabel>
                            <Select id="demo-simple-select" value={filterText} label="Type" onChange={handleFilterTextChange}>
                                <MenuItem value={"Selling"}>Selling</MenuItem>
                                <MenuItem value={"Buying"}>Buying</MenuItem>
                                <MenuItem value={"All"}>All</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>
                    <Grid item paddingY={"16px"}>
                        <TextField
                            label="Min Price"
                            variant="outlined"
                            type="number"
                            value={minPrice}
                            
                            onChange={handleMinPriceChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Max Price"
                            variant="outlined"
                            type="number"
                            value={maxPrice}
                            onChange={handleMaxPriceChange}
                        />
                    </Grid>

                </Grid>
            </Grid>
            <Grid item xs={9}>
                <Grid item>
                    <h1>Listings</h1>
                </Grid>
                <Grid item>
                    <Box marginBottom={"16px"}>
                        <Button variant="contained" onClick={handleAddListing}>Add Listing</Button>
                    </Box>

                    <TextField
                        label="Search Listings"
                        variant="outlined"
                        value={searchText}
                        onChange={handleSearchTextChange}
                        fullWidth
                    />
                </Grid>
                <Grid item marginTop={"16px"}>
                    <Box>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Item</TableCell>
                                        <TableCell>Quanity</TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell>Type</TableCell>
                                        <TableCell>Listed On</TableCell>
                                        <TableCell>Listed By</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default App;