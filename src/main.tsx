import App from "@/App.tsx"
import "@/index.css"
import store from "@/redux/store"
import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import 'owl.carousel/dist/assets/owl.carousel.css'; {/* this line */}
import 'owl.carousel/dist/assets/owl.theme.default.css'; {/* this line */}


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
