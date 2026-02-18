import { LoginForm } from "@/components/login-form"

export default function UserLoginPage() {
    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-4xl">
                <LoginForm
                    title="User Login"
                    description="Welcome back! Please login to your user account."
                    image="/auth-hero.png"
                    isPartner={false}
                />
            </div>
        </div>
    )
}
