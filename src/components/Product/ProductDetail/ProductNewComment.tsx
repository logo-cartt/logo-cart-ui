/* eslint-disable no-console */
import {
  Grid, Typography, Box, TextField, Button,
  Rating,
  Stack,
} from "@mui/material";

type Props = {
  onAddComment: () => void;
  newCommentText: string;
  onSetNewCommentText: (value: string) => void;
  ratingValue: number | null
  onSetRatingValue:(value: number | null) => void;
};

export default function ProductNewComment({
  onAddComment, newCommentText, onSetNewCommentText, ratingValue, onSetRatingValue,
}:Props) {
  return (
    <Grid container={true} maxWidth="890px" flexDirection="column">
      <Grid item={true} xs={6} textAlign="left">
        <Typography variant="body1" fontSize="0.875rem" lineHeight="1.25rem">Leave a comment</Typography>
        <Stack mt={2} mb={2} flexDirection="row" justifyContent="space-between">
          <Typography variant="body1" fontSize="0.875rem">Select your rating</Typography>
          <Rating
            name="simple-controlled"
            value={ratingValue}
            onChange={(_event, newValue) => {
              onSetRatingValue(newValue);
            }}
          />
        </Stack>
        <Box borderRadius="5px">
          <TextField
            multiline={true}
            fullWidth={true}
            minRows={5}
            placeholder="Comment"
            onChange={(e) => onSetNewCommentText(e.target.value)}
            value={newCommentText}
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
