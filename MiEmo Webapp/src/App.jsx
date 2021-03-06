import { React, Suspense } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'

import Settings from './pages/Settings'
import Wifi from './pages/Settings/Wifi'
import Bluetooth from './pages/Settings/Bluetooth'
import CleanupPage from './pages/Settings/CleanupPage'
import AudioMixer from './pages/Settings/AudioMixer'
import AudioTest from './pages/Settings/AudioTest'
import NetworkCheck from './pages/Settings/NetworkCheck'
import CalendarConfig from './pages/Settings/CalendarConfig'

import Page404 from './pages/Page404'

function App() {
	return (
		<Suspense fallback={() => <p>loading</p>}>
			<div className="App">
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="/settings/calendar" element={<CalendarConfig />} />
						<Route path="/settings/cleanup" element={<CleanupPage />} />
						<Route path="/settings/wifi" element={<Wifi />} />
						<Route path="/settings/bluetooth" element={<Bluetooth />} />
						<Route path="/settings/audioMixer" element={<AudioMixer />} />
						<Route path="/settings/audioTest" element={<AudioTest />} />
						<Route path="/settings/networkCheck" element={<NetworkCheck />} />
						<Route path="/*" element={<Page404 />} />
					</Routes>
				</Router>
			</div>
		</Suspense>
	)
}

export default App
