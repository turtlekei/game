// 收支規則：廚餘清潔費、每天的淨利
// 對應規則書：「收支與廚餘清潔費」
// 驗收：npm run check 的「收支規則」

import { WASTE_FEE } from '../config.js';

// 輸入：當天所有菜報廢份數的合計
// 回傳：清潔費（元）
export function wasteFee(wasteTotal) {
  const { freeUpTo, perUnit, bigThreshold, bigFee } = WASTE_FEE;
  if (wasteTotal <= freeUpTo) return 0;
  let fee = (wasteTotal - freeUpTo) * perUnit;
  if (wasteTotal > bigThreshold) fee += bigFee;
  return fee;
}

// 輸入：營業收入、備貨成本、宣傳費、廚餘清潔費
// 回傳：當天淨利（元，不含任務獎金）
export function dailyProfit({ revenue, stockCost, promoCost, wasteFee }) {
  return revenue - stockCost - promoCost - wasteFee;
}
