import type { ReactNode } from 'react';

/**
 * 판매자 영역 L-Type 레이아웃 (Sidebar + Main).
 * TODO (Phase 2): SellerSidebar 실제 구현
 */
export default function SellerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 border-r border-border bg-sidebar p-4">
        <p className="text-sm font-medium">판매자</p>
        <p className="mt-2 text-xs text-muted-foreground">
          TODO (Phase 2): SellerSidebar
        </p>
      </aside>
      <main className="flex-1 overflow-auto p-6">{children}</main>
    </div>
  );
}
