import { createClient } from "contentful";

const client = createClient({
  space: "59w8420dbrn3",
  accessToken: "aKFFMQlXzNDRZ-A037aG16CYx1-lfDUIHEqWZO0_e4Y",
});

// Retrieve the list of blog posts from Contentful
const getBlogPosts = async () => {
  const response = await client.getEntries({
    content_type: "hero",
  });

  return response.items;
};

// Retrieve hero info from Contentful
const getHeroData = async () => {
  const response = await client.getEntries({
    content_type: "hero",
  });

  return response.items;
};

// Retrieve the list of blog posts from Contentful
const getActivityData = async () => {
  const response = await client.getEntries({
    content_type: "activity",
  });

  return response.items;
};

export default getBlogPosts;
getHeroData;
getActivityData;
