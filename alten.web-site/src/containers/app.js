import React, { Suspense } from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import Footer from "../components/blocks/footer/footer"
import Menu from "../components/blocks/menu/menu"

import Routes from "./routing/route"
import PageLoading from "../components/blocks/loading/pages/page_loading"

class App extends React.Component {
	render() {
		return (
			<Router>
				<Suspense fallback={<PageLoading/>}>
					<Menu/>
					<article className="content" id="content">
						<Switch>
							<Routes/>
						</Switch>
					</article>
					<Footer/>
				</Suspense>
			</Router>
		)
	}
}

export default App