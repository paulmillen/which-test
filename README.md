# Which? tech test

**Hello!**  Thank you for considering this tech test.  I hope you enjoy reviewing it :)

## Quick start

`$ npm i`  
`$ npm start` - to run the app locally on `5132`

## Notes

I used Vite which is a super-quick bundler with much less config than Webpack.  Also `@swc/jest` to speed the tests up a bit.

I decided to use Material UI to enable me to quickly bootstrap the project and meet a lot of the criteria using some easily configurable components.  It provides WCAG 2.0 compliant components and some pleasing styling out of the box (although I appreciate this isn't a critera of this exercise!).

I tested the core component which contained the main logic of the app to ensure this works correctly.  Although I love testing and TDD, I am not a huge advocate of extensive UI unit testing wherein one may simply end up testing React functionality, or in the worst case result in a dazzling array of complex, brittle mocks.  Were the logic to this problem more complicated I may consider breaking it out into separate functions, tested separately, then imported into the React component.  

Given more time I would consider creating a Cypress testing suite to protect against any major breaking changes.

I have fulfilled the requirement to limit the rows per viewport size.  In the real world I would want to understand this decision a little bit more as it seems there's an argument to be made for fitting more squares into the view if possible.

