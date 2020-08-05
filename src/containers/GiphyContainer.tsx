import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import { giphyCall, fetchMoreGifs } from '../store/giphy/actions'
import { RootState } from '../store'
import Giphy, { GiphyStateProps, GiphyDispatchProps } from './Giphy'

const mapStateToProps: MapStateToProps<GiphyStateProps, unknown, RootState> = ({ giphy }) => ({
  term: giphy.term,
  data: giphy.result.data,
  pagination: giphy.result.pagination,
  isFetching: giphy.isFetching,
  isFetchingMore: giphy.isFetchingMore,
  error: giphy.error,
})

const mapDispatchToProps: MapDispatchToProps<GiphyDispatchProps, unknown> = {
  giphyCall,
  fetchMoreGifs,
}

export default connect(mapStateToProps, mapDispatchToProps)(Giphy)
