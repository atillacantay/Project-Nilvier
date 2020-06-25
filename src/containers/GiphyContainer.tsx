import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import { giphyCall } from '../store/giphy/actions'
import { RootState } from '../store'
import Giphy, { GiphyStateProps, GiphyDispatchProps } from './Giphy'

const mapStateToProps: MapStateToProps<GiphyStateProps, unknown, RootState> = ({ giphy }) => ({
  gifs: giphy.gifs,
  isFetching: giphy.isFetching,
  error: giphy.error,
})

const mapDispatchToProps: MapDispatchToProps<GiphyDispatchProps, unknown> = {
  giphyCall,
}

export default connect(mapStateToProps, mapDispatchToProps)(Giphy)
