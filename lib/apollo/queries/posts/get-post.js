import { gql } from '@apollo/client';
import MenuFragment from '../../fragments/menus';
import SeoFragment from '../../fragments/seo-fragment';
import { HeaderFooter } from './get-menus';

export const GET_POST = gql`
  query GET_POST($uri: String) {
    post: postBy(slug: $uri) {
      id
      excerpt
      slug
      uri
      title
      content
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      categories {
        nodes {
          uri
          name
          id
          slug
        }
      }
      author {
        node {
          name
          slug
          avatar {
            url
          }
        }
      }
      seo {
        ...SeoFragment
      }
    }
    ${HeaderFooter}
  }
  ${SeoFragment}
  ${MenuFragment}
`;

export const DEPRECATED_GET_DOMAIN_POST = gql`
  query GET_POST($uri: String, $searchTerm: String) {
    post: postBy(slug: $uri) {
      id
      excerpt
      slug
      uri
      title
      content
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      categories(where: {search: $searchTerm}) {
        nodes {
          uri
          name
          id
          slug
        }
      }
      author {
        node {
          name
          slug
          avatar {
            url
          }
        }
      }
      seo {
        ...SeoFragment
      }
    }
    ${HeaderFooter}
  }
  ${SeoFragment}
  ${MenuFragment}
`;

export const GET_DOMAIN_POST = gql`
query GET_POST($uri: String, $searchTerm: String){
  post: post(id: $uri, idType: SLUG) {
    categories(where: {name: $searchTerm}) {
      edges {
        node {
          name
          uri
        }
      }
    }
    slug
    title(format: RENDERED)
    uri
    content(format: RENDERED)
    author {
      node {
        name
        slug
        id
      }
    }
  }
  seo {
        ...SeoFragment
      }
}
    ${HeaderFooter}
  }
  ${SeoFragment}
  ${MenuFragment}
  `;
