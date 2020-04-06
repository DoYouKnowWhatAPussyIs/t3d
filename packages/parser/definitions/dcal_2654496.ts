import { FixedArray, Float32, Filename, DynArray, Uint32, Uint16, Uint64, Uint8 } from "./types";

module.exports = [
  {
    chunkName: "dcal",
    name: "PackMapDecalsV1",
    version: 1,
    definitions: {
      PackMapDecalV1: {
        position: FixedArray(Float32, 3),
        extents: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        textureScale: FixedArray(Float32, 2),
        textureOffset: FixedArray(Float32, 2),
        materialFilename: Filename,
        textureFilenames: DynArray(Filename),
        flags: Uint32
      }
    },
    root: {
      decals: DynArray("PackMapDecalV1")
    }
  },
  {
    chunkName: "dcal",
    name: "PackMapDecalsV2",
    version: 2,
    definitions: {
      PackMapDecalV2: {
        position: FixedArray(Float32, 3),
        extents: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        textureScale: FixedArray(Float32, 2),
        textureOffset: FixedArray(Float32, 2),
        materialFilename: Filename,
        textureFilenames: DynArray(Filename),
        flags: Uint32,
        animTranslation: FixedArray(Float32, 2),
        animScaleRangeX: FixedArray(Float32, 2),
        animScaleRangeY: FixedArray(Float32, 2),
        animScaleSpeed: FixedArray(Float32, 2),
        animRotation: Float32
      }
    },
    root: {
      decals: DynArray("PackMapDecalV2")
    }
  },
  {
    chunkName: "dcal",
    name: "PackMapDecalsV3",
    version: 3,
    definitions: {
      PackMapDecalV3: {
        position: FixedArray(Float32, 3),
        extents: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        textureScaleUV0: FixedArray(Float32, 2),
        textureOffsetUV0: FixedArray(Float32, 2),
        textureScaleUV1: FixedArray(Float32, 2),
        textureOffsetUV1: FixedArray(Float32, 2),
        materialFilename: Filename,
        textureFilenames: DynArray(Filename),
        flags: Uint32,
        animTranslation: FixedArray(Float32, 2),
        animScaleRangeX: FixedArray(Float32, 2),
        animScaleRangeY: FixedArray(Float32, 2),
        animScaleSpeed: FixedArray(Float32, 2),
        animRotation: Float32,
        surfaceBias: Float32
      }
    },
    root: {
      decals: DynArray("PackMapDecalV3")
    }
  },
  {
    chunkName: "dcal",
    name: "PackMapDecalsV4",
    version: 4,
    definitions: {
      PackMapDecalV4: {
        position: FixedArray(Float32, 3),
        extents: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        textureScaleUV0: FixedArray(Float32, 2),
        textureOffsetUV0: FixedArray(Float32, 2),
        textureScaleUV1: FixedArray(Float32, 2),
        textureOffsetUV1: FixedArray(Float32, 2),
        materialFilename: Filename,
        textureFilenames: DynArray(Filename),
        flags: Uint32,
        animTranslation: FixedArray(Float32, 2),
        animScaleRangeX: FixedArray(Float32, 2),
        animScaleRangeY: FixedArray(Float32, 2),
        animScaleSpeed: FixedArray(Float32, 2),
        animRotation: Float32,
        surfaceBias: Float32,
        constantTokens: DynArray(Uint32),
        constantValues: DynArray(FixedArray(Float32, 4))
      }
    },
    root: {
      decals: DynArray("PackMapDecalV4")
    }
  },
  {
    chunkName: "dcal",
    name: "PackMapDecalsV5",
    version: 5,
    definitions: {
      PackMapDecalV5: {
        position: FixedArray(Float32, 3),
        extents: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        textureScaleUV0: FixedArray(Float32, 2),
        textureOffsetUV0: FixedArray(Float32, 2),
        textureScaleUV1: FixedArray(Float32, 2),
        textureOffsetUV1: FixedArray(Float32, 2),
        materialFilename: Filename,
        textureFilenames: DynArray(Filename),
        flags: Uint32,
        animTranslation: FixedArray(Float32, 2),
        animScaleRangeX: FixedArray(Float32, 2),
        animScaleRangeY: FixedArray(Float32, 2),
        animScaleSpeed: FixedArray(Float32, 2),
        animRotation: Float32,
        surfaceBias: Float32,
        constantTokens: DynArray(Uint32),
        constantValues: DynArray(FixedArray(Float32, 4)),
        vertices: DynArray("PackMapDecalVertexV4"),
        indices: DynArray(Uint16),
        propIds: DynArray(Uint64)
      },
      PackMapDecalVertexV4: {
        position: FixedArray(Float32, 3)
      }
    },
    root: {
      decals: DynArray("PackMapDecalV5")
    }
  },
  {
    chunkName: "dcal",
    name: "PackMapDecalsV6",
    version: 6,
    definitions: {
      PackMapDecalV6: {
        position: FixedArray(Float32, 3),
        extents: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        textureScaleUV0: FixedArray(Float32, 2),
        textureOffsetUV0: FixedArray(Float32, 2),
        textureScaleUV1: FixedArray(Float32, 2),
        textureOffsetUV1: FixedArray(Float32, 2),
        materialFilename: Filename,
        textureFilenames: DynArray(Filename),
        flags: Uint32,
        animTranslation: FixedArray(Float32, 2),
        animScaleRangeX: FixedArray(Float32, 2),
        animScaleRangeY: FixedArray(Float32, 2),
        animScaleSpeed: FixedArray(Float32, 2),
        animRotation: Float32,
        surfaceBias: Float32,
        constantTokens: DynArray(Uint32),
        constantValues: DynArray(FixedArray(Float32, 4)),
        vertices: DynArray("PackMapDecalVertexV5"),
        indices: DynArray(Uint16),
        propIds: DynArray(Uint64),
        projection: Uint8
      },
      PackMapDecalVertexV5: {
        position: FixedArray(Float32, 3)
      }
    },
    root: {
      decals: DynArray("PackMapDecalV6")
    }
  },
  {
    chunkName: "dcal",
    name: "PackMapDecalsV7",
    version: 7,
    definitions: {
      PackMapDecalV7: {
        position: FixedArray(Float32, 3),
        extents: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        textureScaleUV0: FixedArray(Float32, 2),
        textureOffsetUV0: FixedArray(Float32, 2),
        textureScaleUV1: FixedArray(Float32, 2),
        textureOffsetUV1: FixedArray(Float32, 2),
        materialFilename: Filename,
        textureFilenames: DynArray(Filename),
        flags: Uint32,
        animTranslation: FixedArray(Float32, 2),
        animScaleRangeX: FixedArray(Float32, 2),
        animScaleRangeY: FixedArray(Float32, 2),
        animScaleSpeed: FixedArray(Float32, 2),
        animRotation: Float32,
        surfaceBias: Float32,
        constantTokens: DynArray(Uint32),
        constantValues: DynArray(FixedArray(Float32, 4)),
        vertices: DynArray("PackMapDecalVertexV6"),
        indices: DynArray(Uint16),
        propIds: DynArray(Uint64),
        projection: Uint8,
        id: Uint64
      },
      PackMapDecalVertexV6: {
        position: FixedArray(Float32, 3)
      }
    },
    root: {
      decals: DynArray("PackMapDecalV7")
    }
  },
  {
    chunkName: "dcal",
    name: "PackMapDecalsV8",
    version: 8,
    definitions: {
      PackMapDecalV8: {
        position: FixedArray(Float32, 3),
        extents: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        textureScaleUV0: FixedArray(Float32, 2),
        textureOffsetUV0: FixedArray(Float32, 2),
        textureScaleUV1: FixedArray(Float32, 2),
        textureOffsetUV1: FixedArray(Float32, 2),
        materialFilename: Filename,
        textureFilenames: DynArray(Filename),
        flags: Uint32,
        animTranslation: FixedArray(Float32, 2),
        animScaleRangeX: FixedArray(Float32, 2),
        animScaleRangeY: FixedArray(Float32, 2),
        animScaleSpeed: FixedArray(Float32, 2),
        animRotation: Float32,
        surfaceBias: Float32,
        constantTokens: DynArray(Uint32),
        constantValues: DynArray(FixedArray(Float32, 4)),
        vertices: DynArray("PackMapDecalVertexV7"),
        indices: DynArray(Uint16),
        propIds: DynArray(Uint64),
        projection: Uint8,
        surfaceId: Uint64,
        id: Uint64
      },
      PackMapDecalVertexV7: {
        position: FixedArray(Float32, 3)
      }
    },
    root: {
      decals: DynArray("PackMapDecalV8")
    }
  },
  {
    chunkName: "dcal",
    name: "PackMapDecalsV9",
    version: 9,
    definitions: {
      PackMapDecalV9: {
        position: FixedArray(Float32, 3),
        extents: FixedArray(Float32, 3),
        rotation: FixedArray(Float32, 3),
        textureScaleUV0: FixedArray(Float32, 2),
        textureOffsetUV0: FixedArray(Float32, 2),
        textureScaleUV1: FixedArray(Float32, 2),
        textureOffsetUV1: FixedArray(Float32, 2),
        materialFilename: Filename,
        textureFilenames: DynArray(Filename),
        flags: Uint32,
        animTranslation: FixedArray(Float32, 2),
        animScaleRangeX: FixedArray(Float32, 2),
        animScaleRangeY: FixedArray(Float32, 2),
        animScaleSpeed: FixedArray(Float32, 2),
        animRotation: Float32,
        surfaceBias: Float32,
        constantTokens: DynArray(Uint32),
        constantValues: DynArray(FixedArray(Float32, 4)),
        vertices: DynArray("PackMapDecalVertexV8"),
        indices: DynArray(Uint16),
        propIds: DynArray(Uint64),
        projection: Uint8,
        surfaceId: Uint64,
        id: Uint64
      },
      PackMapDecalVertexV8: {
        position: FixedArray(Float32, 3),
        normal: FixedArray(Float32, 3),
        tangent: FixedArray(Float32, 3),
        bitangent: FixedArray(Float32, 3)
      }
    },
    root: {
      decals: DynArray("PackMapDecalV9")
    }
  }
]