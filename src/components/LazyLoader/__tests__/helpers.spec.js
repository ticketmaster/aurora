import {
  resize,
  createGetSrcByDensity,
  getSrcSetByDensity,
  getSrcAttr,
  getSrcVariantByAttr,
  getLowDefSrc,
  getTargetDensity
} from "../helpers";
import {
  DEFAULT_TARGET_DENSITY,
  DEFAULT_DEVICE_PIXEL_RATIOS,
  PLACEHOLDER_IMAGE
} from "../constants";

const mockSrc = "https://ticketmaster.com/img.jpg";
const mockParams = {
  width: 100,
  height: 100
};

const refWithSrcSet = {
  srcset: ""
};

const refWithSrc = {
  src: ""
};

const resizeFn = jest.fn();

afterEach(() => {
  resizeFn.mockClear();
});

describe("resize", () => {
  it("should return a URL with valid width and height params appended", () => {
    const src = "https://ticketmaster.com/assets/test.jpg";

    const url = resize({ src, ...mockParams });
    expect(url).toMatchSnapshot();
  });

  it("should return a URL with a valid width and an invalid height param appended", () => {
    const src = "https://ticketmaster.com/assets/test.jpg";
    const params = {
      width: 100
    };

    const url = resize({ src, ...params });
    expect(url).toMatchSnapshot();
  });

  it("should return a URL with an invalid width and a valid height param appended", () => {
    const src = "https://ticketmaster.com/assets/test.jpg";
    const params = {
      height: 100
    };

    const url = resize({ src, ...params });
    expect(url).toMatchSnapshot();
  });

  it("should return src when src does not contain a host", () => {
    const src = "/assets/test.jpg";

    expect(resize({ src })).toMatchSnapshot();
  });

  it("should return src if an error occurs", () => {
    const src = null;

    expect(resize({ src })).toMatchSnapshot();
  });
});

describe("createGetSrcByDensity", () => {
  it("should return a getSrcByDensity function", () => {
    expect(
      createGetSrcByDensity({
        src: mockSrc,
        ...mockParams,
        resizeFn
      }).constructor
    ).toEqual(Function);
  });

  it("should call resizeFn with the correct arguments when the returned getSrcByDensity function is invoked with valid width and height arguments", () => {
    createGetSrcByDensity({
      src: mockSrc,
      ...mockParams,
      resizeFn
    })(3);

    expect(resizeFn).toHaveBeenCalledWith({
      src: mockSrc,
      width: 300,
      height: 300
    });
  });

  it("should call resizeFn with the correct arguments when the returned getSrcByDensity function is invoked with a valid width and an invalid height argument", () => {
    createGetSrcByDensity({
      src: mockSrc,
      width: 100,
      height: null,
      resizeFn
    })(1);

    expect(resizeFn).toHaveBeenCalledWith({
      src: mockSrc,
      width: 100,
      height: null
    });
  });

  it("should call resizeFn with the correct arguments when the returned getSrcByDensity function is invoked with invalid width and a valid height argument", () => {
    createGetSrcByDensity({
      src: mockSrc,
      width: null,
      height: 100,
      resizeFn
    })(2);

    expect(resizeFn).toHaveBeenCalledWith({
      src: mockSrc,
      width: null,
      height: 200
    });
  });

  it("should call resizeFn with the correct arguments when the returned getSrcByDensity function is invoked with invalid width and height arguments", () => {
    createGetSrcByDensity({
      src: mockSrc,
      width: null,
      height: null,
      resizeFn
    })(1);

    expect(resizeFn).toHaveBeenCalledWith({
      src: mockSrc,
      width: null,
      height: null
    });
  });
});

describe("getSrcSetByDensity", () => {
  const mockGetSrcByDensity = jest.fn(() => mockSrc);

  afterEach(() => {
    mockGetSrcByDensity.mockClear();
  });

  it("should return srcset", () => {
    const srcset = getSrcSetByDensity(
      refWithSrcSet,
      DEFAULT_DEVICE_PIXEL_RATIOS,
      mockGetSrcByDensity
    );

    expect(mockGetSrcByDensity).toHaveBeenCalledTimes(5);
    expect(srcset).toEqual(
      `${mockSrc} 1x, ${mockSrc} 2x, ${mockSrc} 3x, ${mockSrc} 4x, ${mockSrc} 5x`
    );
  });
});

