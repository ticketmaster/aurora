webpackJsonp([10],{1195:function(e,n,t){var s=t(0),o=t(65),a=t(15).PageRenderer;a.__esModule&&(a=a.default);var r=o({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(1220)}},componentWillMount:function(){},render:function(){return s.createElement(a,Object.assign({},this.props,{content:this.state.content}))}});r.__catalog_loader__=!0,e.exports=r},1220:function(e,n){e.exports='### Responsive and Static Images\n\nImage components with customizable, responsive aspect ratio or static sizing.\n\n### Props\n\n```table\nspan: 6\nrows:\n  - Prop: loader\n    Type: node\n    Default: null\n    Notes: Loader UI to display a skeletal state for the image\n  - Prop: src\n    Type: string\n    Default: \'\'\n    Notes: Path or URL to image\n  - Prop: alt\n    Type: string\n    Default: \'\'\n    Notes: Alt text for image\n  - Prop: height\n    Type: number\n    Default: 1\n    Notes: Measured in pixels\n  - Prop: width\n    Type: number\n    Default: 1\n    Notes: Measured in pixels\n  - Prop: imageRef\n    Type: ref\n    Default: "{ current: null }"\n    Notes: React ref to pass to underlying div\n  - Prop: children\n    Type: node\n    Default: null\n    Notes: ResponsiveImage only\n```\n\n### Image with loader prop\n\n```react\nresponsive: true\n---\n<ResponsiveImage loader={"Loading..."} />\n```\n\n### Responsive Image (16:9)\n\n```react\nresponsive: true\n---\n<ResponsiveImage\n    src="https://placekitten.com/g/826/465"\n    alt="Test Kitten"\n    height={465}\n    width={826}\n    loader={null}\n/>\n```\n\n### Responsive Image (1:1)\n\n```react\nresponsive: true\n---\n<ResponsiveImage\n    src="https://placekitten.com/g/400/400"\n    alt="Test Kitten"\n    height={400}\n    width={400}\n    loader={null}\n/>\n```\n\n### Static Image (16:9)\n\n```react\nresponsive: true\n---\n<StaticImage\n    src="https://placekitten.com/g/826/465"\n    alt="Test Kitten"\n    height={465}\n    width={826}\n    loader={null}\n/>\n```\n\n### Static Image (1:1)\n\n```react\nresponsive: true\n---\n<StaticImage\n    src="https://placekitten.com/g/400/400"\n    alt="Test Kitten"\n    height={400}\n    width={400}\n    loader={null}\n/>\n```\n\n### Thumbnail Image\n\n### Props\n\n```table\nspan: 6\nrows:\n  - Prop: size\n    Type: Number\n    Notes: Required\n  - Prop: src\n    Type: String\n    Notes: Required\n  - Prop: alt\n    Type: String\n    Notes: Required\n```\n\n### ThumbnailCircleImage Image\n\n```react\n<ThumbnailCircleImage size={40} src="https://placekitten.com/g/512/288" alt="thumbnailCircleImage"/>\n```\n\n### LazyLoader\n\nThe LazyLoader component utilizes the LazyLoader Context to provide developers with a simplified means to progressively load UI.\n\nThis component supports lazily loading assets for img tags via srcset and src as well as div tags via style.backgroundImage.\n\n### Props\n\n```table\nspan: 6\nrows:\n  - Prop: src\n    Type: String\n    Default: \'\'\n    Notes: The asset\'s URI or path\n  - Prop: height\n    Type: Number\n    Default: \'\'\n    Notes: Required\n  - Prop: width\n    Type: Number\n    Default: \'\'\n    Notes: Required\n  - Prop: style\n    Type: Object\n    Default: \'{}\'\n    Notes: Optional\n  - Prop: tag\n    Type: string\n    Default: img\n    Notes: Type of the visible element used to display the lazy-loaded asset. If the tag is not an `img`, then the user must pass the imageRef prop to an img element and the backgroundRef to the element referenced by this prop.\n  - Prop: resizeFn\n    Type: Function({ src, height, width }) => String\n    Default: resize function\n    Notes: The default resize function appends computed width, height, fit, and auto query parameters depending on the image dimensions, the src\'s extension, and the user\'s device resolution.\n  - Prop: children\n    Type: Function({ src, style, imageRef, backgroundRef, load }) => Node\n    Default: \'\'\n    Notes: This function will be invoked with the  LazyLoaderProvider\'s state, which is provided to the LazyLoaderConsumer.\n```\n\n### Arguments passed to children\n\n```table\nspan: 6\nrows:\n  - Prop: src\n    Type: String\n    Notes: Initially, this argument will be a low res version of the src prop passed to the LazyLoader. Once the load argument is invoked with a value of true, a high res version of the src prop will be computed and assigned to the imageRef and/or backgroundRef. This high res src will be in the correct srcset, src, or backgroundImage format depending on the element type of the ref(s) and the user\'s browser.\n  - Prop: style\n    Type: Object\n    Notes: Prior to loading, this style argument will be composed of the style prop merged with blur styles. Once the load argument is invoked with a value of true, the filter style attribute will be removed from the imageRef and/or backgroundRef.\n  - Prop: imageRef\n    Type: Object (Ref)\n    Notes: This argument should be passed to the img tag that contains the asset to be lazy loaded.\n  - Prop: backgroundRef\n    Type: Object (Ref)\n    Notes: Only used when the type of the visible element used to display the lazy-loaded asset is not an `img`. This argument should be passed to the non-img tag that contains the asset to be lazy loaded.\n  - Prop: load\n    Type: Function\n    Notes: This argument should be invoked with a value of true when the imageRef is ready to be loaded. For example, you can use an IntersectionObserver to trigger this function once the imageRef enters the user\'s viewport.\n  - Prop: isLoaded\n    Type: Boolean\n    Notes: Distinguishes whether the asset is loaded.\n```\n\n### Lazy Responsive Image (1:1)\n\n```react\nresponsive: true\n---\n<LazyResponsiveImageExample\n    src="https://placekitten.com/g"\n    alt="Test Kitten"\n    height={400}\n    width={400}\n/>\n```\n'}});
//# sourceMappingURL=10.10c278c4.chunk.js.map