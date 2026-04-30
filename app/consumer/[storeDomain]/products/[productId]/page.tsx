// [PRD-004, REV-001, QNA-001] 상품 상세 (리뷰, Q&A 포함)
export default async function ConsumerProductDetailPage({
  params,
}: {
  params: Promise<{ storeDomain: string; productId: string }>;
}) {
  const { storeDomain, productId } = await params;

  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">상품 #{productId}</h1>
      <p className="text-sm text-muted-foreground">
        TODO (Phase 5): ProductGallery · 옵션 선택 · 좋아요/찜 · ReviewSection · QnASection
        ({storeDomain})
      </p>
    </div>
  );
}
