import Link from 'next/link';

/**
 * 루트 페이지 — 로컬 개발 진입점.
 * 운영에서는 호스트네임 기반 proxy.ts 가 admin/seller/{store} 로 분기시키므로
 * 이 페이지에 도달하는 일반 사용자 동선은 없음.
 */
export default function RootPage() {
  const links: Array<{ href: string; label: string; hint: string }> = [
    { href: '/admin/dashboard', label: '관리자 대시보드', hint: 'admin.host.com 진입 동선' },
    { href: '/seller/dashboard', label: '판매자 대시보드', hint: 'seller.host.com 진입 동선' },
    { href: '/consumer/demo-store', label: '소비자 (demo-store)', hint: '{store}.host.com 진입 동선' },
    { href: '/login', label: '로그인', hint: '[MEM-001]' },
    { href: '/signup', label: '회원가입', hint: '[MEM-001]' },
  ];

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">AI 맞춤 추천 이커머스 플랫폼</h1>
        <p className="text-sm text-muted-foreground">
          로컬 개발 진입점. 운영 환경에서는 <code>proxy.ts</code> 가 호스트네임 기반으로 라우팅합니다.
        </p>
      </header>

      <nav>
        <h2 className="mb-2 text-lg font-semibold">역할별 진입</h2>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-md border border-border p-3 hover:bg-muted"
              >
                <span className="font-medium">{link.label}</span>
                <span className="ml-2 text-xs text-muted-foreground">{link.hint}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
