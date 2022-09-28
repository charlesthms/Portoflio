export default {
    name: "work",
    title: "Projets principaux",
    type: "document",
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Titre',
            validation: Rule => Rule.required(),
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description',
            validation: Rule => Rule.required(),
        },
        {
            name: 'category',
            type: 'string',
            title: 'Catégorie',
            validation: Rule => Rule.required(),
        },
        {
            name: 'github',
            type: 'string',
            title: 'Github Repository',
            description: 'Optionel',
        },
        {
            name: 'live',
            type: 'string',
            title: 'Live version',
            description: 'Optionel',
        },
        {
            name: 'techs',
            title: 'Technologies',
            type: 'array',
            of: [{type: 'string'}],
            validation: Rule => Rule.required(),
        },
        {
            name: 'img',
            type: 'image',
            title: 'Image du projet',
            validation: Rule => Rule.required(),
        }
    ]
}