<img src="public/CatwikiLogo.svg" width="400px">

# Cat Wiki

[Cat Wiki](https://cat-wiki-shaundnz.netlify.app/) is your one stop shop for all information related to our feline friends! Search for different breeds or browse them all!

This website is hosted on Netlify, you can check it out [here!](https://cat-wiki-shaundnz.netlify.app/)

This website is created using NextJS's static site generation features for extremely fast load times. All pages are generated at build time by using the NextJS `GetStaticProps` function and consuming data from the [The Cat API](https://thecatapi.com/).

The website was built using a mobile first approach and is fully responsive. Responsive styles were implemented with the features provided by ChakraUI.

<table>
  <tr>
    <td>Home Page</td>
     <td>Breed Page</td>
     <td>All Breeds Page</td>
  </tr>
  <tr>
    <td><img src="https://i.imgur.com/7D0ADjR.png"></td>
    <td><img src="https://i.imgur.com/KhyKHTK.png"></td>
    <td><img src="https://i.imgur.com/JQSbJxq.png"></td>
  </tr>
 </table>

### Motivation
This project was built to further my skills with full stack development and practice using the powerful static site generation (SSG) features provided by NextJS. 

This project presented an ideal use case for SSG as the data from the API does not change often, thus all the HTML for the pages can be generated at build time. These pages can be served quickly as the client does not need to make an extra request to the API for the data to hydrate a page.

### Built With:

- Next.JS
- React
- TypeScript
- ChakraUI
- Netlify
- The Cat API

Additional libraries used includes `axios`.
