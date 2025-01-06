/* eslint-disable no-console */
import { useState } from "react";
import {
  Box, Typography,
} from "@mui/material";
import { ProductDetailCard } from "../../../../components/Product/ProductDetail/ProductDetailCard";
import { products } from "../../../../data-mock/data";
import { ProductComment } from "../../../../components/Product/ProductDetail/ProductComment";
import ProductNewComment from "../../../../components/Product/ProductDetail/ProductNewComment";
import { userRepository } from "../../../../data-mock/userMock";

export function ProductDetail() {
  const { description, comments: initialComments } = products[0];
  const [comments, setComments] = useState(initialComments || []);
  const [newCommentText, setNewCommentText] = useState("");
  const [ratingValue, setRatingValue] = useState<number | null>(0);

  const handleAddComment = async () => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      return;
    }
    const userEmail = JSON.parse(userData as string).email;

    const userExists = await userRepository.getUserByEmail(userEmail);
    if (!userExists) {
      return;
    }

    const userName = userExists?.name;
    if (!newCommentText.trim() || ratingValue === 0) {
      return;
    }

    const newComment = {
      client: userName,
      rating: ratingValue,
      commentText: newCommentText,
    };

    console.log(comments);
    setComments([...comments, newComment]);
    setNewCommentText("");
  };

  // useEffect(() => {
  //   setNewComments([...initialComments as []]);
  // }, [initialComments, trigger]);
  return (
    <Box marginTop="32px">
      <Typography
        variant="h5"
        fontSize="1.5rem"
        fontWeight="600"
        align="left"
      >
        T-Shirt. Blue.
      </Typography>
      <ProductDetailCard />
      <Box margin="64px 0">

        <Typography
          variant="h5"
          fontSize="1.8125rem"
          fontWeight="600"
          align="left"
        >
          Description
        </Typography>
        <Typography variant="body1" textAlign="left" margin="32px 0" lineHeight="1.21rem" whiteSpace="pre-wrap">
          {description}
        </Typography>
      </Box>
      <Box margin="64px 0">

        <Typography
          variant="h5"
          fontSize="1.8125rem"
          fontWeight="600"
          align="left"
        >
          Comments
        </Typography>
        <Box mb={8}>
          {comments ? comments.map((comment) => <ProductComment commentProp={comment} />) : ""}
        </Box>
        <ProductNewComment
          onAddComment={handleAddComment}
          newCommentText={newCommentText}
          onSetNewCommentText={setNewCommentText}
          ratingValue={ratingValue}
          onSetRatingValue={setRatingValue}
        />
      </Box>
    </Box>
  );
}
