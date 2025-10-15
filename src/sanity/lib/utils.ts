const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/;

export const decodeAssetId = (id: string) => {
  const match = pattern.exec(id);
  if (!match) {
    throw new Error(`Invalid image asset id: ${id}`);
  }
  const [, assetId, dimensions, format] = match;
  const [width, height] = dimensions.split("x").map((v) => parseInt(v, 10));

  return {
    assetId,
    dimensions: { width, height },
    format,
  };
};
