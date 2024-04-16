import { z } from 'zod'
import { is_admin } from '../middleware/authentication.middleware'

export const createReviewDtoBody = z.object ({
    
    rating: z.enum(['1', '2', '3', '4', '5']),

        comment: z.string({
            required_error: ' comment is required', 

        }),

        // date: z.date({
        //     required_error: 'date is required',
        // }),

        // is_admin: z.boolean().optional().default(false)
        
    }).strict()

export const createReviewDto = z.object ({
    body: createReviewDtoBody

})

export const updateReviewDtoBody = z.object ({
    
    rating: z.enum(['1', '2', '3', '4', '5']),

        comment: z.string({
            required_error: 'comment is required',

        }),

        
    }).strict()

    export const updateReviewDto = z.object ({
        body: updateReviewDtoBody

    })

