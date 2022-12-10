import { React } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import * as GlobePreLoaderJson from '../../json/globePreLoader.json'

function PreLoader() {
  return (
    <>
      <section className="App-PerLoader">
        <Player autoplay loop src={GlobePreLoaderJson} style={{height: '400px', width: '400px'}} />
      </section>
    </>
  )
}

export default PreLoader