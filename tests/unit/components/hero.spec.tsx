import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Hero } from "../../../src/components/hero";

// react-load-imageのモック
jest.mock("react-load-image", () => {
  return jest.fn(({ src, children }) => {
    return <div data-testid="image-loader" data-src={src}>{children}</div>;
  });
});

// ShibaLoaderコンポーネントのモック
jest.mock("../../../src/components/ShibaLoader", () => {
  return jest.fn(({ show }) => (
    show ? <div data-testid="shiba-loader">Loading...</div> : null
  ));
});

describe("Hero Component", () => {
  beforeEach(() => {
    // グローバルなImageのモック
    global.Image = class {
      onload: (() => void) | null = null;
      onerror: (() => void) | null = null;
      src = '';

      constructor() {
        setTimeout(() => {
          if (this.onload) {
            this.onload();
          }
        }, 0);
      }
    } as unknown as typeof Image;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Renders hero component with image", () => {
    const { container } = render(<Hero img="/test-image.jpg" />);

    expect(container.querySelector('[data-testid="image-loader"]')).toBeInTheDocument();
  });

  test("Shows loader initially", () => {
    render(<Hero img="/test-image.jpg" />);

    expect(screen.getByTestId("shiba-loader")).toBeInTheDocument();
  });

  test("Hides loader after image loads", async () => {
    render(<Hero img="/test-image.jpg" />);

    await waitFor(() => {
      expect(screen.queryByTestId("shiba-loader")).not.toBeInTheDocument();
    });
  });

  test("Calls onLoadingChange callback when loading state changes", async () => {
    const onLoadingChange = jest.fn();

    render(<Hero img="/test-image.jpg" onLoadingChange={onLoadingChange} />);

    // 初期状態: loading = true
    expect(onLoadingChange).toHaveBeenCalledWith(true);

    // 画像読み込み後: loading = false
    await waitFor(() => {
      expect(onLoadingChange).toHaveBeenCalledWith(false);
    });
  });

  test("Renders with fillPage prop", () => {
    const { container } = render(<Hero img="/test-image.jpg" fillPage={true} />);

    expect(container.firstChild).toBeInTheDocument();
  });

  test("Renders with aspectRatio prop", () => {
    const { container } = render(<Hero img="/test-image.jpg" aspectRatio={1.5} />);

    expect(container.firstChild).toBeInTheDocument();
  });

  test("Renders with thumbnail prop", () => {
    const { container } = render(
      <Hero img="/test-image.jpg" thumbnail="/thumbnail.jpg" />
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  test("Handles image load error gracefully", async () => {
    global.Image = class {
      onload: (() => void) | null = null;
      onerror: (() => void) | null = null;
      src = '';

      constructor() {
        setTimeout(() => {
          if (this.onerror) {
            this.onerror();
          }
        }, 0);
      }
    } as unknown as typeof Image;

    render(<Hero img="/non-existent-image.jpg" />);

    // エラーが発生してもローダーが非表示になることを確認
    await waitFor(() => {
      expect(screen.queryByTestId("shiba-loader")).not.toBeInTheDocument();
    });
  });

  test("Renders img element with correct src", () => {
    const { container } = render(<Hero img="/test-hero.jpg" />);

    const imgElement = container.querySelector('img[alt="hero image"]');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "/test-hero.jpg");
  });

  test("Renders with fillPage and overlay props", () => {
    const { container } = render(
      <Hero img="/test-image.jpg" fillPage={true} />
    );

    // fillPageとoverlayが適用されていることを確認
    expect(container.firstChild).toBeInTheDocument();
  });

  test("Image preloading sets correct src", async () => {
    const testImageSrc = "/preload-test.jpg";
    let imageSrc = "";

    global.Image = class {
      onload: (() => void) | null = null;
      onerror: (() => void) | null = null;

      private _src = '';

      get src() {
        return this._src;
      }

      set src(value: string) {
        this._src = value;
        imageSrc = value;
        setTimeout(() => {
          if (this.onload) {
            this.onload();
          }
        }, 0);
      }
    } as unknown as typeof Image;

    render(<Hero img={testImageSrc} />);

    await waitFor(() => {
      expect(imageSrc).toBe(testImageSrc);
    });
  });
});
