// [SEL-PRD-002] 상품 옵션 관리
export default async function SellerProductOptionsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">상품 옵션 #{productId}</h1>
      <p className="text-sm text-muted-foreground">
        TODO (Phase 6): OptionManager (동적 옵션 추가/삭제)
      </p>
    </div>
  );
}
