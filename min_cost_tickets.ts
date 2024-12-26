function mincostTickets(days: number[], costs: number[]): number {
  const travelDays = new Set(days);
  const lastDay = days[days.length - 1];
  const dp: number[] = new Array(lastDay + 1).fill(0);

  for (let i = 1; i <= lastDay; i++) {
    if (!travelDays.has(i)) {
      dp[i] = dp[i - 1];
    } else {
      dp[i] = Math.min(
        dp[i - 1] + costs[0],
        dp[Math.max(0, i - 7)] + costs[1],
        dp[Math.max(0, i - 30)] + costs[2]
      );
    }
  }

  return dp[lastDay];
}

describe("983. Minimum Cost For Tickets", () => {
  it("Basic", () => {
    expect(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15])).toStrictEqual(11);
  });
});
