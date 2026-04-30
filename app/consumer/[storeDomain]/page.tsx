// [PRD-002, PRD-003] 홈 — AI 추천 피드 / 카테고리 탐색
export default async function ConsumerHomePage({
  params,
}: {
  params: Promise<{ storeDomain: string }>;
}) {
  const { storeDomain } = await params;

  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">{storeDomain} 스토어</h1>
      <p className="text-sm text-muted-foreground">
        TODO (Phase 5): AI 추천 피드 · 카테고리 그리드
      </p>
    </div>
  );
}
