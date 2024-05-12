import { Global, css } from "@emotion/react";

type Props = {
  children: React.ReactNode
};

const globalStyle = css`
  :root{
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    min-height: 100vh;
    
  }


  body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    
  }

  #root{
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    
    @media screen and (max-width: 1280px) {
      padding: 0;
    }
  }

`;

export const GlobalStyleWrapper = ({ children }: Props) => {
  return (
    <>
      <Global styles={globalStyle} />
      {children}
    </>
  );
};
