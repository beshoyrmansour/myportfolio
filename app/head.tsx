export default function Head() {
  return (
    <>
      {/* WhatsApp specific */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Telegram specific */}
      <meta property="telegram:channel" content="@beshoyrmansour" />

      {/* LinkedIn specific - uses Open Graph */}
      <meta property="og:see_also" content="https://www.linkedin.com/in/beshoy-r-mansour/" />

      {/* Medium and article platforms */}
      <meta property="article:author" content="Bishoy R Mansour" />
      <meta property="article:publisher" content="https://beshoyrmansour.com" />

      {/* Additional social meta */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="BR Mansour" />

      {/* Microsoft */}
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Theme colors for different platforms */}
      <meta name="theme-color" content="#3B82F6" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#1E293B" media="(prefers-color-scheme: dark)" />
    </>
  );
}
