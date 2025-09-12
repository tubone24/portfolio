import Typography from "typography";
import githubTheme from "typography-theme-github";

// 互換のため Typography インスタンスもエクスポート
const typography = new Typography(githubTheme);

// デフォルトはテーマオブジェクトをエクスポート（ブラウザ/SSR注入で使用）
export default githubTheme;
export { typography };
