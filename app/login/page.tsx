import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { Metadata } from 'next';
import { currentTheme } from '@/app/lib/theme';

export const metadata: Metadata = {
    title: 'Login',
};
 
export default function LoginPage() {
    // user@nextmail.com - 123456
    return (
        <main className={`flex items-center justify-center md:h-screen `} >
            <div className={`relative mx-auto flex w-full max-w-[600px] flex-col space-y-2.5 p-4 md:-mt-32 ${currentTheme[1]} shadow-sm shadow-black rounded-lg `} >
                <div className={`flex h-20 w-full items-end rounded-lg ${currentTheme[2]} p-3 md:h-30`} >
                    <div className="w-32 text-white md:w-36">
                    <AcmeLogo />
                    </div>
                </div>
                <LoginForm />
            </div>
        </main>
    );
}