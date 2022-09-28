export default {
    name: "header",
    title: "Header",
    type: "document",
    fields: [
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'profile_pic',
            type: 'image',
            title: 'Image de profil',
        },
        {
            name: 'cv',
            type: 'file',
            title: 'CV',
        },
    ]
}