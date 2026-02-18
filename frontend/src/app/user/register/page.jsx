import { SignupForm } from "@/components/signup-form"

export default function UserRegisterPage() {
    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-4xl">
                <SignupForm
                    title="Create User Account"
                    description="Sign up to start ordering delicious food."
                    image="/auth-hero.png"
                    isPartner={false}
                />
            </div>
        </div>
    )
}
