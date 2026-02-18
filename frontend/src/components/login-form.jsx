import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({
    className,
    title = "Welcome back",
    description = "Login to your account",
    image = "/auth-hero.png",
    isPartner = false,
    ...props
}) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className={cn("overflow-hidden p-0 shadow-lg border-none rounded-2xl", isPartner ? "shadow-orange-900/10" : "shadow-lg")}>
                <CardContent className="grid p-0 md:grid-cols-2">
                    <form className="p-6 md:p-8 flex flex-col justify-center bg-card">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center gap-2 text-center">
                                <h1 className="text-3xl font-bold text-primary tracking-tight">{title}</h1>
                                <p className="text-muted-foreground text-sm text-balance">
                                    {description}
                                </p>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    className="bg-muted/50 border-input/50 focus:border-primary focus:ring-primary/20"
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <a
                                        href="#"
                                        className="ml-auto text-sm text-primary underline-offset-2 hover:underline font-medium"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    className="bg-muted/50 border-input/50 focus:border-primary focus:ring-primary/20"
                                />
                            </div>
                            <Button type="submit" className="w-full font-bold text-md shadow-md hover:shadow-lg transition-all">
                                Login
                            </Button>
                            <div className="text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <a href={isPartner ? "/food-partner/register" : "/user/register"} className="underline underline-offset-4 text-primary hover:text-primary/80 font-medium">
                                    Sign up
                                </a>
                            </div>
                        </div>
                    </form>
                    <div className="relative hidden md:block">
                        <img
                            src={image}
                            alt="Login visual"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                            <div className="text-white space-y-2">
                                <h2 className="text-2xl font-bold">{isPartner ? "Partner with Us" : "Taste the Best"}</h2>
                                <p className="text-white/80">{isPartner ? "Grow your business with our platform." : "Order from top-rated restaurants near you."}</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
                By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>.
            </div>
        </div>
    )
}
