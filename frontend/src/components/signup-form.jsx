import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function SignupForm({
    className,
    title = "Create your account",
    description = "Enter your email below to create your account",
    image = "/auth-hero.png",
    isPartner = false,
    ...props
}) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className={cn("overflow-hidden p-0 shadow-lg border-none rounded-2xl", isPartner ? "shadow-orange-900/10" : "shadow-lg")}>
                <CardContent className="grid p-0 md:grid-cols-2">
                    <form className="p-6 md:p-8 flex flex-col justify-center bg-card">
                        <FieldGroup>
                            <div className="flex flex-col items-center gap-2 text-center">
                                <h1 className="text-3xl font-bold text-primary tracking-tight">{title}</h1>
                                <p className="text-muted-foreground text-sm text-balance">
                                    {description}
                                </p>
                            </div>

                            {/* Common Fields */}
                            <Field>
                                <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
                                <Input
                                    id="fullName"
                                    type="text"
                                    placeholder="John Doe"
                                    required
                                    className="bg-muted/50 border-input/50 focus:border-primary focus:ring-primary/20"
                                />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    className="bg-muted/50 border-input/50 focus:border-primary focus:ring-primary/20"
                                />
                            </Field>

                            <Field>
                                <Field className="grid grid-cols-2 gap-4">
                                    <Field>
                                        <FieldLabel htmlFor="password">Password</FieldLabel>
                                        <Input
                                            id="password"
                                            type="password"
                                            required
                                            className="bg-muted/50 border-input/50 focus:border-primary focus:ring-primary/20"
                                        />
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="confirm-password">
                                            Confirm Password
                                        </FieldLabel>
                                        <Input
                                            id="confirm-password"
                                            type="password"
                                            required
                                            className="bg-muted/50 border-input/50 focus:border-primary focus:ring-primary/20"
                                        />
                                    </Field>
                                </Field>
                                <FieldDescription>
                                    Must be at least 8 characters long.
                                </FieldDescription>
                            </Field>
                            <Field>
                                <Button type="submit" className="w-full font-bold text-md shadow-md hover:shadow-lg transition-all">
                                    Create Account
                                </Button>
                            </Field>
                            <FieldDescription className="text-center">
                                Already have an account? <a href={isPartner ? "/food-partner/login" : "/user/login"}>Sign in</a>
                            </FieldDescription>
                        </FieldGroup>
                    </form>
                    <div className="relative hidden md:block">
                        <img
                            src={image}
                            alt="Visual"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                            <div className="text-white space-y-2">
                                <h2 className="text-2xl font-bold">{isPartner ? "Join the Network" : "Simple. Fast. Delicious."}</h2>
                                <p className="text-white/80">{isPartner ? "Reach more customers and manage orders easily." : "Join us to explore the best food in town."}</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <FieldDescription className="px-6 text-center">
                By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>.
            </FieldDescription>
        </div>
    )
}
