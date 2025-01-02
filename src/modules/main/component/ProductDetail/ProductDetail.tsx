/* eslint-disable no-console */
import { useEffect, useState } from "react";
import {
  Box, Typography,
} from "@mui/material";
import { ProductDetailCard } from "../../../../components/Product/ProductDetail/ProductDetailCard";
import { products } from "../../../../data-mock/data";
import { ProductComment } from "../../../../components/Product/ProductDetail/ProductComment";
import ProductNewComment from "../../../../components/Product/ProductDetail/ProductNewComment";
import { userRepository } from "../../../../data-mock/userMock";

export function ProductDetail() {
  const { description, comments } = products[0];
  const [newComments, setNewComments] = useState(comments);
  const [trigger, setTrigger] = useState(false);
  const [newCommentText, setNewCommentText] = useState("");

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
    if (!newCommentText.trim()) {
      return;
    }

    const newComment = {
      client: userName,
      rating: 5,
      commentText: newCommentText,
    };

    comments?.push(newComment);

    setNewCommentText("");
    setTrigger((prev) => !prev);
  };

  useEffect(() => {
    setNewComments([...comments as []]);
  }, [comments, trigger]);
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
        <Box>
          {newComments ? newComments.map((newComment) => <ProductComment commentProp={newComment} />) : ""}
        </Box>
        <ProductNewComment
          onAddComment={handleAddComment}
          onSetNewCommentText={setNewCommentText}
        />
      </Box>
    </Box>
  );
}
