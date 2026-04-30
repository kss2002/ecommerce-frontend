// [SEL-ORD-002] 주문 상세 및 송장 입력
export default async function SellerOrderDetailPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;

  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">주문 상세 #{orderId}</h1>
      <p className="text-sm text-muted-foreground">
        TODO (Phase 6): 주문 상세 정보 · 송장번호 입력 폼
      </p>
    </div>
  );
}
