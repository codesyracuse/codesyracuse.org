export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'object',
    fields: [
      {
        name: 'body',
        title: 'Content',
        type: 'blockContent',
      },
      {
        title: 'Endorser',
        name: 'endorser',
        type: 'reference',
        to: [{type: 'person'}],
      },
      {
        name: 'endorserDescription',
        title: 'Endorser Description',
        type: 'string',
        description: 'ex. Poet, 2017'
      },
    ],
    preview: {
      select: {
        title: 'endorser.name',
        subtitle: 'description',
        media: 'endorser.image'
      },
    },
  }
  