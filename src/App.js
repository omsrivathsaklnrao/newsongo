import React from "react";

function App() {
  return (
    <div style={{ height: "100vh", margin: 0 }}>
      <iframe
        src="https://www.newsongo.com"
        title="Newsongo WebView"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        sandbox="allow-scripts allow-same-origin allow-forms"
      />
    </div>
  );
}

export default App;

