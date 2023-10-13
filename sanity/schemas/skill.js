export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: "Title of skill",
      type: 'string',
    },

    {
      name: 'progress',
      title: 'Progress',
      type: 'number',
      description: "Progress of skill from 0 to 100",
      validation: (Rule) => Rule.min(0).max(100),

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




  ],


}
