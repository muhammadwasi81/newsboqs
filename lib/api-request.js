import client from './apollo/client';
import { GET_MENUS } from './apollo/queries/posts/get-menus';
import { GET_SUBDOMAINS } from './apollo/queries/posts/get-subdomains';
import {
  GET_LATEST_POST,
  GET_POST_BY_CATEGORY,
} from './apollo/queries/posts/get-posts';

export async function getHomePageData() {
  try {
    const [
      latestPost,
      attractionsList,
      eatList,
      drinkList,
      nightLifeList,
      tipsList,
      accomodationsList,
      toursAndeventsList,
      headerFooter,
    ] = await Promise.all([
      client.query({
        query: GET_LATEST_POST,
        variables: {
          latestCount: 7,
        },
      }),
      client.query({
        query: GET_POST_BY_CATEGORY,
        variables: {
          latestCount: 4,
          categorySlug: 'attractions',
        },
      }),
      client.query({
        query: GET_POST_BY_CATEGORY,
        variables: {
          latestCount: 4,
          categorySlug: 'eat',
        },
      }),
      client.query({
        query: GET_POST_BY_CATEGORY,
        variables: {
          latestCount: 4,
          categorySlug: 'drink',
        },
      }),
      client.query({
        query: GET_POST_BY_CATEGORY,
        variables: {
          latestCount: 4,
          categorySlug: 'nightlife',
        },
      }),
      client.query({
        query: GET_POST_BY_CATEGORY,
        variables: {
          latestCount: 4,
          categorySlug: 'tips',
        },
      }),
      client.query({
        query: GET_POST_BY_CATEGORY,
        variables: {
          latestCount: 4,
          categorySlug: 'accomodations',
        },
      }),
      client.query({
        query: GET_POST_BY_CATEGORY,
        variables: {
          latestCount: 4,
          categorySlug: 'tours & events',
        },
      }),
      client.query({
        query: GET_MENUS,
      }),
    ]);

    const homePageData = {
      latestPost: latestPost?.data || null,
      categoryList: {
        attractions: attractionsList?.data || null,
        eat: eatList?.data || null,
        drink: drinkList?.data || null,
        nightlife: nightLifeList?.data || null,
        tips: tipsList?.data || null,
        accomodations: accomodationsList?.data || null,
        toursAndEvents: toursAndeventsList?.data || null,
      },
      menus: headerFooter?.data || null,
    };

    return homePageData;
  } catch (error) {
    console.log('==ERROR==', error);
    return null;
  }
}
