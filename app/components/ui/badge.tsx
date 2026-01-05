import * as React from "react"
import {cva, type VariantProps} from "class-variance-authority"

import {cn} from "~/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-full border py-2 px-3 sm:py-2.5 sm:px-4 text-sm sm:text-md uppercase font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-primary/25 bg-primary/17 text-primary shadow hover:bg-primary/30",
                secondary:
                    "border-secondary/40 bg-secondary/25 text-secondary shadow hover:bg-secondary/40",
                primary:
                    "border-primary/40 bg-primary/25 text-primary shadow hover:bg-primary/40",
                destructive:
                    "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
                outline: "text-foreground hover:bg-foreground/20",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {
}

function Badge({className, variant, ...props}: BadgeProps) {
    return (
        <div className={cn(badgeVariants({variant}), className)} {...props} />
    )
}

export {Badge, badgeVariants}
