@font-face {
font-family: '<%= fontName %>';
font-weight: 700;
font-style: normal;
src: url('<%= fontPath %><%= fontName %>.eot');
src: url('<%= fontPath %><%= fontName %>.woff') format('woff'), url('<%= fontPath %><%= fontName %>.ttf') format('truetype'), url('<%= fontPath %><%= fontName %>.eot?#iefix') format('embedded-opentype');
}
.<%=className %>[class^="<%= className %>-"],
.<%=className %>[class*=" <%= className %>-"] {
display: inline-block;
font-family: '<%= fontName %>' !important;
-moz-osx-font-smoothing: grayscale;
-webkit-font-smoothing: antialiased;
font-style: normal;
font-variant: normal;
font-weight: normal;
line-height: 1;
text-transform: none;
}
$icons: ( <%=glyphs.map(function(glyph) {
return glyph.name+': \''+'\\'+glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase()+'\''
}
).join(',\n    ') %>);
@each $name,
$icon in $icons {
.<%=className %>-#{$name}:before {
content: $icon;
display: block;
speak: none;
}
}
