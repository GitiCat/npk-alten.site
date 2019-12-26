import React, { Suspense } from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import Footer from "../components/blocks/footer/footer"
import Menu from "../components/blocks/menu/menu"

import Routes from "./routing/route"

class App extends React.Component {
	render() {
		return (
			<Router>
				<Suspense fallback={<div>Loading...</div>}>
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