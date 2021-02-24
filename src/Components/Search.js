import TextField from '@material-ui/core/TextField';


const Search = ({handleFilter}) => {
    return (
        <TextField
          id="filled-full-width"
          label="Search by First or Last Name"
          style={{ margin: '2rem auto', backgroundColor: 'white' }}
          placeholder="Search for an Employee"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          onChange={handleFilter}
        />
    )
}

export default Search;