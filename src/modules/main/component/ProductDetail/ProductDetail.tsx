import {
  Box, Button, Grid, Typography,
} from "@mui/material";
import { useAppSelector } from "../../../../store/hooks";
import { products } from "../../../../data-mock/data";
import { ProductCardItemCounter } from "../../../../components/ProductCard/ProductCardItemCounter";
import { useProductCard } from "../../../../components/ProductCard/useProductCard";
// import { products } from "../../../../data-mock/data";

export function ProductDetail() {
  const { onAddToCart, onRemoveFromCart } = useProductCard();
  const { cartItems } = useAppSelector((state) => state.cart);
  const {
    id,
  } = products[0];
  const selectedItem = cartItems.find((cartItem) => cartItem.product.id === id);
  const numberOfItems = selectedItem?.quantity || 0;

  const handleClick = () => {
    onRemoveFromCart(id);
  };

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
      <Grid container={true} mt="30px" spacing={2}>
        <Grid
          item={true}
          sx={{ backgroundColor: "#D9D9D9", maxWidth: "635px" }}
        >
          <img src="src\assets\img\t-shirt.png" alt="tshirt" height="524" />
        </Grid>
        <Grid item={true} sx={{ minWidth: "400px", minHeight: "100%" }}>
          <Grid container={true} flexDirection="column" paddingLeft="30px" justifyContent="space-between" height="100%">
            <Grid item={true} textAlign="left">
              <Typography
                variant="body1"
                fontSize="1.5rem"
                marginBottom="16px"
              >
                Seller: ClothesShop
              </Typography>
              <Typography
                variant="body1"
                fontSize="1.5rem"
                marginBottom="16px"
              >
                Delivery: 1 day, free.
              </Typography>
              <Typography variant="body1" fontSize="1.5rem">
                Left in stock: 26
              </Typography>
            </Grid>
            <Grid item={true} textAlign="left">
              <Typography fontSize="1.5rem" mb="32px">Total: $67.96</Typography>
              {numberOfItems === 0

                ? (
                  <Button
                    onClick={() => onAddToCart(products[0])}
                    variant="contained"
                    color="violet"
                    fullWidth={true}
                    sx={{ borderRadius: "5px", height: "54px" }}
                  >
                    <Typography variant="body1" color="#fff" textTransform="none">
                      + Add to cart
                    </Typography>
                  </Button>
                )
                : (
                  <ProductCardItemCounter
                    onClickEvent={handleClick}
                    onAddProduct={onAddToCart}
                    numberOfItems={numberOfItems}
                    product={products[0]}
                  />
                )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box margin="64px 0">

        <Typography
          variant="h5"
          fontSize="1.8125rem"
          fontWeight="600"
          align="left"
        >
          Description
        </Typography>
        <Typography variant="body1" component="p" textAlign="left" margin="32px 0" lineHeight="1.21rem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Dignissim enim sit amet venenatis urna cursus. Odio aenean sed
          adipiscing diam donec adipiscing tristique risus nec. Mi sit amet
          mauris commodo quis imperdiet. Sed viverra ipsum nunc aliquet bibendum
          enim. Ullamcorper eget nulla facilisi etiam. Id porta nibh venenatis cras
          sed. Tellus cras adipiscing enim eu turpis egestas pretium. Tincidunt eget
          nullam non nisi est sit amet facilisis magna. Dui faucibus in ornare quam.
          Ullamcorper eget nulla facilisi etiam dignissim. In tellus integer feugiat
          scelerisque varius morbi enim. Luctus accumsan tortor posuere ac ut consequat.
          Elementum eu facilisis sed odio morbi quis commodo. Euismod quis
          viverra nibh cras pulvinar. At risus viverra adipiscing at in
          tellus. Aliquam nulla facilisi cras fermentum odio. Eu ultrices vitae
          auctor eu augue ut lectus arcu bibendum. Vitae congue mauris rhoncus
          aenean vel elit. Mi eget mauris pharetra et ultrices neque ornare
          aenean euismod. Consectetur libero id faucibus nisl tincidunt eget
          nullam non. Enim lobortis scelerisque fermentum dui faucibus in ornare
          quam. Leo in vitae turpis massa. Dictumst quisque sagittis purus
          sit. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus
          semper eget. Quam adipiscing vitae proin sagittis nisl rhoncus mattis.
          Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Id
          velit ut tortor pretium viverra suspendisse potenti nullam ac. Posuere ac
          ut consequat semper viverra nam libero justo laoreet. Rhoncus dolor purus non enim.
        </Typography>
        <Typography variant="body1" component="p" textAlign="left" lineHeight="1.21rem">
          Magna fringilla urna porttitor rhoncus dolor. Bibendum ut tristique
          et egestas. Aliquet eget sit amet tellus cras adipiscing enim. Eget
          mauris pharetra et ultrices. Laoreet sit amet cursus sit amet dictum
          sit amet justo. Sit amet nisl purus in mollis. Rhoncus aenean vel
          elit scelerisque mauris pellentesque pulvinar pellentesque. Euismod
          in pellentesque massa placerat. Vel risus commodo viverra maecenas. Id
          diam vel quam elementum pulvinar etiam non. Sed augue lacus viverra vitae congue.
          Eu volutpat odio facilisis mauris sit amet. Augue eget arcu dictum
          varius duis. Risus commodo viverra maecenas accumsan. Ipsum nunc
          aliquet bibendum enim facilisis. Felis bibendum ut tristique et.
          Dignissim cras tincidunt lobortis feugiat. Pellentesque
          pulvinar pellentesque habitant morbi tristique. Nullam eget felis eget
          nunc lobortis mattis aliquam faucibus purus. Blandit turpis cursus in
          hac habitasse platea dictumst quisque sagittis. In fermentum posuere
          urna nec tincidunt praesent semper feugiat. Tellus elementum sagittis
          vitae et leo duis ut diam quam. Nisi porta lorem mollis aliquam.
          Orci dapibus ultrices in iaculis nunc sed augue lacus. Nibh tortor
          id aliquet lectus proin. Magnis dis parturient montes nascetur ridiculus
          mus mauris vitae ultricies. Auctor neque vitae tempus quam pellentesque nec nam.
          Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi
          cras fermentum. Placerat orci nulla pellentesque dignissim enim.
          Molestie a iaculis at erat pellentesque adipiscing commodo
          elit at. Tincidunt tortor aliquam nulla facilisi cras fermentum
          odio. Tincidunt praesent semper feugiat nibh sed pulvinar.
          Praesent tristique magna sit amet purus. A erat nam at lectus.
          Aliquam id diam maecenas ultricies. Nunc non blandit massa enim
          nec dui. Tempus egestas sed sed risus pretium. Auctor elit sed
          vulputate mi sit amet. Vel pretium lectus quam id leo in.
          Tempus quam pellentesque nec nam. Lectus proin nibh nisl condimentum id venenatis a.
        </Typography>
      </Box>
    </Box>
  );
}
