import { Box, Typography } from "@mui/material";
import { Comment } from "../../../types/types";

export function ProductComment({ commentProp }: { commentProp: Comment }) {
  return (
    <Box margin="32px 0">
      <Typography variant="body1" fontWeight="600" textAlign="left" mb="8px">{commentProp.client}</Typography>
      <Typography variant="body1" fontSize="0.875rem" textAlign="left" color="#777">
        Rated:
        {commentProp.rating}
        {" "}
        out of 5
      </Typography>
      <Typography variant="body1" component="p" textAlign="left" margin="16px 0 32px" lineHeight="1.21rem">
        {commentProp.commentText}
      </Typography>
    </Box>
  );
}
