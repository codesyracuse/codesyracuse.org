export default {
  name: 'qa',
  title: 'Questions and Answers',
  type: 'object',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'blockContent',
    },
  ],
}
