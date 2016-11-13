// DO NOT CHANGE THE GLOBAL VARIABLE NAME
window.VUELOG_DATABASE = {

  config: {
    brand: 'Vuelog Demo',
    logo: './static/vuelog.svg',
    home: 'https://myst729.github.io/Vuelog/',
    base: '/Vuelog',
    lang: 'en',
    switchLang: true,
    useHomepage: true,
    postsCount: 3,
    metadataDelimiter: '---',
    excerptDelimiter: '<!-- more -->',
    disqusShortname: '', // 'vuelog',
    intenseDebateAccount: '48039cbd4d547c03251bf62282dfa0d6',
    livereUid: '', // 'MTAyMC8yNzE0NS8zNzM0',
    spinnerPattern: 'logo'
  },

  navigation: [
    {
      label: 'Guide',
      type: 'category',
      path: '/blog/guide'
    },
    {
      label: 'About',
      type: 'page',
      path: '/page/all-about-vuelog'
    },
    {
      label: 'Changelog',
      type: 'page',
      path: '/page/changelog'
    },
    {
      label: 'Archive',
      type: 'archive',
      path: '/archive'
    },
    {
      label: 'Links',
      type: 'dropdown',
      // path: 'dropdown can be linkable too',
      children: [
        {
          label: 'Weibo',
          type: 'outgoing',
          link: 'http://weibo.com/myst729'
        },
        {
          label: 'GitHub',
          type: 'outgoing',
          link: 'https://github.com/myst729'
        },
        {
          label: 'StackOverflow',
          type: 'outgoing',
          link: 'https://stackoverflow.com/users/1032492'
        }
      ]
    }
  ],

  pages: [
    {
      title: 'All about Vuelog',
      // titleless: true, // set to true if you want to hide title in single view
      slug: 'all-about-vuelog'
    },
    {
      title: 'Changelog',
      // commentless: true, // set to true if you want to disable comments for this particular page or post
      slug: 'changelog'
    }
  ],

  categories: [
    {
      title: 'Guide',
      slug: 'guide'
    },
    {
      title: 'Empty',
      slug: 'empty'
    }
  ],

  posts: [
    {
      title: 'How to add a post or page?',
      slug: 'how-to-add-a-post-or-page',
      category: 'guide',
      date: '2016-10-21'
    },
    {
      title: 'The (so-called) database',
      slug: 'the-so-called-database',
      category: 'guide',
      date: '2016-10-20'
    },
    {
      title: 'The structure of Vuelog',
      slug: 'the-structure-of-vuelog',
      category: 'guide',
      date: '2016-10-20'
    },
    {
      title: 'Show me the styles!',
      slug: 'show-me-the-styles',
      category: 'guide',
      date: '2016-10-19'
    },
    {
      title: 'Using social commenting services',
      slug: 'using-social-commenting-services',
      category: 'guide',
      date: '2016-04-10'
    },
    {
      title: '[ONHOLD] Using Algolia search service',
      slug: 'using-algolia-search-service',
      category: 'guide',
      date: '2016-04-09'
    },
    {
      title: '[TODO] Vuelog hacker’s guide',
      slug: 'vuelog-hackers-guide',
      category: 'guide',
      date: '2016-04-08'
    }
  ]

}
