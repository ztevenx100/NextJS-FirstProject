
import Search from '@/app/ui/search';
import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import { currentTheme } from '@/app/lib/theme';
import { fetchCustomersPages } from '@/app/lib/data';
import { Suspense } from 'react';
import CustomersTable from '@/app/ui/customers/table';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import Pagination from '@/app/ui/invoices/pagination';

export const metadata: Metadata = {
    title: 'Customers',
};

export default async function CustomersPage({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchCustomersPages(query);

    return (
        <article className="w-full">
            <header className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl ${currentTheme[8]} `}>Customers</h1>
            </header>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search customers..." />
            </div>
            <div className="mt-5 flex w-full justify-center">
                <Suspense key={query + currentPage} fallback={<CustomersTableSkeleton />}>
                    <CustomersTable query={query} currentPage={currentPage} />
                </Suspense>
            </div>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </article>
    );
}