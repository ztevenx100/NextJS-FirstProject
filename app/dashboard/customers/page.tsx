
import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import { currentTheme } from '@/app/lib/theme';

export const metadata: Metadata = {
    title: 'Customers',
};

export default function CustomersPage() {
    return (
        <article className="w-full">
            <header className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl ${currentTheme[8]} `}>Customers</h1>
            </header>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
            </div>
            <div className="mt-5 flex w-full justify-center">
            </div>
        </article>
        );
}