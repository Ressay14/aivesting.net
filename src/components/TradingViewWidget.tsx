import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(
    () => {
      if (container.current) {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
          {
            "symbols": [
              {
                "proName": "FOREXCOM:SPXUSD",
                "title": "S&P 500"
              },
              {
                "proName": "BITSTAMP:BTCUSD",
                "title": "BTC"
              },
              {
                "proName": "BITSTAMP:ETHUSD",
                "title": "ETH"
              }
            ],
            "colorTheme": "dark",
            "locale": "en",
            "largeChartUrl": "",
            "isTransparent": true,
            "showSymbolLogo": false,
            "displayMode": "compact",
            "backgroundColor": "rgba(11, 14, 23, 0.6)",
            "textColor": "rgba(255, 255, 255, 0.7)"
          }`;
        container.current.appendChild(script);
      }
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget); 