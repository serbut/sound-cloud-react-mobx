export default function overscanIndicesGetter({
  cellCount,
  overscanCellsCount,
  startIndex,
  stopIndex,
}: {
  cellCount: number;
  overscanCellsCount: number;
  startIndex: number;
  stopIndex: number;
}) {
  return {
    overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
    overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount),
  };
}
