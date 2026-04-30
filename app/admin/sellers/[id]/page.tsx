// [ADM-SEL-002] 판매자 승인/등급 관리
export default async function AdminSellerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">판매자 상세 #{id}</h1>
      <p className="text-sm text-muted-foreground">
        TODO (Phase 7): 판매자 정보 · 승인/반려 · 등급 변경 폼
      </p>
    </div>
  );
}
