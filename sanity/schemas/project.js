export default  {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options:{
        // if we wan't to edit of crop image directly in to database
        hotspot:true
    }
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: "reference", to: { type: "skill" } }],
    },

    {
      name: 'linkToBuild',
      title: 'LinkToBuild',
      type: 'url',

    },



  ],


}
