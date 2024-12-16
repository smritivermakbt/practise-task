
import Box from '@mui/material/Box';

const Forms = () => {
  return (
    <div>

      Registration Form

      <Box component="section" sx={{ border: '1px dashed grey',}}>
      Registration Form
        <form>

          <label>First Name:</label>
          <input
            type="text"

            required
          />
          <label>Last Name:</label>
          <input
            type="text"

            required
          />
          <label>Enter Number:</label>
          <input
            type="number"
            required
          />
        </form>
    
    </Box >


    </div >
  )
}

export default Forms