import { IconPackages, IconSitemap } from '@tabler/icons-react';
import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
  IconCamera,
  IconCategory,
  IconArticle,
  IconTag,
} from '@tabler/icons-react';

import { uniqueId } from 'lodash';

const Menuitems = [
  // {
  //   navlabel: true,
  //   subheader: 'Home',
  // },

  {
    id: uniqueId(),
    title: 'Article',
    icon: IconArticle,
    href: '/admin/article',
    activePaths: [
      '/admin/article',
      '/admin/article/article-list/[website]',
      '/admin/article/article-list/[website]/article-details/[article]',
    ],
  },
  {
    id: uniqueId(),
    title: 'Image',
    icon: IconCamera,
    href: '/admin/image',
    activePaths: ['/admin/image', '/admin/image/image-list/[website]'],
  },
  {
    id: uniqueId(),
    title: 'Category',
    icon: IconCategory,
    href: '/admin/category',
    activePaths: ['/admin/category', '/admin/category/category-list/[website]'],
  },
  {
    id: uniqueId(),
    title: 'Tags',
    icon: IconTag,
    href: '/admin/tags',
    activePaths: ['/admin/tags', '/admin/tags/tags-list/[website]'],
  },
  {
    id: uniqueId(),
    title: 'Pages',
    icon: IconPackages,
    href: '/admin/pages',
    activePaths: ['/admin/pages', '/admin/pages/pages-list/[website]'],
  },
  {
    id: uniqueId(),
    title: 'Sites',
    icon: IconSitemap,
    href: '/admin/sites',
    activePaths: ['/admin/sites'],
  },
  // {
  //   navlabel: true,
  //   subheader: 'Utilities',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Typography',
  //   icon: IconTypography,
  //   href: '/utilities/typography',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Shadow',
  //   icon: IconCopy,
  //   href: '/utilities/shadow',
  // },
  // // {
  // //   navlabel: true,
  // //   subheader: 'Auth',
  // // },
  // {
  //   id: uniqueId(),
  //   title: 'Login',
  //   icon: IconLogin,
  //   href: '/authentication/login',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Register',
  //   icon: IconUserPlus,
  //   href: '/authentication/register',
  // },
  // // {
  // //   navlabel: true,
  // //   subheader: 'Extra',
  // // },
  // {
  //   id: uniqueId(),
  //   title: 'Icons',
  //   icon: IconMoodHappy,
  //   href: '/icons',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Sample Page',
  //   icon: IconAperture,
  //   href: '/sample-page',
  // },
];

export default Menuitems;
