import {
  Box, Button, Grid, TextField, Typography,
} from "@mui/material";
import { ProductDetailCard } from "../../../../components/Product/ProductDetail/ProductDetailCard";

export function ProductDetail() {
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
        <Typography variant="body1" textAlign="left" margin="32px 0" lineHeight="1.21rem">
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
        <Typography variant="body1" textAlign="left" lineHeight="1.21rem">
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
      <Box margin="64px 0">

        <Typography
          variant="h5"
          fontSize="1.8125rem"
          fontWeight="600"
          align="left"
        >
          Comments
        </Typography>
        <Box margin="32px 0">
          <Typography variant="body1" fontWeight="600" textAlign="left" mb="8px">John Terry</Typography>
          <Typography variant="body1" fontSize="0.875rem" textAlign="left" color="#777">Rated: 5 out of 5</Typography>
          <Typography variant="body1" component="p" textAlign="left" margin="16px 0 32px" lineHeight="1.21rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Dignissim enim sit
            amet venenatis urna cursus. Odio aenean sed adipiscing diam donec adipiscing
            tristique risus nec. Mi sit amet mauris commodo quis imperdiet. Sed viverra
            ipsum nunc aliquet bibendum enim. Ullamcorper eget nulla facilisi etiam.
            Id porta nibh venenatis cras sed. Tellus cras adipiscing enim eu turpis
            egestas pretium. Tincidunt eget nullam non nisi est sit amet facilisis
            magna. Dui faucibus in ornare quam. Ullamcorper eget nulla facilisi etiam
            dignissim. In tellus integer feugiat scelerisque varius morbi enim. Luctus
            accumsan tortor posuere ac ut consequat.
          </Typography>
        </Box>
        <Box margin="32px 0">
          <Typography variant="body1" fontWeight="600" textAlign="left" mb="8px">Frank Lampard</Typography>
          <Typography variant="body1" fontSize="0.875rem" textAlign="left" color="#777">Rated: 4 out of 5</Typography>
          <Typography variant="body1" component="p" textAlign="left" margin="16px 0 32px" lineHeight="1.21rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Dignissim enim sit
            amet venenatis urna cursus. Odio aenean sed adipiscing diam donec adipiscing
            tristique risus nec. Mi sit amet mauris commodo quis imperdiet. Sed viverra
            ipsum nunc aliquet bibendum enim. Ullamcorper eget nulla facilisi etiam.
            Id porta nibh venenatis cras sed. Tellus cras adipiscing enim eu turpis
            egestas pretium. Tincidunt eget nullam non nisi est sit amet facilisis
            magna. Dui faucibus in ornare quam. Ullamcorper eget nulla facilisi etiam
            dignissim. In tellus integer feugiat scelerisque varius morbi enim. Luctus
            accumsan tortor posuere ac ut consequat.
          </Typography>
        </Box>
        <Grid container={true} maxWidth="890px" flexDirection="column">
          <Grid item={true} xs={6}>

            <Typography variant="body1" fontSize="0.875rem" textAlign="left" lineHeight="1.25rem">Leave a comment</Typography>
            <Box borderRadius="5px">
              <TextField
                multiline={true}
                fullWidth={true}
                minRows={5}
                placeholder="Comment"
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
              onClick={() => console.log("submitted")}
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
      </Box>
    </Box>
  );
}
