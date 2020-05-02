import { createGlobalStyle } from 'styled-components';
import { accent } from 'constants/theme';

export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    line-height: 1;
    font-size: 1.6rem;
    color: #000;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: ${accent};
    text-decoration: none;
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    color: ${accent};
    border: 1px solid #ddd;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }

  video {
    max-width: 100%;
  }

  p {
    margin-bottom: 2rem;
  }

  body {
    background: #eeeeee;
  }

  .layout-container {
    background: white;
    padding: 0 10px;
    border-left: 1px solid black;
    border-right: 1px solid black;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    min-height: 100vh;
    padding-bottom: 100px;
  }

  .description {
    margin: 16px 0 0 !important;
  }

  .gatsby-image-wrapper {
    border: 1px solid #666666;
    border-radius: 5px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }

  @media only screen and (max-width: 1260px) {
    .layout-container {
      margin-left: 20px;
      margin-right: 20px;
      width: calc(100% - 40px);
    }
  }

  @media only screen and (max-width: 768px) {
    .layout-container {
      margin-left: 10px;
      margin-right: 10px;
      width: calc(100% - 20px);
    }
  }

  @media only screen and (max-width: 376px) {
    .layout-container {
      padding: 0;
      margin-left: 0;
      margin-right: 0;
      border: 0;
      width: calc(100%);

    }
  }

  .site-title {
    font-weight: 500;
    font-size: 2rem;
    line-height: 1.2;
  }

  h2 {
    font-weight: 400;
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  h3 {
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: 20px;
  }

`;