describe("getTargetDensity", () => {
  it("should return maxDevicePixelRatio if window.devicePixelRatio is greater than maxDevicePixelRatio", () => {
    Object.defineProperty(global.window, "devicePixelRatio", {
      writable: true,
      value: 6
    });

    expect(
      getTargetDensity(DEFAULT_TARGET_DENSITY, DEFAULT_DEVICE_PIXEL_RATIOS)
    ).toEqual(
      DEFAULT_DEVICE_PIXEL_RATIOS[DEFAULT_DEVICE_PIXEL_RATIOS.length - 1]
    );
  });

  it("should return a rounded ratio if window.devicePixelRatio is less than maxDevicePixelRatio", () => {
    Object.defineProperty(global.window, "devicePixelRatio", {
      writable: true,
      value: 2.4
    });

    expect(
      getTargetDensity(DEFAULT_TARGET_DENSITY, DEFAULT_DEVICE_PIXEL_RATIOS)
    ).toEqual(2);
  });

  it("should return defaultTargetDensity if window.devicePixelRatio is undefined", () => {
    Object.defineProperty(global.window, "devicePixelRatio", {
      writable: true,
      value: undefined
    });

    expect(
      getTargetDensity(DEFAULT_TARGET_DENSITY, DEFAULT_DEVICE_PIXEL_RATIOS)
    ).toEqual(DEFAULT_TARGET_DENSITY);
  });
});

describe("getSrcAttr", () => {
  it("should return srcset when supported by the element and browser", () => {
    expect(getSrcAttr(refWithSrcSet)).toEqual("srcset");
  });

  it("should return src when supported by the element", () => {
    expect(getSrcAttr(refWithSrc)).toEqual("src");
  });

  it("should return backgroundImage by default", () => {
    expect(getSrcAttr({})).toEqual("backgroundImage");
  });
});

describe("getSrcVariantByAttr", () => {
  const mockGetSrcByDensity = jest.fn(() => mockSrc);

  it("should return the evaluation of getSrcSetByDensity when srcAttr equals srcset", () => {
    expect(
      getSrcVariantByAttr(
        refWithSrcSet,
        "srcset",
        DEFAULT_DEVICE_PIXEL_RATIOS,
        DEFAULT_TARGET_DENSITY,
        mockGetSrcByDensity
      )
    ).toEqual(
      `${mockSrc} 1x, ${mockSrc} 2x, ${mockSrc} 3x, ${mockSrc} 4x, ${mockSrc} 5x`
    );
  });

  it("should return the evaluation of getSrcByDensity when srcAttr equals src", () => {
    expect(
      getSrcVariantByAttr(
        refWithSrc,
        "src",
        DEFAULT_DEVICE_PIXEL_RATIOS,
        DEFAULT_TARGET_DENSITY,
        mockGetSrcByDensity
      )
    ).toEqual(mockSrc);
  });

  it("should return the evaluation of getSrcByDensity when srcAttr equals backgroundImage", () => {
    expect(
      getSrcVariantByAttr(
        {},
        "backgroundImage",
        DEFAULT_DEVICE_PIXEL_RATIOS,
        DEFAULT_TARGET_DENSITY,
        mockGetSrcByDensity
      )
    ).toEqual(mockSrc);
  });
});

describe("getLowDefSrc", () => {
  it(`should return src when src equals ${PLACEHOLDER_IMAGE}`, () => {
    expect(getLowDefSrc({ src: PLACEHOLDER_IMAGE, resizeFn })).toEqual(
      PLACEHOLDER_IMAGE
    );
  });

  it(`should invoke resizeFn when src does not equal ${PLACEHOLDER_IMAGE}`, () => {
    getLowDefSrc({ src: mockSrc, ...mockParams, resizeFn });
    expect(resizeFn).toBeCalledWith({
      src: mockSrc,
      width: Math.round(mockParams.width / 10),
      height: Math.round(mockParams.height / 10)
    });
  });
});
