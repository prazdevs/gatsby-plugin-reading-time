const readingTime = require('reading-time')

exports.onCreateNode = ({ actions, node }, pluginOptions) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    createNodeField({
      name: 'readingTime',
      node,
      value: readingTime(node.rawBody, pluginOptions),
    })
  } else if (node.internal.type === 'MarkdownRemark') {
    createNodeField({
      name: 'readingTime',
      node,
      value: readingTime(node.rawMarkdownBody, pluginOptions),
    })
  }
}

exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    wordsPerMinute: Joi.number().min(0),
    wordBound: Joi.function().arity(1),
  })
}
