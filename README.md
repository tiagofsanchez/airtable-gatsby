# Testing Gatsby graphQL on airtable vs pure react with axios (HTTP request) on airtable

I just wanted to know how Gatsby and graphQL capability will be able to perform when connected to Airtable to:

1. Get data from Airtable and render in your browser;
2. Filter the data using graphQL;
3. Change the data structure using graphQL;

More importantly, this experiment pretends to understand the difference in performance between Gatsby & graphQL when compared to react & axios as well as get a better sense for the code required to implement both solutions

## How to use

If you want to test this, you would need to do a couple of things: 
- Get a Airtable account and use a base that you want to test. The table header needs to be `Name`; 
- Create `.env.development` file where you store your API and ID key;
- Install `gatsby-cli` on your machine

After that you would need to fork this repo so that you can use it and: 
- `yarn install` or `npm install`
- `gatsby-develop` or `npm run dev`


## Commits to follow: 

- commit with the Airtable connected to Gatsby: [here](https://github.com/tiagofsanchez/airtable-gatsby/tree/70c1d5c35c423a0698be5190ea76bd961ed37d7c)
- commit with the search working using JavaScript: [here](https://github.com/tiagofsanchez/airtable-gatsby/commit/52072471b48f11fb1e79338e6fb06536d099848b)
- commit that has got the page programmatically being built with the slug of the name of the activity [here](https://github.com/tiagofsanchez/airtable-gatsby/commit/47bd54a3f3fff213e96c4a9dd1cb7566b200e0fc)
- commit that has the perfect slug [here](https://github.com/tiagofsanchez/airtable-gatsby/commit/ca32ae62ef0cca3e1f0c1dea962c9ac6850c528e)
