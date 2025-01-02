/* eslint-disable no-console */
import {
  Grid, Typography, Box, TextField, Button,
} from "@mui/material";

type Props = {
  onAddComment: () => void;
  onSetNewCommentText: (value: string) => void;
};

export default function ProductNewComment({ onAddComment, onSetNewCommentText }:Props) {
  return (
    <Grid container={true} maxWidth="890px" flexDirection="column">
      <Grid item={true} xs={6}>

        <Typography variant="body1" fontSize="0.875rem" textAlign="left" lineHeight="1.25rem">Leave a comment</Typography>
        <Box borderRadius="5px">
          <TextField
            multiline={true}
            fullWidth={true}
            minRows={5}
            placeholder="Comment"
            onChange={(e) => onSetNewCommentText(e.target.value)}
            InputProps={{
              style: {
                padding: "8px",
              },
            }}
            sx={{
              "& .MuiInputBase-input::placeholder": {
                color: "#000",
                opacity: 1,
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused": {
                  outline: "none", // Focus border color
                },
              },
            }}
          >
          </TextField>
        </Box>
      </Grid>
      <Grid item={true} xs={6} mt={4}>
        <Button
        // eslint-disable-next-line no-console
          onClick={onAddComment}
          variant="contained"
          color="violet"
          fullWidth={true}
          sx={{ borderRadius: "5px" }}
        >
          <Typography variant="h6" fontSize="1.125rem" fontWeight="600" color="#fff" textTransform="none">
            Submit
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
}
