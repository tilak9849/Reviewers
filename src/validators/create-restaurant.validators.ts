import { number, z }  from 'zod'

export const createRestroDtobody = z.object({
    name: z.string({
        required_error: "Name is not given "
    }),
    description: z.string({
        required_error: "Description is not given "
    }),
    address: z.string({
        required_error: "Address is require "
    }),
}).strict()
export const createRestro = z.object({
    body: createRestroDtobody
})

export const updateRestroDtoBody = z.object({
    name: z.string({
        required_error: "Name is should be changed  given "
    }).optional(),
    description: z.string({
        required_error: "Add some description "
    }).optional(),
    address: z.string({
        required_error: "Enter your Address here "
    }).optional(),
    
}).strict()
export const updateRestroDto = z.object({
    body: updateRestroDtoBody
})
