'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface Donation {
  id: string;
  name: string;
  email: string;
  phone: string;
  amount: number;
  currency: string;
  razorpayOrderId: string;
  razorpayPaymentId: string | null;
  status: string;
  createdAt: string;
}

interface DashboardData {
  donations: Donation[];
  pagination: {
    page: number;
    limit: number;
    totalCount: number;
    totalPages: number;
  };
  stats: {
    totalRaised: number;
    paidCount: number;
    averageDonation: number;
    totalDonations: number;
    successRate: number;
  };
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const fetchDonations = useCallback(async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '15',
        ...(statusFilter !== 'all' && { status: statusFilter }),
        ...(searchQuery && { search: searchQuery }),
      });

      const res = await fetch(`/api/admin/donations?${params}`);

      if (res.status === 401) {
        router.push('/admin/login');
        return;
      }

      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (error) {
      console.error('Failed to fetch donations:', error);
    } finally {
      setIsLoading(false);
    }
  }, [page, statusFilter, searchQuery, router]);

  useEffect(() => {
    fetchDonations();
  }, [fetchDonations]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    setSearchQuery(searchInput);
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  const formatAmount = (paise: number) => {
    return `₹${(paise / 100).toLocaleString('en-IN')}`;
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      paid: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
      created: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
      failed: 'bg-red-500/15 text-red-400 border-red-500/20',
    };
    return styles[status] || 'bg-gray-500/15 text-gray-400 border-gray-500/20';
  };

  const stats = data?.stats;

  return (
    <div className="min-h-screen bg-[#0f1117]">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-30 bg-[#0f1117]/80 backdrop-blur-xl border-b border-[#1e2130]">
        <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ae0011] to-[#d71920] flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1 className="text-sm font-bold text-white tracking-tight">Admin Dashboard</h1>
              <p className="text-xs text-[#6b7280]">Self Belief Foundation</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-[#9ca3af] hover:text-white transition-colors bg-[#1a1d27] hover:bg-[#252836] border border-[#2a2d3a] rounded-lg px-4 py-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: 'Total Raised',
              value: stats ? formatAmount(stats.totalRaised) : '—',
              icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              color: 'from-emerald-500/20 to-emerald-500/5',
              iconBg: 'bg-emerald-500/15 text-emerald-400',
            },
            {
              label: 'Total Donations',
              value: stats?.totalDonations?.toString() || '0',
              icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              color: 'from-blue-500/20 to-blue-500/5',
              iconBg: 'bg-blue-500/15 text-blue-400',
            },
            {
              label: 'Average Donation',
              value: stats ? formatAmount(stats.averageDonation) : '—',
              icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              color: 'from-purple-500/20 to-purple-500/5',
              iconBg: 'bg-purple-500/15 text-purple-400',
            },
            {
              label: 'Success Rate',
              value: stats ? `${stats.successRate}%` : '—',
              icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              color: 'from-amber-500/20 to-amber-500/5',
              iconBg: 'bg-amber-500/15 text-amber-400',
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`relative overflow-hidden bg-[#1a1d27] border border-[#2a2d3a] rounded-2xl p-5`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} pointer-events-none`} />
              <div className="relative">
                <div className={`w-10 h-10 rounded-xl ${stat.iconBg} flex items-center justify-center mb-3`}>
                  {stat.icon}
                </div>
                <p className="text-xs font-medium text-[#6b7280] uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-white tracking-tight">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filters & Search */}
        <div className="bg-[#1a1d27] border border-[#2a2d3a] rounded-2xl p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <form onSubmit={handleSearch} className="flex-1 flex gap-2">
              <div className="relative flex-1">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4b5563]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search by name, email, or payment ID..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full h-10 pl-10 pr-4 rounded-xl bg-[#0f1117] border border-[#2a2d3a] text-white text-sm placeholder-[#4b5563] outline-none focus:border-[#ae0011] focus:ring-1 focus:ring-[#ae0011]/30 transition-all"
                />
              </div>
              <button
                type="submit"
                className="h-10 px-5 bg-[#ae0011] text-white text-sm font-medium rounded-xl hover:bg-[#d71920] transition-colors"
              >
                Search
              </button>
            </form>

            {/* Status filter */}
            <div className="flex gap-1 bg-[#0f1117] rounded-xl p-1 border border-[#2a2d3a]">
              {['all', 'paid', 'created', 'failed'].map((s) => (
                <button
                  key={s}
                  onClick={() => { setStatusFilter(s); setPage(1); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                    statusFilter === s
                      ? 'bg-[#ae0011] text-white shadow-sm'
                      : 'text-[#6b7280] hover:text-white'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Donations Table */}
        <div className="bg-[#1a1d27] border border-[#2a2d3a] rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#2a2d3a]">
                  {['Donor', 'Email', 'Amount', 'Status', 'Payment ID', 'Date'].map((h) => (
                    <th
                      key={h}
                      className="text-left text-xs font-semibold text-[#6b7280] uppercase tracking-wider px-5 py-4"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  // Skeleton rows
                  Array.from({ length: 5 }).map((_, i) => (
                    <tr key={i} className="border-b border-[#1e2130]">
                      {Array.from({ length: 6 }).map((_, j) => (
                        <td key={j} className="px-5 py-4">
                          <div className="h-4 bg-[#252836] rounded-md animate-pulse" style={{ width: `${60 + Math.random() * 40}%` }} />
                        </td>
                      ))}
                    </tr>
                  ))
                ) : data?.donations.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-16">
                      <div className="text-[#4b5563]">
                        <svg className="w-12 h-12 mx-auto mb-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                        <p className="text-sm font-medium">No donations found</p>
                        <p className="text-xs mt-1">
                          {searchQuery || statusFilter !== 'all'
                            ? 'Try adjusting your search or filters.'
                            : 'Donations will appear here once they come in.'}
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  data?.donations.map((donation) => (
                    <tr
                      key={donation.id}
                      className="border-b border-[#1e2130] hover:bg-[#1e2130]/50 transition-colors"
                    >
                      <td className="px-5 py-4">
                        <div>
                          <p className="text-sm font-medium text-white">{donation.name}</p>
                          {donation.phone && (
                            <p className="text-xs text-[#6b7280] mt-0.5">{donation.phone}</p>
                          )}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm text-[#9ca3af]">
                        {donation.email || '—'}
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-sm font-semibold text-white">
                          {formatAmount(donation.amount)}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold capitalize border ${getStatusBadge(donation.status)}`}>
                          {donation.status}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-xs font-mono text-[#6b7280]">
                          {donation.razorpayPaymentId
                            ? donation.razorpayPaymentId.slice(0, 20) + '...'
                            : '—'}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-xs text-[#6b7280]">
                        {formatDate(donation.createdAt)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {data && data.pagination.totalPages > 1 && (
            <div className="flex items-center justify-between px-5 py-4 border-t border-[#2a2d3a]">
              <p className="text-xs text-[#6b7280]">
                Showing {((page - 1) * 15) + 1}–{Math.min(page * 15, data.pagination.totalCount)} of{' '}
                {data.pagination.totalCount} donations
              </p>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setPage(Math.max(1, page - 1))}
                  disabled={page <= 1}
                  className="h-8 px-3 text-xs font-medium text-[#9ca3af] bg-[#0f1117] border border-[#2a2d3a] rounded-lg hover:bg-[#252836] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>
                {Array.from({ length: Math.min(5, data.pagination.totalPages) }, (_, i) => {
                  let pageNum: number;
                  const total = data.pagination.totalPages;
                  if (total <= 5) {
                    pageNum = i + 1;
                  } else if (page <= 3) {
                    pageNum = i + 1;
                  } else if (page >= total - 2) {
                    pageNum = total - 4 + i;
                  } else {
                    pageNum = page - 2 + i;
                  }
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setPage(pageNum)}
                      className={`w-8 h-8 text-xs font-medium rounded-lg transition-colors ${
                        page === pageNum
                          ? 'bg-[#ae0011] text-white'
                          : 'text-[#9ca3af] bg-[#0f1117] border border-[#2a2d3a] hover:bg-[#252836]'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                <button
                  onClick={() => setPage(Math.min(data.pagination.totalPages, page + 1))}
                  disabled={page >= data.pagination.totalPages}
                  className="h-8 px-3 text-xs font-medium text-[#9ca3af] bg-[#0f1117] border border-[#2a2d3a] rounded-lg hover:bg-[#252836] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
