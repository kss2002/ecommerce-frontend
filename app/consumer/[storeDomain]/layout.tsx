import type { ReactNode } from 'react';

/**
 * 소비자 영역 Top-Down 레이아웃 (TopNavigation + Main + FloatingAIChat).
 * TODO (Phase 2): TopNavigation, Phase 8: FloatingAIChat 실제 구현
 */
export default async function ConsumerStoreLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ storeDomain: string }>;
}) {
  const { storeDomain } = await params;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border bg-background p-4">
        <p className="text-sm font-medium">소비자 — {storeDomain}</p>
        <p className="text-xs text-muted-foreground">
          TODO (Phase 2): TopNavigation
        </p>
      </header>
      <main className="flex-1 p-6">{children}</main>
      <div className="fixed bottom-6 right-6">
        <p className="rounded-md border border-border bg-background p-3 text-xs text-muted-foreground shadow-sm">
          TODO (Phase 8): FloatingAIChat [AI-001]
        </p>
      </div>
    </div>
  );
}
