export default function handler(req, res) {
  // 已知过期时间
  const expiryDate = new Date("2026-12-27");
  const now = new Date();
  const daysUntilExpiry = Math.floor((expiryDate - now) / (1000 * 60 * 60 * 24));

  res.status(200).json({
    domain: "mukuidm.dpdns.org",
    expiryDate: "2026-12-27",
    daysUntilExpiry: daysUntilExpiry
  });
}
