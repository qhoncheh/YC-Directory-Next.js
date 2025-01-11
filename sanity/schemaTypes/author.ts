export {defineType} from "sanity";

export const author = defineType( schemaDefinition: {
    name:"author",
    title:"Autor",
    type: "document",
    icon: UserIcon,
    fields: {
        defineField ( schemaField: {
            name: "id",
            type: "number"
        }),
        
    }
} )