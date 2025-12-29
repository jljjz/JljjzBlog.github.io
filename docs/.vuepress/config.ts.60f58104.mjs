// docs/.vuepress/config.ts
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { plumeTheme } from "vuepress-theme-plume";
var config_default = defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Jljjz WebSite",
  description: "",
  head: [
    // 配置站点图标
    ["link", { rel: "icon", type: "image/png", href: "https://theme-plume.vuejs.press/favicon-32x32.png" }]
  ],
  bundler: viteBundler(),
  shouldPrefetch: false,
  // 站点较大，页面数量较多时，不建议启用
  theme: plumeTheme({
    /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
    // hostname: 'https://your_site_url',
    /* 文档仓库配置，用于 editLink */
    // docsRepo: '',
    // docsDir: 'docs',
    // docsBranch: '',
    /* 页内信息 */
    // editLink: true,
    // lastUpdated: true,
    // contributors: true,
    // changelog: false,
    /**
     * 编译缓存，加快编译速度
     * @see https://theme-plume.vuejs.press/config/theme/#cache
     */
    cache: "filesystem",
    /**
     * 为 markdown 文件自动添加 frontmatter 配置
     * @see https://theme-plume.vuejs.press/config/theme/#autofrontmatter
     */
    // autoFrontmatter: {
    //   permalink: true,  // 是否生成永久链接
    //   createTime: true, // 是否生成创建时间
    //   title: true,      // 是否生成标题
    // },
    /* 本地搜索, 默认启用 */
    search: { provider: "local" }
    /**
     * Algolia DocSearch
     * 启用此搜索需要将 本地搜索 search 设置为 false
     * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
     */
    // search: {
    //   provider: 'algolia',
    //   appId: '',
    //   apiKey: '',
    //   indices: [''],
    // },
    /**
     * Shiki 代码高亮
     * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
     */
    // codeHighlighter: {
    //   twoslash: true, // 启用 twoslash
    //   whitespace: true, // 启用 空格/Tab 高亮
    //   lineNumbers: true, // 启用行号
    // },
    /* 文章字数统计、阅读时间，设置为 false 则禁用 */
    // readingTime: true,
    /**
     * markdown
     * @see https://theme-plume.vuejs.press/config/markdown/
     */
    // markdown: {
    //   abbr: true,         // 启用 abbr 语法  *[label]: content
    //   annotation: true,   // 启用 annotation 语法  [+label]: content
    //   pdf: true,          // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
    //   caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
    //   plot: true,         // 启用隐秘文本语法 !!xxxx!!
    //   bilibili: true,     // 启用嵌入 bilibili视频 语法 @[bilibili](bid)
    //   youtube: true,      // 启用嵌入 youtube视频 语法 @[youtube](video_id)
    //   artPlayer: true,    // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)
    //   audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)
    //   icon: { provider: 'iconify' },        // 启用内置图标语法  ::icon-name::
    //   table: true,        // 启用表格增强容器语法 ::: table
    //   codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)
    //   replit: true,       // 启用嵌入 replit 语法 @[replit](user/repl-name)
    //   codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
    //   jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
    //   npmTo: true,        // 启用 npm-to 容器  ::: npm-to
    //   demo: true,         // 启用 demo 容器  ::: demo
    //   collapse: true,     // 启用折叠容器  ::: collapse
    //   repl: {             // 启用 代码演示容器
    //     go: true,         // ::: go-repl
    //     rust: true,       // ::: rust-repl
    //     kotlin: true,     // ::: kotlin-repl
    //     python: true,     // ::: python-repl
    //   },
    //   math: {             // 启用数学公式
    //     type: 'katex',
    //   },
    //   chartjs: true,      // 启用 chart.js
    //   echarts: true,      // 启用 ECharts
    //   mermaid: true,      // 启用 mermaid
    //   flowchart: true,    // 启用 flowchart
    //   image: {
    //     figure: true,     // 启用 figure
    //     lazyload: true,   // 启用图片懒加载
    //     mark: true,       // 启用图片标记
    //     size: true,       // 启用图片大小
    //   },
    //   include: true,      // 在 Markdown 文件中导入其他 markdown 文件内容
    //   imageSize: 'local', // 启用 自动填充 图片宽高属性，避免页面抖动
    // },
    /**
     * 水印
     * @see https://theme-plume.vuejs.press/guide/features/watermark/
     */
    // watermark: true,
    /**
     * 评论 comments
     * @see https://theme-plume.vuejs.press/guide/features/comments/
     */
    // comment: {
    //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
    //   comment: true,
    //   repo: '',
    //   repoId: '',
    //   category: '',
    //   categoryId: '',
    //   mapping: 'pathname',
    //   reactionsEnabled: true,
    //   inputPosition: 'top',
    // },
    /**
     * 资源链接替换
     * @see https://theme-plume.vuejs.press/guide/features/replace-assets/
     */
    // replaceAssets: 'https://cdn.example.com',
    /**
     * 加密功能
     * @see https://theme-plume.vuejs.press/guide/features/encryption/
     */
    // encrypt: {},
    /**
     * 启用 llmstxt 插件，用于为大语言模型提供更友好的内容
     * @see https://theme-plume.vuejs.press/guide/features/llmstxt/
     */
    // llmstxt: {
    //   locale: '/',    // 默认仅为主语言生成 llms 友好内容
    // }
  })
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTovUGVyc29uQmxvZ0dpdGh1Yi9KbGpqekJsb2cuZ2l0aHViLmlvL2RvY3MvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxQZXJzb25CbG9nR2l0aHViXFxcXEpsamp6QmxvZy5naXRodWIuaW9cXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9QZXJzb25CbG9nR2l0aHViL0psamp6QmxvZy5naXRodWIuaW8vZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzXCI7LyoqXG4gKiBcdTY3RTVcdTc3MEJcdTRFRTVcdTRFMEJcdTY1ODdcdTY4NjNcdTRFODZcdTg5RTNcdTRFM0JcdTk4OThcdTkxNERcdTdGNkVcbiAqIC0gQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9pbnRyby8gXHU5MTREXHU3RjZFXHU4QkY0XHU2NjBFXG4gKiAtIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9jb25maWcvdGhlbWUvIFx1NEUzQlx1OTg5OFx1OTE0RFx1N0Y2RVx1OTg3OVxuICpcbiAqIFx1OEJGN1x1NkNFOFx1NjEwRlx1RkYwQ1x1NUJGOVx1NkI2NFx1NjU4N1x1NEVGNlx1NzY4NFx1NEZFRVx1NjUzOVx1OTBGRFx1NEYxQVx1OTFDRFx1NTQyRiB2dWVwcmVzcyBcdTY3MERcdTUyQTFcdTMwMDJcbiAqIFx1OTBFOFx1NTIwNlx1OTE0RFx1N0Y2RVx1OTg3OVx1NzY4NFx1NjZGNFx1NjVCMFx1NkNBMVx1NjcwOVx1NUZDNVx1ODk4MVx1OTFDRFx1NTQyRiB2dWVwcmVzcyBcdTY3MERcdTUyQTFcdUZGMENcdTVFRkFcdThCQUVcdThCRjdcdTU3MjggYC52dWVwcmVzcy9jb25maWcudHNgIFx1NjU4N1x1NEVGNlx1NEUyRFx1OTE0RFx1N0Y2RVxuICpcbiAqIFx1NzI3OVx1NTIyQlx1NzY4NFx1RkYwQ1x1OEJGN1x1NEUwRFx1ODk4MVx1NTcyOFx1NEUyNFx1NEUyQVx1OTE0RFx1N0Y2RVx1NjU4N1x1NEVGNlx1NEUyRFx1OTFDRFx1NTkwRFx1OTE0RFx1N0Y2RVx1NzZGOFx1NTQwQ1x1NzY4NFx1OTg3OVx1RkYwQ1x1NUY1M1x1NTI0RFx1NjU4N1x1NEVGNlx1NzY4NFx1OTE0RFx1N0Y2RVx1OTg3OVx1NEYxQVx1ODhBQlx1ODk4Nlx1NzZENlxuICovXG5cbmltcG9ydCB7IHZpdGVCdW5kbGVyIH0gZnJvbSAnQHZ1ZXByZXNzL2J1bmRsZXItdml0ZSdcbmltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tICd2dWVwcmVzcydcbmltcG9ydCB7IHBsdW1lVGhlbWUgfSBmcm9tICd2dWVwcmVzcy10aGVtZS1wbHVtZSdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XG4gIGJhc2U6ICcvJyxcbiAgbGFuZzogJ3poLUNOJyxcbiAgdGl0bGU6ICdKbGpqeiBXZWJTaXRlJyxcbiAgZGVzY3JpcHRpb246ICcnLFxuXG4gIGhlYWQ6IFtcbiAgICAvLyBcdTkxNERcdTdGNkVcdTdBRDlcdTcwQjlcdTU2RkVcdTY4MDdcbiAgICBbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCB0eXBlOiAnaW1hZ2UvcG5nJywgaHJlZjogJ2h0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvZmF2aWNvbi0zMngzMi5wbmcnIH1dLFxuICBdLFxuXG4gIGJ1bmRsZXI6IHZpdGVCdW5kbGVyKCksXG4gIHNob3VsZFByZWZldGNoOiBmYWxzZSwgLy8gXHU3QUQ5XHU3MEI5XHU4RjgzXHU1OTI3XHVGRjBDXHU5ODc1XHU5NzYyXHU2NTcwXHU5MUNGXHU4RjgzXHU1OTFBXHU2NUY2XHVGRjBDXHU0RTBEXHU1RUZBXHU4QkFFXHU1NDJGXHU3NTI4XG5cbiAgdGhlbWU6IHBsdW1lVGhlbWUoe1xuICAgIC8qIFx1NkRGQlx1NTJBMFx1NjBBOFx1NzY4NFx1OTBFOFx1N0Y3Mlx1NTdERlx1NTQwRCwgXHU2NzA5XHU1MkE5XHU0RThFIFNFTywgXHU3NTFGXHU2MjEwIHNpdGVtYXAgKi9cbiAgICAvLyBob3N0bmFtZTogJ2h0dHBzOi8veW91cl9zaXRlX3VybCcsXG5cbiAgICAvKiBcdTY1ODdcdTY4NjNcdTRFRDNcdTVFOTNcdTkxNERcdTdGNkVcdUZGMENcdTc1MjhcdTRFOEUgZWRpdExpbmsgKi9cbiAgICAvLyBkb2NzUmVwbzogJycsXG4gICAgLy8gZG9jc0RpcjogJ2RvY3MnLFxuICAgIC8vIGRvY3NCcmFuY2g6ICcnLFxuXG4gICAgLyogXHU5ODc1XHU1MTg1XHU0RkUxXHU2MDZGICovXG4gICAgLy8gZWRpdExpbms6IHRydWUsXG4gICAgLy8gbGFzdFVwZGF0ZWQ6IHRydWUsXG4gICAgLy8gY29udHJpYnV0b3JzOiB0cnVlLFxuICAgIC8vIGNoYW5nZWxvZzogZmFsc2UsXG5cbiAgICAvKipcbiAgICAgKiBcdTdGMTZcdThCRDFcdTdGMTNcdTVCNThcdUZGMENcdTUyQTBcdTVGRUJcdTdGMTZcdThCRDFcdTkwMUZcdTVFQTZcbiAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvY29uZmlnL3RoZW1lLyNjYWNoZVxuICAgICAqL1xuICAgIGNhY2hlOiAnZmlsZXN5c3RlbScsXG5cbiAgICAvKipcbiAgICAgKiBcdTRFM0EgbWFya2Rvd24gXHU2NTg3XHU0RUY2XHU4MUVBXHU1MkE4XHU2REZCXHU1MkEwIGZyb250bWF0dGVyIFx1OTE0RFx1N0Y2RVxuICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9jb25maWcvdGhlbWUvI2F1dG9mcm9udG1hdHRlclxuICAgICAqL1xuICAgIC8vIGF1dG9Gcm9udG1hdHRlcjoge1xuICAgIC8vICAgcGVybWFsaW5rOiB0cnVlLCAgLy8gXHU2NjJGXHU1NDI2XHU3NTFGXHU2MjEwXHU2QzM4XHU0RTQ1XHU5NEZFXHU2M0E1XG4gICAgLy8gICBjcmVhdGVUaW1lOiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTc1MUZcdTYyMTBcdTUyMUJcdTVFRkFcdTY1RjZcdTk1RjRcbiAgICAvLyAgIHRpdGxlOiB0cnVlLCAgICAgIC8vIFx1NjYyRlx1NTQyNlx1NzUxRlx1NjIxMFx1NjgwN1x1OTg5OFxuICAgIC8vIH0sXG5cbiAgICAvKiBcdTY3MkNcdTU3MzBcdTY0MUNcdTdEMjIsIFx1OUVEOFx1OEJBNFx1NTQyRlx1NzUyOCAqL1xuICAgIHNlYXJjaDogeyBwcm92aWRlcjogJ2xvY2FsJyB9LFxuXG4gICAgLyoqXG4gICAgICogQWxnb2xpYSBEb2NTZWFyY2hcbiAgICAgKiBcdTU0MkZcdTc1MjhcdTZCNjRcdTY0MUNcdTdEMjJcdTk3MDBcdTg5ODFcdTVDMDYgXHU2NzJDXHU1NzMwXHU2NDFDXHU3RDIyIHNlYXJjaCBcdThCQkVcdTdGNkVcdTRFM0EgZmFsc2VcbiAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvY29uZmlnL3BsdWdpbnMvc2VhcmNoLyNhbGdvbGlhLWRvY3NlYXJjaFxuICAgICAqL1xuICAgIC8vIHNlYXJjaDoge1xuICAgIC8vICAgcHJvdmlkZXI6ICdhbGdvbGlhJyxcbiAgICAvLyAgIGFwcElkOiAnJyxcbiAgICAvLyAgIGFwaUtleTogJycsXG4gICAgLy8gICBpbmRpY2VzOiBbJyddLFxuICAgIC8vIH0sXG5cbiAgICAvKipcbiAgICAgKiBTaGlraSBcdTRFRTNcdTc4MDFcdTlBRDhcdTRFQUVcbiAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvY29uZmlnL3BsdWdpbnMvY29kZS1oaWdobGlnaHQvXG4gICAgICovXG4gICAgLy8gY29kZUhpZ2hsaWdodGVyOiB7XG4gICAgLy8gICB0d29zbGFzaDogdHJ1ZSwgLy8gXHU1NDJGXHU3NTI4IHR3b3NsYXNoXG4gICAgLy8gICB3aGl0ZXNwYWNlOiB0cnVlLCAvLyBcdTU0MkZcdTc1MjggXHU3QTdBXHU2ODNDL1RhYiBcdTlBRDhcdTRFQUVcbiAgICAvLyAgIGxpbmVOdW1iZXJzOiB0cnVlLCAvLyBcdTU0MkZcdTc1MjhcdTg4NENcdTUzRjdcbiAgICAvLyB9LFxuXG4gICAgLyogXHU2NTg3XHU3QUUwXHU1QjU3XHU2NTcwXHU3RURGXHU4QkExXHUzMDAxXHU5NjA1XHU4QkZCXHU2NUY2XHU5NUY0XHVGRjBDXHU4QkJFXHU3RjZFXHU0RTNBIGZhbHNlIFx1NTIxOVx1Nzk4MVx1NzUyOCAqL1xuICAgIC8vIHJlYWRpbmdUaW1lOiB0cnVlLFxuXG4gICAgLyoqXG4gICAgICogbWFya2Rvd25cbiAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvY29uZmlnL21hcmtkb3duL1xuICAgICAqL1xuICAgIC8vIG1hcmtkb3duOiB7XG4gICAgLy8gICBhYmJyOiB0cnVlLCAgICAgICAgIC8vIFx1NTQyRlx1NzUyOCBhYmJyIFx1OEJFRFx1NkNENSAgKltsYWJlbF06IGNvbnRlbnRcbiAgICAvLyAgIGFubm90YXRpb246IHRydWUsICAgLy8gXHU1NDJGXHU3NTI4IGFubm90YXRpb24gXHU4QkVEXHU2Q0Q1ICBbK2xhYmVsXTogY29udGVudFxuICAgIC8vICAgcGRmOiB0cnVlLCAgICAgICAgICAvLyBcdTU0MkZcdTc1MjggUERGIFx1NUQ0Q1x1NTE2NSBAW3BkZl0oL3h4eC5wZGYpXG4gICAgLy8gICBjYW5pdXNlOiB0cnVlLCAgICAgIC8vIFx1NTQyRlx1NzUyOCBjYW5pdXNlIFx1OEJFRFx1NkNENSAgQFtjYW5pdXNlXShmZWF0dXJlX25hbWUpXG4gICAgLy8gICBwbG90OiB0cnVlLCAgICAgICAgIC8vIFx1NTQyRlx1NzUyOFx1OTY5MFx1NzlEOFx1NjU4N1x1NjcyQ1x1OEJFRFx1NkNENSAhIXh4eHghIVxuICAgIC8vICAgYmlsaWJpbGk6IHRydWUsICAgICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjUgYmlsaWJpbGlcdTg5QzZcdTk4OTEgXHU4QkVEXHU2Q0Q1IEBbYmlsaWJpbGldKGJpZClcbiAgICAvLyAgIHlvdXR1YmU6IHRydWUsICAgICAgLy8gXHU1NDJGXHU3NTI4XHU1RDRDXHU1MTY1IHlvdXR1YmVcdTg5QzZcdTk4OTEgXHU4QkVEXHU2Q0Q1IEBbeW91dHViZV0odmlkZW9faWQpXG4gICAgLy8gICBhcnRQbGF5ZXI6IHRydWUsICAgIC8vIFx1NTQyRlx1NzUyOFx1NUQ0Q1x1NTE2NSBhcnRQbGF5ZXIgXHU2NzJDXHU1NzMwXHU4OUM2XHU5ODkxIFx1OEJFRFx1NkNENSBAW2FydFBsYXllcl0odXJsKVxuICAgIC8vICAgYXVkaW9SZWFkZXI6IHRydWUsICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjVcdTk3RjNcdTk4OTFcdTY3MTdcdThCRkJcdTUyOUZcdTgwRkQgXHU4QkVEXHU2Q0Q1IEBbYXVkaW9SZWFkZXJdKHVybClcbiAgICAvLyAgIGljb246IHsgcHJvdmlkZXI6ICdpY29uaWZ5JyB9LCAgICAgICAgLy8gXHU1NDJGXHU3NTI4XHU1MTg1XHU3RjZFXHU1NkZFXHU2ODA3XHU4QkVEXHU2Q0Q1ICA6Omljb24tbmFtZTo6XG4gICAgLy8gICB0YWJsZTogdHJ1ZSwgICAgICAgIC8vIFx1NTQyRlx1NzUyOFx1ODg2OFx1NjgzQ1x1NTg5RVx1NUYzQVx1NUJCOVx1NTY2OFx1OEJFRFx1NkNENSA6OjogdGFibGVcbiAgICAvLyAgIGNvZGVwZW46IHRydWUsICAgICAgLy8gXHU1NDJGXHU3NTI4XHU1RDRDXHU1MTY1IGNvZGVwZW4gXHU4QkVEXHU2Q0Q1IEBbY29kZXBlbl0odXNlci9zbGFzaClcbiAgICAvLyAgIHJlcGxpdDogdHJ1ZSwgICAgICAgLy8gXHU1NDJGXHU3NTI4XHU1RDRDXHU1MTY1IHJlcGxpdCBcdThCRURcdTZDRDUgQFtyZXBsaXRdKHVzZXIvcmVwbC1uYW1lKVxuICAgIC8vICAgY29kZVNhbmRib3g6IHRydWUsICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjUgY29kZVNhbmRib3ggXHU4QkVEXHU2Q0Q1IEBbY29kZVNhbmRib3hdKGlkKVxuICAgIC8vICAganNmaWRkbGU6IHRydWUsICAgICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjUganNmaWRkbGUgXHU4QkVEXHU2Q0Q1IEBbanNmaWRkbGVdKHVzZXIvaWQpXG4gICAgLy8gICBucG1UbzogdHJ1ZSwgICAgICAgIC8vIFx1NTQyRlx1NzUyOCBucG0tdG8gXHU1QkI5XHU1NjY4ICA6OjogbnBtLXRvXG4gICAgLy8gICBkZW1vOiB0cnVlLCAgICAgICAgIC8vIFx1NTQyRlx1NzUyOCBkZW1vIFx1NUJCOVx1NTY2OCAgOjo6IGRlbW9cbiAgICAvLyAgIGNvbGxhcHNlOiB0cnVlLCAgICAgLy8gXHU1NDJGXHU3NTI4XHU2Mjk4XHU1M0UwXHU1QkI5XHU1NjY4ICA6OjogY29sbGFwc2VcbiAgICAvLyAgIHJlcGw6IHsgICAgICAgICAgICAgLy8gXHU1NDJGXHU3NTI4IFx1NEVFM1x1NzgwMVx1NkYxNFx1NzkzQVx1NUJCOVx1NTY2OFxuICAgIC8vICAgICBnbzogdHJ1ZSwgICAgICAgICAvLyA6OjogZ28tcmVwbFxuICAgIC8vICAgICBydXN0OiB0cnVlLCAgICAgICAvLyA6OjogcnVzdC1yZXBsXG4gICAgLy8gICAgIGtvdGxpbjogdHJ1ZSwgICAgIC8vIDo6OiBrb3RsaW4tcmVwbFxuICAgIC8vICAgICBweXRob246IHRydWUsICAgICAvLyA6OjogcHl0aG9uLXJlcGxcbiAgICAvLyAgIH0sXG4gICAgLy8gICBtYXRoOiB7ICAgICAgICAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NjU3MFx1NUI2Nlx1NTE2Q1x1NUYwRlxuICAgIC8vICAgICB0eXBlOiAna2F0ZXgnLFxuICAgIC8vICAgfSxcbiAgICAvLyAgIGNoYXJ0anM6IHRydWUsICAgICAgLy8gXHU1NDJGXHU3NTI4IGNoYXJ0LmpzXG4gICAgLy8gICBlY2hhcnRzOiB0cnVlLCAgICAgIC8vIFx1NTQyRlx1NzUyOCBFQ2hhcnRzXG4gICAgLy8gICBtZXJtYWlkOiB0cnVlLCAgICAgIC8vIFx1NTQyRlx1NzUyOCBtZXJtYWlkXG4gICAgLy8gICBmbG93Y2hhcnQ6IHRydWUsICAgIC8vIFx1NTQyRlx1NzUyOCBmbG93Y2hhcnRcbiAgICAvLyAgIGltYWdlOiB7XG4gICAgLy8gICAgIGZpZ3VyZTogdHJ1ZSwgICAgIC8vIFx1NTQyRlx1NzUyOCBmaWd1cmVcbiAgICAvLyAgICAgbGF6eWxvYWQ6IHRydWUsICAgLy8gXHU1NDJGXHU3NTI4XHU1NkZFXHU3MjQ3XHU2MUQyXHU1MkEwXHU4RjdEXG4gICAgLy8gICAgIG1hcms6IHRydWUsICAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NTZGRVx1NzI0N1x1NjgwN1x1OEJCMFxuICAgIC8vICAgICBzaXplOiB0cnVlLCAgICAgICAvLyBcdTU0MkZcdTc1MjhcdTU2RkVcdTcyNDdcdTU5MjdcdTVDMEZcbiAgICAvLyAgIH0sXG4gICAgLy8gICBpbmNsdWRlOiB0cnVlLCAgICAgIC8vIFx1NTcyOCBNYXJrZG93biBcdTY1ODdcdTRFRjZcdTRFMkRcdTVCRkNcdTUxNjVcdTUxNzZcdTRFRDYgbWFya2Rvd24gXHU2NTg3XHU0RUY2XHU1MTg1XHU1QkI5XG4gICAgLy8gICBpbWFnZVNpemU6ICdsb2NhbCcsIC8vIFx1NTQyRlx1NzUyOCBcdTgxRUFcdTUyQThcdTU4NkJcdTUxNDUgXHU1NkZFXHU3MjQ3XHU1QkJEXHU5QUQ4XHU1QzVFXHU2MDI3XHVGRjBDXHU5MDdGXHU1MTREXHU5ODc1XHU5NzYyXHU2Mjk2XHU1MkE4XG4gICAgLy8gfSxcblxuICAgIC8qKlxuICAgICAqIFx1NkMzNFx1NTM3MFxuICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9ndWlkZS9mZWF0dXJlcy93YXRlcm1hcmsvXG4gICAgICovXG4gICAgLy8gd2F0ZXJtYXJrOiB0cnVlLFxuXG4gICAgLyoqXG4gICAgICogXHU4QkM0XHU4QkJBIGNvbW1lbnRzXG4gICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2d1aWRlL2ZlYXR1cmVzL2NvbW1lbnRzL1xuICAgICAqL1xuICAgIC8vIGNvbW1lbnQ6IHtcbiAgICAvLyAgIHByb3ZpZGVyOiAnJywgLy8gXCJBcnRhbGtcIiB8IFwiR2lzY3VzXCIgfCBcIlR3aWtvb1wiIHwgXCJXYWxpbmVcIlxuICAgIC8vICAgY29tbWVudDogdHJ1ZSxcbiAgICAvLyAgIHJlcG86ICcnLFxuICAgIC8vICAgcmVwb0lkOiAnJyxcbiAgICAvLyAgIGNhdGVnb3J5OiAnJyxcbiAgICAvLyAgIGNhdGVnb3J5SWQ6ICcnLFxuICAgIC8vICAgbWFwcGluZzogJ3BhdGhuYW1lJyxcbiAgICAvLyAgIHJlYWN0aW9uc0VuYWJsZWQ6IHRydWUsXG4gICAgLy8gICBpbnB1dFBvc2l0aW9uOiAndG9wJyxcbiAgICAvLyB9LFxuXG4gICAgLyoqXG4gICAgICogXHU4RDQ0XHU2RTkwXHU5NEZFXHU2M0E1XHU2NkZGXHU2MzYyXG4gICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2d1aWRlL2ZlYXR1cmVzL3JlcGxhY2UtYXNzZXRzL1xuICAgICAqL1xuICAgIC8vIHJlcGxhY2VBc3NldHM6ICdodHRwczovL2Nkbi5leGFtcGxlLmNvbScsXG5cbiAgICAvKipcbiAgICAgKiBcdTUyQTBcdTVCQzZcdTUyOUZcdTgwRkRcbiAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvZ3VpZGUvZmVhdHVyZXMvZW5jcnlwdGlvbi9cbiAgICAgKi9cbiAgICAvLyBlbmNyeXB0OiB7fSxcblxuICAgIC8qKlxuICAgICAqIFx1NTQyRlx1NzUyOCBsbG1zdHh0IFx1NjNEMlx1NEVGNlx1RkYwQ1x1NzUyOFx1NEU4RVx1NEUzQVx1NTkyN1x1OEJFRFx1OEEwMFx1NkEyMVx1NTc4Qlx1NjNEMFx1NEY5Qlx1NjZGNFx1NTNDQlx1NTk3RFx1NzY4NFx1NTE4NVx1NUJCOVxuICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9ndWlkZS9mZWF0dXJlcy9sbG1zdHh0L1xuICAgICAqL1xuICAgIC8vIGxsbXN0eHQ6IHtcbiAgICAvLyAgIGxvY2FsZTogJy8nLCAgICAvLyBcdTlFRDhcdThCQTRcdTRFQzVcdTRFM0FcdTRFM0JcdThCRURcdThBMDBcdTc1MUZcdTYyMTAgbGxtcyBcdTUzQ0JcdTU5N0RcdTUxODVcdTVCQjlcbiAgICAvLyB9XG4gIH0pLFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFXQSxTQUFTLG1CQUFtQjtBQUM1QixTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLGtCQUFrQjtBQUUzQixJQUFPLGlCQUFRLGlCQUFpQjtBQUFBLEVBQzlCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUViLE1BQU07QUFBQTtBQUFBLElBRUosQ0FBQyxRQUFRLEVBQUUsS0FBSyxRQUFRLE1BQU0sYUFBYSxNQUFNLG9EQUFvRCxDQUFDO0FBQUEsRUFDeEc7QUFBQSxFQUVBLFNBQVMsWUFBWTtBQUFBLEVBQ3JCLGdCQUFnQjtBQUFBO0FBQUEsRUFFaEIsT0FBTyxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFtQmhCLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYVAsUUFBUSxFQUFFLFVBQVUsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWtIOUIsQ0FBQztBQUNILENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
