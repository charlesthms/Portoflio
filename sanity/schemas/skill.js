export default {
    name: "skill",
    title: "Compétences",
    type: "document",
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Nom',
            validation: Rule => Rule.required(),
        },
        {
            name: 'picture',
            type: 'image',
            title: 'Image',
            description: 'Image PNG à fond transparent.',
            validation: Rule => Rule.required(),
        },
    ]
}