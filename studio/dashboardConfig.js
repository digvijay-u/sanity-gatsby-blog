export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dc93d28936ba54e8ad8669e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-52w9ryj8',
                  apiId: 'e70969ef-b4b5-4902-be24-0ea3e3ed98a8'
                },
                {
                  buildHookId: '5dc93d29164c0880ac75bb5e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-o67qehh1',
                  apiId: '869f35b4-61d9-467f-b34e-9eb7636207e6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/digvijay-u/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-o67qehh1.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
